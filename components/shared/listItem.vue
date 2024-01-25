<template>
  <p
    class="list-item"
    :class="{
      'list-item_done': isDone,
    }"
  >
    <slot />
  </p>
</template>

<script setup lang="ts">
const props = defineProps({
  isDone: Boolean,
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/ui-kit.scss";

.list-item {
  display: flex;
  justify-content: space-between;
}
</style>
