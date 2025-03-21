import { ref, onMounted, onUnmounted } from "vue";

function useTimer(initial = 0) {
  const time = ref(initial);

  let timer;

  onMounted(() => {
    timer = setInterval(() => {
      // console.log("increment");
      time.value++;
    }, 1_000);
  });

  // onUnmounted arrête le timer pour éviter les fuites de mémoire.
  onUnmounted(() => {
    clearInterval(timer);
  });

  return time;
}

export { useTimer };
