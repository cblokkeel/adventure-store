<template>
  <div>
    <h2 class="text-white text-2xl text-center my-8">All products</h2>

    <div class="grid grid-cols-2 gap-7">
      <div v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Product } from '~/lib/types';

const { data: products } = await useFetch<Product[]>(
  'http://localhost:4000/products',
);
</script>
