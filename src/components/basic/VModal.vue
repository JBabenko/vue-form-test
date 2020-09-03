<template>
  <div
    v-if="value"
    class="v-modal"
  >
    <div class="v-modal__window">
      <span
        class="v-modal__close-btn"
        @click="$emit('input', false)"
        v-text="'X'"
      >X</span>
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VModal',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.v-modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);

  &__window {
    position: relative;
    background: $primary;
    padding: 48px;
    border-radius: 8px;
  }

  &__close-btn {
    position: absolute;
    top: 12px;
    right: 12px;
    cursor: pointer;
  }
}
</style>
