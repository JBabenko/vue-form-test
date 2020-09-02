<template>
  <div
    class="v-input"
  >
    <label
      class="v-input__label"
      v-text="label"
    />
    <input
      class="v-input__input"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
    >
  </div>
</template>

<script>
export default {
  name: 'VInput',
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
  },
};
</script>

<style lang="scss" scoped>
.v-input {
  &__label {
    display: block;
    font-weight: 600;
    margin-bottom: 6px;
  }

  &__input {
    width: 100%;
    font-size: 1rem;
    border: 1px solid $gray;
    padding: 6px 12px;
    border-radius: 4px;
  }
}
</style>
