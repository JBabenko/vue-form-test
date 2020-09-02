<template>
  <div class="form-content">
    <div class="form-content__section">
      <v-input
        v-model="formData.firstName"
        class="form-content__field"
        placeholder="Иван"
        label="Имя"
      />
      <v-input
        v-model="formData.lastName"
        class="form-content__field"
        placeholder="Иванов"
        label="Фамилия"
      />
    </div>
    <v-input
      v-model="formData.phone"
      class="form-content__field"
      placeholder="+79046524783"
      label="Телефон"
    />
    <v-input
      v-model="formData.email"
      class="form-content__field"
      placeholder="example@example.com"
      label="Email"
    />
    <v-button
      text="Продолжить"
      @click="onSubmit"
    />
  </div>
</template>

<script>
export default {
  name: 'FormBasic',
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
      },
    };
  },
  methods: {
    onSubmit() {
      console.log('submit');
    },
  },
};
</script>

<style lang="scss" scoped>
.form-content {
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
