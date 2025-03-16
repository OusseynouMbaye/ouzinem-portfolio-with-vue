<template>
  <div class="bg-[#D4EBF8] dark:bg-[#080326] min-h-screen">
    <NavBar />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const NavBar = defineAsyncComponent(
  () => import('@/components/layout/NavBar.vue')
);
</script>
