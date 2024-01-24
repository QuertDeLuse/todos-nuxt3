<template>
  <div class="button" @click="click">
    <slot />
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits(["click:btn"]);

const click = () => {
  emits("click:btn");
};
</script>

<style></style>
