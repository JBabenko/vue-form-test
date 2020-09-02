<template>
  <button
    class="v-button"
    :class="{ 'v-button_disabled': disabled }"
    v-text="text"
    @click="$emit('click')"
  />
</template>

<script>
export default {
  name: 'VButton',
  props: {
    text: {
      type: String,
      default: 'Submit',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.v-button {
  padding: 12px;
  color: $primary;
  background-color: $main;
  font-weight: 600;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: $main-hover;
  }

  &_disabled {
    background-color: $gray;

    &:hover {
      background-color: $gray;
      cursor: default;
    }
  }
}
</style>
