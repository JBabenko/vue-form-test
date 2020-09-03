<template>
  <validation-observer
    ref="observer"
    tag="div"
    class="form-content"
    v-slot="{ invalid }"
  >
    <div class="form-content__section">
      <v-input
        v-model="formData.firstName"
        class="form-content__field"
        :style="{ width: `${100/2 - 2}%` }"
        placeholder="Иван"
        label="Имя"
        rules="required|max:255"
      />
      <v-input
        v-model="formData.lastName"
        class="form-content__field"
        :style="{ width: `${100/2 - 2}%` }"
        placeholder="Иванов"
        label="Фамилия"
        rules="required|max:255"
      />
    </div>
    <v-input
      v-model="formData.phone"
      v-mask="'# (###) ###-##-##'"
      class="form-content__field"
      placeholder="8 (904) 652-47-83"
      label="Телефон"
      rules="required"
    />
    <v-input
      v-model="formData.email"
      class="form-content__field"
      placeholder="example@example.com"
      label="Email"
      rules="required|email"
    />
    <v-button
      text="Продолжить"
      :disabled="invalid"
      @toggleDisabled="isValid = !$event"
      @click="onSubmit"
    />
  </validation-observer>
</template>

<script>
import { mask } from 'vue-the-mask';

export default {
  name: 'FormBasic',
  directives: { mask },
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
      },
      isValid: false,
    };
  },
  watch: {
    isValid(val) {
      this.$emit('changeValidity', val);
    },
  },
  methods: {
    onSubmit() {
      this.$emit('submit');
    },
  },
};
</script>
