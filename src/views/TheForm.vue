<template>
  <div class="form">
    <v-tabs
      v-model="activeFormTab"
      :items="formTabs"
      :change-on-click="canChangeTab"
    />
    <form-basic
      v-show="activeFormTab === 'basic'"
      ref="formBasic"
      @changeValidity="isBasicValid = $event"
      @submit="activeFormTab = 'address'"
    />
    <form-address
      v-if="activeFormTab === 'address'"
      ref="formAddress"
      :loading="loading"
      @submit="onSubmit"
    />
    <v-modal v-model="isModalVisible">
      {{ modalMessage }}
    </v-modal>
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
      activeFormTab: 'basic',
      formTabs: [
        {
          text: 'Основные данные',
          value: 'basic',
        },
        {
          text: 'Адрес доставки',
          value: 'address',
        },
      ],
      isBasicValid: false,
      modalMessage: '',
      isModalVisible: false,
      loading: false,
    };
  },
  computed: {
    canChangeTab() {
      return this.isBasicValid;
    },
  },
  methods: {
    async onSubmit() {
      const { formBasic, formAddress } = this.$refs;
      const payload = { ...formBasic.formData, ...formAddress.formData };

      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://craniomed.ru/test/test.php', true);
      xhr.send(JSON.stringify(payload));
      this.loading = true;
      xhr.onload = () => {
        this.loading = false;
        const { success } = JSON.parse(xhr.response);
        if (success) {
          this.modalMessage = 'Успешно отправлено';
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        } else {
          this.modalMessage = 'Ошибка! Просьба повторить запрос позже';
          setTimeout(() => {
            this.isModalVisible = false;
          }, 3000);
        }

        this.isModalVisible = true;
      };
    },
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
    margin-bottom: 16px;
  }
}
</style>
