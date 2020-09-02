<template>
  <div class="form">
    <v-tabs
      v-model="activeFormTab"
      :items="formTabs"
    />
    <component
      :is="`Form${activeFormTab}`"
    />
  </div>
</template>

<script>
import FormBasic from '../components/form/FormBasic.vue';
import FormAddress from '../components/form/FormAddress.vue';

export default {
  name: 'TheForm',
  components: {
    FormBasic,
    FormAddress,
  },
  data() {
    return {
      activeFormTab: 'Basic',
      formTabs: [
        {
          text: 'Основные данные',
          value: 'Basic',
        },
        {
          text: 'Адрес доставки',
          value: 'Address',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.form {
  max-width: 800px;
  margin: 48px auto;
}
</style>

<style lang="scss">
.form-content {
  margin-top: 12px;

  &__section {
    display: flex;
    justify-content: space-between;
  }

  &__field {
    flex-grow: 0.45;
    margin-bottom: 16px;
  }
}
</style>
