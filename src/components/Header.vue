<template>
  <header>
    <div>
      <div class="logo">
        <img :src="Logo" alt="" />
        <div class="title">
          <h3>{{ title }}</h3>
          <span>{{ subtitle }}</span>
        </div>
      </div>
    </div>
    <nav>
      <RouterLink to="/" class="nav-item">
        <HomeIcon />
        Home
      </RouterLink>
      <RouterLink to="/orders" class="nav-item">
        <ShoppingCartIcon />
        My Orders
      </RouterLink>
      <RouterLink to="/wishlist" class="nav-item">
        <HeartIcon />
        Wish List
      </RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { ShoppingCartIcon, HeartIcon, HomeIcon } from "@heroicons/vue/24/solid";
import Logo from "../assets/logo.jpg";
import { ref } from "vue";
const title = ref("BEST OF SNEAKERS");
const subtitle = ref("Shop the best sneakers");
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  background-color: #fff;
  color: #535353;
  border-bottom: 1px solid #d2dfd3;
}

.logo {
  display: flex;
  gap: 10px;
  align-items: center;
}
.logo img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.title h3,
span {
  margin: 0;
}

nav {
  display: flex;
  gap: 24px;
}

.nav-item {
  color: #696969;
  font-weight: 400;
  display: flex;
  text-decoration: none;
  align-items: center;
}

.nav-item:hover,
.nav-item:hover svg {
  color: rgb(20, 133, 58);
}

nav svg {
  width: 24px;
  height: 24px;
  padding-right: 6px;
}

.router-link-active {
  color: rgb(20, 133, 58);
  font-weight: 600;
}
</style>
