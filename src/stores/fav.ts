import { defineStore } from 'pinia';
import { Product } from '../types/product';

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: JSON.parse(localStorage.getItem('favorites') || '[]') as Product[],
  }),
  actions: {
    toggleFavorite(product: Product): void {
      const index = this.favorites.findIndex((fav) => fav.title === product.title);
      if (index === -1) {
        this.favorites.push(product);
      } else {
        this.favorites.splice(index, 1);
      }
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    },
    isFavorite(title: string): boolean {
      return this.favorites.some((fav) => fav.title === title);
    },
    getFavorites(): Product[] {
      return this.favorites;
    },
  },
});
