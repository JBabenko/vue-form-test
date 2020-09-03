<template>
  <div id="app">
    <the-form/>
  </div>
</template>

<script>
import TheForm from './views/TheForm.vue';

export default {
  name: 'App',
  components: {
    TheForm,
  },
};
</script>

<style lang="scss" scoped>
#app {
  padding: 48px;
}
</style>
