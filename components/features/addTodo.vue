<template>
  <div class="add-todo">
    <shared-button @click="click"> Добавить задачу </shared-button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  fromStart: boolean;
}>();
</script>

<style></style>
