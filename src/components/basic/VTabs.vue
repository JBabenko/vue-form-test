<template>
  <ul class="v-tabs">
    <li
      v-for="tab in items"
      :key="tab.value"
      class="v-tabs__item"
      :class="{ 'v-tabs__item_selected': tab.value === value }"
      @click="onClickTab(tab)"
      v-text="tab.text"
    />
  </ul>
</template>

<script>
export default {
  name: 'VTabs',
  props: {
    value: {
      type: [String, Number],
      default: null,
    },
    items: {
      type: Array,
      required: true,
    },
    changeOnClick: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    onClickTab(tab) {
      if (!this.changeOnClick) return;
      this.$emit('input', tab.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.v-tabs {
  display: flex;
  border-bottom: 1px solid $gray;

  &__item {
    font-size: 17px;
    padding: 12px;
    cursor: pointer;
    color: $main;

    &_selected {
      position: relative;
      border: 1px solid $gray;
      border-bottom: none;
      border-radius: 4px 4px 0 0;
      color: $text;

      &:after {
        content: '';
        display: block;
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 100%;
        height: 1px;
        background: $primary;
      }
    }
  }
}
</style>
