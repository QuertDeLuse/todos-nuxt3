<template>
  <div class="todo-list">
    <features-add-todo class="todo-list__control" from-start />

    <ul class="">
      <li class="todo-list__item" v-for="todo in todos" :key="todo.id">
        <shared-listitem>
          {{ todo.title }}
        </shared-listitem>
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
  list-style-type: none;
  margin: 0;
  padding: 0;

  &__item {
  }
}
</style>
