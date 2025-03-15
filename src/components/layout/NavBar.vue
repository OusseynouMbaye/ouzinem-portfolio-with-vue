<template>
  <header>
    <div class="flex justify-center items-center p-8 lg:px-12 relative z-20">
      <div class="text-3xl font-bold dark:text-white">My Logo Here</div>
      <!-- Mobile toggle Button -->
      <div class="md:hidden z-30">
        <button
          class="block focus:outline-none"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span
            v-if="isMenuOpen"
            class="text-5xl md:text-primary text-white dark:texte-white"
          >
            <Icon icon="material-symbols:close" />
          </span>
          <span
            v-else
            class="text-5xl md:text-primary text-white dark:texte-white"
          >
            <Icon icon="material-symbols:menu" />
          </span>
        </button>
      </div>
    </div>
  </header>
</template>
<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
</script>
<style lang=""></style>
