<template>
  <button
    class="v-button"
    :class="{ 'v-button_disabled': disabled || loading }"
    :disabled="disabled"
    v-text="loading ? 'Отправка...' : text"
    @click="onClick"
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
    loading: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    disabled(val) {
      this.$emit('toggleDisabled', val);
    },
  },
  methods: {
    onClick() {
      if (this.disabled) return;
      this.$emit('click');
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
