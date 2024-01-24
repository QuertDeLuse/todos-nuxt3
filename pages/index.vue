<template>
  <div class="container">
    <WidgetsTodoList :todos="todos" />
    <!-- <ListItem>qwe</ListItem> -->
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { TodoItem } from "@/utils/types";
import { useTodoStore } from "~/store/todo";
const todoStore = useTodoStore();

onMounted(() => {
  //immitate api query for taking user todos data from server

  const todos: Array<TodoItem> = [
    { id: 1, title: "first" },
    { id: 2, title: "second" },
    { id: 3, title: "third" },
  ];

  todoStore.setAllItems(todos);

  console.log(todoStore.getTodos);
});

const todos = computed(() => todoStore.getTodos);
</script>

<style scoped lang="scss">
@import "@/assets/scss/main.scss";
</style>
