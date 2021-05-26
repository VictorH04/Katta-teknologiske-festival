<template>
  <div>
    <nav class="navbar-container">
      <div
        class="navbar-container_icon"
        @click="toggleNav()"
        :class="{ active: isOpen }"
      >
        <span class="navbar-container_line1"></span>
        <span class="navbar-container_line2"></span>
        <span class="navbar-container_line3"></span>
      </div>
    </nav>

    <transition name="slide-fade" key="content">
      <nav class="navcontent" v-if="slideIn">
        <ul
          class="navcontent-ul"
          :class="{ navOpen: isOpen, displayNone: displayClosed }"
        >
          <router-link
            @click.native="removeNav()"
            to="/"
            class="navcontent-ul--hjem"
            id="dropdown-hjem"
          >
            <h1 class="navcontent-ul--hjem-title">
              Hjem
            </h1>
          </router-link>

          <router-link
            @click.native="removeNav()"
            to="/booking"
            class="navcontent-ul--booking"
            id="dropdown-booking"
          >
            <h1 class="navcontent-ul--booking-title">
              Booking
            </h1>
          </router-link>

          <router-link
            @click.native="removeNav()"
            to="/paamelding"
            class="navcontent-ul--meld"
            id="dropdown-meld"
          >
            <h1 class="navcontent-ul--meld-title">
              Påmelding
            </h1>
          </router-link>

          <router-link
            @click.native="removeNav()"
            to="/kontakt"
            class="navcontent-ul--kontakt"
            id="dropdown-kontakt"
          >
            <h1 class="navcontent-ul--kontakt-title">
              Kontakt
            </h1>
          </router-link>
        </ul>
      </nav>
    </transition>
  </div>
</template>

<script>
export default {
  name: "NavbarComp",
  props: {},
  data() {
    return {
      isOpen: false,
      displayClosed: true,
      slideIn: false,
    };
  },
  methods: {
    toggleNav() {
      // document.documentElement.classList.toggle("overflow");
      this.isOpen = !this.isOpen;
      this.displayClosed = !this.displayClosed;
      this.slideIn = !this.slideIn;
    },
    removeNav() {
      this.isOpen = !this.isOpen;
      this.displayClosed = !this.displayClosed;
      this.slideIn = !this.slideIn;
    },
  },
};
</script>

<style lang="scss">
@import "SASS/base/_navbar.scss";
</style>
