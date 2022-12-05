import { defineStore } from 'pinia';
import { CartItem } from '~~/lib/types';

interface CartStoreState {
  cart: CartItem[];
}

export const useCartStore = defineStore('cart', {
  state: (): CartStoreState => ({
    cart: [],
  }),
  actions: {
    async loadCart() {
      const data = await $fetch<CartItem[]>('http://localhost:4000/cart');
      this.cart = data;
    },
  },
});
