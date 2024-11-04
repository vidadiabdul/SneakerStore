import { createRouter, createWebHistory } from 'vue-router';
import Home from '../Views/Home.vue';
import MyOrders from '../Views/MyOrders.vue';
import MyWishList from '../Views/MyWishList.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/orders', name: 'MyOrders', component: MyOrders },
  { path: '/wishlist', name: 'MyWishList', component: MyWishList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
