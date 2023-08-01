import Vue from "vue";
import store from "./store";
import router from "./router";
import App from "./App.vue";
import vuetify from "./vuetify";

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
