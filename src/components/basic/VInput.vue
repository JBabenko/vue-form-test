<template>
  <validation-provider
    tag="div"
    class="v-input"
    :name="name || label"
    :rules="rules"
    v-slot="{ errors }"
  >
    <label
      class="v-input__label"
      :for="`input-${id}`"
      v-text="label"
    />
    <input
      class="v-input__input"
      :id="`input-${id}`"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="onInput($event.target.value)"
    >
    <span>{{ errors[0] }}</span>
  </validation-provider>
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
    name: {
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
    rules: {
      type: [String, Object],
      default: '',
    },
  },
  data() {
    return {
      id: null,
    };
  },
  mounted() {
    this.id = `radio-${this._uid}`;
  },
  methods: {
    onInput(val) {
      this.$emit('input', val);
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
