<template>
  <div class="banner">
    <img class="w-100" src="../assets/ban.png" alt="" />
  </div>
  <div class="title">
    <h1>All sneakers</h1>
  </div>
  <div class="product-list">
    <ProductCardSkeleton v-if="loading" v-for="n in 8" :key="n" />
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :image="product.image"
      :title="product.title"
      :price="product.price"
      :category="product.category"
      @add-to-cart="handleAddToCart"
    />
  </div>
</template>

<script setup>
import ProductCard from "../components/ProductCard.vue";
import ProductCardSkeleton from "../components/ProductCardSkeleton.vue";
import { getProducts } from "../services/product";
import { ref, onMounted } from "vue";
import { useCartStore } from "../stores/cart";
import { useSidebarStore } from "../stores/sidebar";

const products = ref([]);
const loading = ref(true);
const cartStore = useCartStore();
const sidebarStore = useSidebarStore();

onMounted(async () => {
  products.value = await getProducts();
  loading.value = false;
});

function handleAddToCart(product) {
  sidebarStore.toggleSidebar();
  cartStore.addToCart(product);
}
</script>

<style scoped>
.banner {
  text-align: center;
}
.banner img {
  width: 100%;
}
.product-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-content: center;
}

.title {
  display: flex;
  margin: 20px 0;
}
</style>
