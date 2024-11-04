import { defineStore } from 'pinia';
import { Product } from '../types/product';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: JSON.parse(localStorage.getItem('cart') || '[]') as Product[],
  }),
  actions: {
    addToCart(product: Product): void {
      const index = this.cart.findIndex((item) => item.title === product.title);
      if (index === -1) {
        this.cart.push(product); 
      }
      localStorage.setItem('cart', JSON.stringify(this.cart)); 
    },
    removeFromCart(productTitle: string): void {
      this.cart = this.cart.filter((item) => item.title !== productTitle); 
      localStorage.setItem('cart', JSON.stringify(this.cart)); 
    },
    isInCart(productTitle:string):boolean {
      return this.cart.some((item) => item.title === productTitle);     
    },
    getCart(): Product[] {
      return this.cart; 
    },
  },
});
