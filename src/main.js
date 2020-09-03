import Vue from 'vue';
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/ru.json';
import App from './App.vue';
import './components/basic';
import './assets/styles/base.scss';

Vue.config.productionTip = false;

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
Object.keys(rules).forEach((rule) => {
  extend(rule, {
    ...rules[rule],
    message: messages[rule],
  });
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
