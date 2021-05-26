import AOS from "aos";
import "aos/dist/aos.css";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Meta from "vue-meta";
Vue.use(Meta);

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },
  router,
  render: (h) => h(App),
}).$mount("#app");
