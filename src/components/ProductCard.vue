<template>
  <div class="product-card">
    <div :class="isFaved ? 'faved' : 'fav'" @click="toggleFavorite">
      <HeartIcon />
    </div>
    <div class="product-img"><img :src="image" /></div>
    <h2 class="truncate">{{ title }}</h2>
    <div class="card-body">
      <div>
        <span>{{ category }}</span>
        <p>$ {{ price }}</p>
      </div>
      <button @click="toggleCart" :class="{ add: !isInCart, added: isInCart }">
        <template v-if="isInCart">
          <CheckIcon />
        </template>
        <template v-else>
          <PlusIcon />
        </template>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HeartIcon, PlusIcon, CheckIcon } from "@heroicons/vue/24/solid";
import { computed } from "vue";
import { useFavoritesStore } from "../stores/fav";
import { useCartStore } from "../stores/cart";
import { defineEmits, defineProps } from "vue";
import type { Product } from "../types/product";
import "./product.css";

const props = defineProps<Product>();
const emit = defineEmits<{
  (e: "add-to-cart", product: Product): void;
  (e: "remove-from-cart", productTitle: string): void;
}>();

const favoritesStore = useFavoritesStore();
const cartStore = useCartStore();

const isFaved = computed(() => favoritesStore.isFavorite(props.title));
const isInCart = computed(() => cartStore.isInCart(props.title));


const toggleFavorite = () => {
  favoritesStore.toggleFavorite({
    id: props.id,
    image: props.image,
    category: props.category,
    title: props.title,
    price: props.price,
    description: props.description,
    rating: props.rating,
  });
};

const toggleCart = () => {
  if (isInCart.value) {
    cartStore.removeFromCart(props.title);
    emit("remove-from-cart", props.title);
  } else {
    const productToAdd: Product = {
      id: props.id,
      title: props.title,
      price: props.price,
      category: props.category,
      image: props.image,
      description: props.description,
      rating: props.rating,
    };
    cartStore.addToCart(productToAdd);
    emit("add-to-cart", productToAdd);
  }
};
</script>
