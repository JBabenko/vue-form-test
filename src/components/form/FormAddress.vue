<template>
  <div class="form-content">
    <v-radio
      v-model="deliveryType"
      class="radio"
      name="deliveryType"
      value="delivery"
      label="Доставка"
    />
    <v-radio
      v-model="deliveryType"
      name="deliveryType"
      value="self"
      label="Самовывоз"
    />
    <validation-observer
      ref="observer"
      tag="div"
      class="form-content"
      v-slot="{ invalid }"
    >
      <template v-if="deliveryType === 'delivery'">
        <div class="form-content__section">
          <v-select
            v-model="formData.country"
            :options="countryList"
            class="form-content__field"
            :style="{ width: `${100/3 - 2}%` }"
            label="Страна"
            rules="required"
          />
          <v-input
            v-model="formData.city"
            class="form-content__field"
            :style="{ width: `${100/3 - 2}%` }"
            placeholder="Москва"
            label="Город"
            rules="required|max:255"
          />
          <v-input
            v-model="formData.index"
            v-mask="'######'"
            class="form-content__field"
            :style="{ width: `${100/3 - 2}%` }"
            placeholder="398000"
            label="Индекс"
            rules="required|max:6|min:6"
          />
        </div>
        <v-input
          v-model="formData.address"
          class="form-content__field"
          placeholder="г. Москва, ул. Космонавтов, 14/5"
          label="Адрес"
          rules="required|max:255"
        />
        <v-input
          v-model="formData.date"
          v-mask="'##/##/####'"
          class="form-content__field"
          placeholder="24/05/2017"
          label="Дата доставки"
          rules="required"
        />
      </template>
      <v-textarea
        v-model="formData.comment"
        class="form-content__field"
        placeholder="Ваш комментарий здесь..."
        label="Комментарий к заказу"
        rows="5"
      />
      <v-button
        text="Оформить заказ"
        :disabled="invalid"
        :loading="loading"
        @click="onSubmit"
      />
    </validation-observer>
  </div>
</template>

<script>
import { mask } from 'vue-the-mask';

export default {
  name: 'FormAddress',
  directives: { mask },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      deliveryType: 'delivery',
      formData: {
        country: '',
        city: '',
        index: '',
        address: '',
        date: '',
        comment: '',
      },
      countryList: [
        {
          text: 'Россия',
          value: 'ru',
        },
        {
          text: 'Украина',
          value: 'uk',
        },
        {
          text: 'Вьетнам',
          value: 'vi',
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      this.$emit('submit');
    },
  },
};
</script>

<style lang="scss" scoped>
.radio {
  margin-bottom: 6px;
}
</style>
