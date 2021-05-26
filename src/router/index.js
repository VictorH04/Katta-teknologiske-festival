import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Booking from "../views/Booking.vue";
import Paamelding from "../views/Paamelding.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/booking",
    name: "Booking",
    component: Booking,
  },
  {
    path: "/paamelding",
    name: "Paamelding",
    component: Paamelding,
  },
  {
    path: "/kontakt",
    name: "Contact",
    component: Contact,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior() {
    window.scrollTo(0, 0);
  },
});

export default router;
