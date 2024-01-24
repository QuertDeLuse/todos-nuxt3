<template>
  <ul class="todo-list">
    <li class="todo-list__item" v-for="todo in todos" :key="todo.id">
      <SharedListItem>
        {{ todo.title }}
      </SharedListItem>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { TodoItem } from "@/utils/types";
const props = defineProps<{
  todos: Array<TodoItem>;
}>();
</script>

<style scoped lang="scss">
@import "@/assets/scss/main";

.todo-list {
  list-style-type: none;
  margin: 0;
  padding: 0;

  &__item {
  }
}
</style>
