<template>
  <div class="list-card">
    <div class="list-img"><img :src="image" :alt="title" /></div>
    <div class="list-body">
      <h2 class="truncate">{{ title }}</h2>
      <p>$ {{ price }}</p>
    </div>
    <div>
      <button @click="removeProduct" class="delete"><XMarkIcon /></button>
    </div>
  </div>
</template>

<script setup>
import { XMarkIcon } from "@heroicons/vue/24/solid";
import { useCartStore } from "../stores/cart";
import { defineProps, defineEmits } from "vue";

const cartStore = useCartStore();
const emit = defineEmits();

const props = defineProps({
  image: String,
  title: String,
  price: Number,
});

const removeProduct = () => {
  emit("removeProduct", props.title);
};
</script>
