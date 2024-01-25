<template>
  <div class="todo-list__wrapper">
    <features-add-todo class="todo-list__control" from-start />

    <ul class="todo-list">
      <li class="todo-list__item" v-for="todo in todos" :key="todo.id">
        <shared-list-item>
          {{ todo.id }} {{ todo.title }}
          <features-delete-todo :id="todo.id" />
        </shared-list-item>
      </li>
    </ul>

    <features-add-todo class="todo-list__control" />
  </div>
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
  &__wrapper {
  }

  list-style-type: none;
  margin: 0;
  padding: 0;

  &__item {
  }
}
</style>
