<template>
  <h1>My orders</h1>
  <div v-if="cartProducts.length >0" class="wish-list">
    <ProductCard
      v-for="product in cartProducts"
      :key="product.id"
      :image="product.image"
      :title="product.title"
      :price="product.price"
      :category="product.category"
    />
  </div>
  <div v-else class="empty">
    <img src="../assets/cry.png" alt="" />
    <h2>You have no orders</h2>
    <p>But don't worry, you can start shopping right now!</p>
    <BaseButton @click="handleClick" :leftIcon="ArrowLeftIcon">
      Go back
    </BaseButton>
  </div>
</template>

<script setup>
import ProductCard from "../components/ProductCard.vue";
import { ref, onMounted } from "vue";
import { useCartStore } from "../stores/cart";
import BaseButton from "../components/BaseButton.vue";
import { ArrowLeftIcon } from "@heroicons/vue/24/solid";
import { useRouter } from 'vue-router';

const cartStore = useCartStore();
const cartProducts = ref([]);
const router = useRouter();

function handleClick() {
  router.push('/');
}

onMounted(() => {
  cartProducts.value = cartStore.getCart();
});
</script>

