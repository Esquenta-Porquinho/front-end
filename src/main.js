import Vue from "vue";
import App from "@/App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import i18n from "./plugins/i18n";

new Vue({
  el: "#app",
  router,
  vuetify,
  i18n,
  render: (h) => h(App),
});
