<template>
  <div class="delete-todo">
    <shared-button @click="deleteItem" class="delete-todo__text"
      >X</shared-button
    >
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from "~/store/todo";
const todoStore = useTodoStore();

const props = defineProps<{
  id: number;
}>();

const deleteItem = () => {
  todoStore.deleteItem(props.id);
};
</script>

<style scoped lang="scss">
.delete-todo {
  &__text {
    color: red;
    font-weight: bold;
  }
}
</style>
