import Vue from "vue";
import App from "@/App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import i18n from "./plugins/i18n";
import VueCharts from "vue-chartjs";

Vue.use(VueCharts);

new Vue({
  el: "#app",
  router,
  vuetify,
  i18n,
  render: (h) => h(App),
});
