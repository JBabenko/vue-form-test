<template>
  <div
    class="v-radio"
    :class="{ 'v-radio_checked': checked
     }"
  >
    <input
      :id="id"
      :name="name"
      :checked="checked"
      :value="value"
      type="radio"
      class="v-radio__input"
      @change="onChange"
    >
    <label
      :for="id"
      class="v-radio__label"
      v-text="label"
    >
      <slot/>
    </label>
  </div>
</template>

<script>
export default {
  name: 'VRadio',
  model: {
    prop: 'modelProp',
    event: 'change',
  },
  props: {
    modelProp: {
      type: [String, Number],
      default: '',
    },
    name: {
      type: String,
      default: 'option',
    },
    value: {
      type: [String, Number],
      default: 'val',
    },
    label: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      id: null,
    };
  },
  computed: {
    checked() {
      return this.modelProp === this.value;
    },
  },
  mounted() {
    this.id = `radio-${this._uid}`;
  },
  methods: {
    onChange() {
      this.$emit('change', this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
  .v-radio {
    display: flex;
    align-items: center;

    &__input {
      display: none;

      &:checked {
        + .v-radio__label {
          &:before {
            background-color: $main;
          }

          &:after {
            opacity: 1;
          }
        }
      }
    }
    &__label {
      color: $text;
      position: relative;
      display: block;
      padding-left: 24px;
      cursor: pointer;
      &:before, &:after {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      &:before {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 1px solid $gray;
        left: 0;
      }
      &:after {
        width: 4px;
        height: 4px;
        background-color: $primary;
        border-radius: 50%;
        left: 7px;
        opacity: 0;
      }
    }
  }
</style>
