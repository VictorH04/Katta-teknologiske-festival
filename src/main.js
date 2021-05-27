import AOS from "aos";
import "aos/dist/aos.css";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Meta from "vue-meta";
import BootstrapVue from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(Meta);

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },
  router,
  render: (h) => h(App),
}).$mount("#app");
