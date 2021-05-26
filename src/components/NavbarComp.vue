<template>
  <div class="navbar">
    <nav
      class="navbar-container"
      data-aos="fade-down"
      data-aos-duration="1250"
      data-aos-delay="500"
    >
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

    <transition name="slide-fade">
      <nav class="navcontent" v-if="slideIn">
        <ul
          class="navcontent-ul"
          :class="{ navOpen: isOpen, displayNone: displayClosed }"
        >
          <li class="navcontent-ul--home">
            <router-link
              to="/"
              class="navcontent-ul--home_home"
              id="dropdown-home"
            >
              <h1 class="navcontent-ul--home_home--title" @click="toggleNav()">
                Hjem
              </h1>
            </router-link>
          </li>

          <li class="navcontent-ul--about">
            <router-link
              to="/om"
              class="navcontent-ul--about_about"
              id="dropdown-about"
            >
              <h1
                class="navcontent-ul--about_about--title"
                @click="toggleNav()"
              >
                Om
              </h1>
            </router-link>
          </li>

          <li class="navcontent-ul--meny">
            <router-link
              to="/meny"
              class="navcontent-ul--meny_meny"
              id="dropdown-meny"
            >
              <h1 class="navcontent-ul--meny_meny--title" @click="toggleNav()">
                Vår Meny
              </h1>
            </router-link>
          </li>

          <li class="navcontent-ul--scene">
            <router-link
              to="/scene"
              class="navcontent-ul--scene_scene"
              id="dropdown-scene"
            >
              <h1
                class="navcontent-ul--scene_scene--title"
                @click="toggleNav()"
              >
                Vår Scene
              </h1>
            </router-link>
          </li>

          <li class="navcontent-ul--360">
            <router-link
              to="/360-tour"
              class="navcontent-ul--360_360"
              id="dropdown-projects"
            >
              <h1 class="navcontent-ul--360_360--title" @click="toggleNav()">
                360 tour
              </h1>
            </router-link>
          </li>

          <li class="navcontent-ul--contact">
            <router-link
              to="/kontakt"
              class="navcontent-ul--contact_contact"
              id="dropdown-projects"
            >
              <h1
                class="navcontent-ul--contact_contact--title"
                @click="toggleNav()"
              >
                Kontakt oss
              </h1>
            </router-link>
          </li>
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
      title: "Hai På Graaten".toUpperCase(),
      isOpen: false,
      displayClosed: true,
      slideIn: false,
      noScroll: false,
      transitionNav: "all .5s ease-out",
    };
  },
  methods: {
    toggleNav() {
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
