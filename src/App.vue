<template>
  <form action="" @submit.prevent="addTask">
    <input type="text" placeholder="add a new task" v-model="newTask" /><button
      :disabled="newTask.length === 0"
    >
      Add a taks
    </button>
  </form>

  <div>
    <div v-if="!tasks.length">
      <p>Vous n'avez pas de taches</p>
    </div>

    <div v-else>
      <ul>
        <li v-for="task in sortedTasks" :key="task.date" :class="{ completed: task.completed }">
          <label>
            <input type="checkbox" v-model="task.completed" v-bind:id="task.title" />
          </label>
          {{ task.title }}
        </li>
      </ul>

      <label> <input type="checkbox" v-model="hideCompleted" /> hide completed tasks </label>
      <p v-if="remainingTask > 0">
        {{ remainingTask }} tache{{ remainingTask > 1 ? "s" : "" }} a faitre
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";

const newTask = ref("");

const hideCompleted = ref(false);

const tasks = ref([
  {
    title: "Learn vue",

    completed: true,

    date: 1020302103,
  },

  {
    title: "faire a manger",

    completed: false,

    date: 2,
  },
]);

const addTask = () => {
  tasks.value.push({
    title: newTask.value,

    completed: false,

    date: Date.now(),
  });
  newTask.value = "";
};

const sortedTasks = computed(() => {
  console.log("ici");
  const sortedTasks = tasks.value.toSorted((a, b) => (a.completed > b.completed ? 1 : -1));

  if (hideCompleted.value === true) {
    return sortedTasks.filter((t) => t.completed === false);
  }
  return sortedTasks;
});

const remainingTask = computed(() => {
  return tasks.value.filter((t) => t.completed === false).length;
});

console.log(remainingTask.value);
</script>

<style>
.completed {
  opacity: 0.5;
  text-decoration: line-through;
}
</style>
