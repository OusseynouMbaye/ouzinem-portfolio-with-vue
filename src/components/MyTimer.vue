<template>
  <div>
    <p>Time : {{ time }}</p>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const time = ref(0);

let timer;
onMounted(() => {
  timer = setInterval(() => {
    console.log("increment");
    time.value++;
  }, 1_000);
});

// onUnmounted arrête le timer pour éviter les fuites de mémoire.
onUnmounted(() => {
  clearInterval(timer);
});
</script>
