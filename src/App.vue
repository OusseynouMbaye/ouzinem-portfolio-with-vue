<template>
  <div style="margin-block: 2rem">
    <input type="text" v-model="page.title" />
    <p>{{ page.title }}</p>
    <p>Time : {{ timer }}</p>
  </div>
</template>
<script setup>
import { ref, watchEffect } from "vue";
import { useTimer } from "./composable/useTimer.js";

const timer = useTimer();
const page = ref({
  title: "",
});

// watch(
//   () => page.value.title,
//   (newValue, oldValue) => {
//     // console.log("name changed", newValue, oldValue);
//     document.title = newValue;
//   },
//   { immediate: true },
// );

watchEffect(() => {
  document.title = page.value.title;
});
</script>
