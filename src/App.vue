<template>
  <div class="bg-whiteBg dark:bg-darkBg min-h-screen">
    <NavBar />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const NavBar = defineAsyncComponent(
  () => import('@/components/layout/NavBar.vue')
);
</script>
