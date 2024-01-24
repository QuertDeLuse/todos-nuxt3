<template>
  <div class="modal-wrapper" v-if="isShow">
    <div class="modal">
      <div class="close" @click="closeModal">X</div>
      <div class="header">
        <slot name="header" />
      </div>
      <div class="body">
        <slot name="body" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  isShow: boolean;
}>();

const emits = defineEmits(["close"]);

const closeModal = () => {
  emits("close");
};
</script>

<style scoped lang="scss">
.modal-wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .modal {
    position: relative;
    padding: 20px;
    background-color: antiquewhite;

    .close {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: 15px;

      &:hover {
        background-color: red;
      }
    }

    .header {
      font-size: 18px;
    }
    .body {
      margin-top: 20px;
      font-size: 14px;
    }
  }
}
</style>
