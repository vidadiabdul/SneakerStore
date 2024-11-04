<template>
  <teleport to="body">
    <div v-if="isSidebarVisible" class="sidebar">
      <div v-if="cartProducts.length > 0" class="side-cont">
        <div class="side-top">
          <h1>Cart</h1>
          <div class="product-list">
            <ProductListCard
              v-for="product in cartProducts"
              :key="product.id"
              :image="product.image"
              :title="product.title"
              :price="product.price"
              @removeProduct="handleRemoveProduct"
            />
          </div>
        </div>
        <div class="side-bot">
          <h4>Total:</h4>
          <h4>Tax 5%:</h4>
          <BaseButton @click="handleClick" :rightIcon="ArrowRightIcon">
            Checkout
          </BaseButton>
        </div>
      </div>
      <div v-else class="empty">
        <img src="../assets/box.png" alt="" />
        <h2>Cart empty</h2>
        <p>Add at least one pair of sneakers to complete your order.</p>
        <BaseButton @click="closeSidebar()" :leftIcon="ArrowLeftIcon">
          Go back
        </BaseButton>
      </div>
    </div>
    <div
      v-if="isSidebarVisible"
      class="sidebar-overlay"
      @click.self="closeSidebar"
    ></div>
  </teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import { useCartStore } from "../stores/cart";
import { useSidebarStore } from "../stores/sidebar";
import BaseButton from "../components/BaseButton.vue";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/vue/24/solid";
import { useRouter } from "vue-router";
import ProductListCard from "../components/ProductListCard.vue";

const cartStore = useCartStore();
const cartProducts = ref([]);
const router = useRouter();
const sidebarStore = useSidebarStore();
const { isSidebarVisible, closeSidebar } = sidebarStore;

function handleClick() {
  router.push("/orders");
  closeSidebar();
}

function handleRemoveProduct(title) {
  cartStore.removeFromCart(title);
  cartProducts.value = cartStore.getCart();
}

onMounted(() => {
  cartProducts.value = cartStore.getCart();
});

watch(
  () => isSidebarVisible.value,
  (newVal) => {
    if (newVal) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }
);

onUnmounted(() => {
  document.body.classList.remove("no-scroll");
});
</script>

<style>
.no-scroll {
  overflow: hidden;
}

.sidebar-overlay {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  z-index: 9998;
}

.sidebar {
  scroll-behavior: smooth;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9999;
  width: 385px;
  background-color: #fff;
  height: 100%;
  align-content: center;
}

.side-cont {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 30px 30px 0 30px;
}

.side-top {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.product-list {
  overflow-y: auto;
  display: grid;
  gap: 20px;
}
.side-bot {
  position: sticky;
  bottom: 0;
  right: 0;
  padding: 20px 0;
  background-color: #fff;
}

h4 {
  margin: 10px 0;
}
</style>
