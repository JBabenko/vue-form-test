<template>
  <validation-provider
    tag="div"
    class="v-select"
    :name="label"
    :rules="rules"
    v-slot="{ errors }"
  >
    <span
      v-if="label"
      class="v-select__label"
      v-text="label"
    />
    <select
      v-model="selected"
      class="v-select__select"
      @change="onChange"
    >
      <option
        value=""
        disabled
        class="v-select__option"
        v-text="'Не выбрано'"
      />
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        class="v-select__option"
        v-text="option.text"
      />
    </select>
    {{errors[0]}}
  </validation-provider>
</template>

<script>
export default {
  name: 'VSelect',
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    rules: {
      type: [String, Object],
      default: '',
    },
  },
  data() {
    return {
      selected: '',
    };
  },
  methods: {
    onChange({ target }) {
      this.$emit('input', target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.v-select {
  &__label {
    display: block;
    font-weight: 600;
    margin-bottom: 6px;
  }

  &__select {
    width: 100%;
    font-size: 1rem;
    border: 1px solid $gray;
    padding: 6px 12px;
    border-radius: 4px;
  }
}
</style>
