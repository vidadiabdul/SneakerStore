<template>
  <button
    :class="['base-button', buttonClass]"
    @click="handleClick"
  >
    <template v-if="leftIcon">
      <span class="left-icon">
        <component :is="leftIcon" />
      </span>
    </template>

    <slot />

    <template v-if="rightIcon">
      <span class="right-icon">
        <component :is="rightIcon" />
      </span>
    </template>
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, DefineComponent } from 'vue';

interface Icon {
  render: () => DefineComponent;
}

const props = defineProps<{
  buttonClass?: string;
  leftIcon?: DefineComponent;
  rightIcon?: DefineComponent;
}>();

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

function handleClick(event: MouseEvent) {
  emit('click', event);
}
</script>

  
  <style scoped>
  .base-button {
    width: 100%;
    min-width: 245px;
    padding: 0 20px;
    height: 56px;
    border: none;
    cursor: pointer;
    background-color: #9DD458;;
    color: white;
    border-radius: 18px;
    font-size: 16px;
    transition: background-color 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px; 
  }
  
  .base-button:hover {
    background-color: #6a913b;
  }
  
  .left-icon, .right-icon {
    width: 24px;
    color: #fff;
    display: inline-flex;
    align-items: center;
  }
  </style>
  