<template>
  <label for=""> <input type="checkbox" @change="onChange" v-model="model" /> {{ label }} </label>
</template>

<script setup>
// pour faire descendre l'information du parent vers enfant
defineProps({
  label: String,
});

const model = defineModel();
const emits = defineEmits(["check", "uncheck"]);

const onChange = (event) => {
  if (event.currentTarget.checked) {
    emits("check", event.currentTarget);
  } else {
    emits("uncheck", event.currentTarget);
  }
};

// console.log(label);
</script>
