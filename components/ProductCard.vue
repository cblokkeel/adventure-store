<template>
  <div class="card flex items-center gap-8">
    <img :src="product.img" :alt="product.description" />
    <div>
      <p class="text-2xl text-secondary">{{ product.title }}</p>
      <p class="text-xl text-gray-50">{{ product.description }}</p>
      <p class="text-lg text-secondary my-3">
        {{ product.price }} Silver coins
      </p>
      <button class="btn">
        <span>Add to Basket</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Product } from '~~/lib/types';

const { product } = defineProps<{
  product: Product;
}>();
</script>
