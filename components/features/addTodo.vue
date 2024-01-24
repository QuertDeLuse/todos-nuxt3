<template>
  <div class="add-todo">
    <shared-button @click="isShoModal = true"> Добавить задачу </shared-button>
    <shared-modal :is-show="isShoModal" @close="isShoModal = false">
      <template #header>Добавить новую задачу</template>
      <template #body>Здесь пишется название новой задачи ...</template>
      <template #actions>
        <shared-button @click="isShoModal = false">Закрыть</shared-button>
        <shared-button @click="addNew">Добавить</shared-button>
      </template>
    </shared-modal>
  </div>
</template>

<script setup lang="ts">
import type { TodoItem } from "@/utils/types";
import { useTodoStore } from "~/store/todo";
const todoStore = useTodoStore();

const props = defineProps<{
  fromStart: boolean;
}>();

const isShoModal = ref(false);

const addNew = () => {
  const newItem: TodoItem = {
    id: todoStore.getTodos.length,
    title: "New deal",
  };

  todoStore.addTodo(newItem, props.fromStart);
};
</script>

<style></style>
