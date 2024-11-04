<template>
  <h1>My wish list</h1>
  <div v-if="favProducts.length > 0" class="wish-list">
    <ProductCard
      v-for="product in favProducts"
      :key="product.id"
      :image="product.image"
      :title="product.title"
      :price="product.price"
      :category="product.category"
      @add-to-cart="handleAddToCart"

    />
  </div>
  <div v-else class="empty">
    <img src="../assets/sad.png" alt="" />
    <h2>No wish :(</h2>
    <p>You haven't added anything to your wishlist</p>
    <BaseButton @click="handleClick" :leftIcon="ArrowLeftIcon">
      Go back
    </BaseButton>
  </div>
</template>

<script setup>
import ProductCard from "../components/ProductCard.vue";
import { ref, onMounted } from "vue";
import { useFavoritesStore } from "../stores/fav";
import BaseButton from "../components/BaseButton.vue";
import { ArrowLeftIcon } from "@heroicons/vue/24/solid";
import { useRouter } from 'vue-router';
import { useCartStore } from "../stores/cart";

import { useSidebarStore } from "../stores/sidebar";

const router = useRouter();
const favoritesStore = useFavoritesStore();
const favProducts = ref([]);
const cartStore = useCartStore();
const sidebarStore = useSidebarStore();

function handleClick() {
  router.push('/');
}

function handleAddToCart(product) {
  sidebarStore.toggleSidebar();
  cartStore.addToCart(product);
}

onMounted(() => {
  favProducts.value = favoritesStore.getFavorites();
});
</script>

