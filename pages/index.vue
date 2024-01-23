<template>
  <div>
    <h1>hello</h1>
  </div>
</template>

<script setup lang="ts">
import type { TodoItem } from "@/utils/types";
import { useTodoStore } from "~/store/todo";
const todoStore = useTodoStore();

const todos: Array<TodoItem> = [
  { id: 1, title: "first" },
  { id: 2, title: "second" },
  { id: 3, title: "third" },
];
</script>

<style></style>
