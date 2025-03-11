<template>
  <div style="margin-block: 2rem">
    <button @click="showTimer = !showTimer">Afficher/ Masquer</button>
    <MyTimer v-if="showTimer" />
    <form action="" @submit.prevent="addTask">
      <fieldset role="group">
        <label for=""></label>
        <input type="text" placeholder="add a new task" v-model="newTask" /><button
          :disabled="newTask.length === 0"
        >
          Add
        </button>
      </fieldset>
    </form>

    <div>
      <div v-if="!tasks.length">
        <p>Vous n'avez pas de taches</p>
      </div>

      <div v-else>
        <ul>
          <li v-for="task in sortedTasks" :key="task.date" :class="{ completed: task.completed }">
            <Checkbox :label="task.title" v-model="task.completed" v-bind:id="task.title" />
          </li>
        </ul>

        <label> <input type="checkbox" v-model="hideCompleted" /> hide completed tasks </label>
        <p v-if="remainingTask > 0">
          {{ remainingTask }} tache{{ remainingTask > 1 ? "s" : "" }} a faitre
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import Checkbox from "./components/Checkbox.vue";
import MyTimer from "./components/MyTimer.vue";

const newTask = ref("");

const showTimer = ref(true);

const hideCompleted = ref(false);

const tasks = ref([]);

onMounted(() => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((r) => r.json())
    .then((v) => (tasks.value = v.map((task) => ({ ...task, date: task.id }))));
});

const addTask = () => {
  tasks.value.push({
    title: newTask.value,

    completed: false,

    date: Date.now(),
  });
  newTask.value = "";
};

const sortedTasks = computed(() => {
  // console.log("ici");
  const sortedTasks = tasks.value.toSorted((a, b) => (a.completed > b.completed ? 1 : -1));

  if (hideCompleted.value === true) {
    return sortedTasks.filter((t) => t.completed === false);
  }
  return sortedTasks;
});

const remainingTask = computed(() => {
  return tasks.value.filter((t) => t.completed === false).length;
});

// console.log(remainingTask.value);

// const tonText = ref(["ici", "allo"]);
// const affiche = computed(() => {
//   return tonText.value.map((element) => {
//     return element;
//   });
// });
// console.log(affiche.value);
</script>

<style>
.completed {
  opacity: 0.5;
  text-decoration: line-through;
}
ul li {
  list-style: none;
}
</style>

<!--
onMounted(async () => {
  try {
    const fetchTasks = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    };

    const data = await fetchTasks();
    tasks.value = data.map(({ id, ...task }) => ({
      ...task,
      date: id,
    }));
  } catch (error) {
    console.error("Failed to fetch tasks:", error);
  }
});

-->
