<template>
  <div class="home">
    <section class="landing">
      <h1 class="landing-title">Katta Teknologiske Festival</h1>
      <VueTyper
        class="landing-undertitle"
        :text="['Teknologi', 'Programmering', 'Virtual-Reality', '3D-Printing']"
        :repeat="Infinity"
        :shuffle="false"
        initial-action="typing"
        :pre-type-delay="70"
        :type-delay="70"
        :pre-erase-delay="2000"
        :erase-delay="50"
        erase-style="backspace"
        :erase-on-complete="false"
        caret-animation="blink"
      ></VueTyper>

      <div class="landing-buttons">
        <router-link to="/booking" class="landing-buttons_button1"
          >Booking</router-link
        >
        <router-link to="/paamelding" class="landing-buttons_button2"
          >Påmelding</router-link
        >

        <router-link to="/kontakt" class="landing-buttons_button3"
          >Kontakt</router-link
        >
      </div>

      <a
        @click="scrollTo('about')"
        aria-label="Scroll-arrow"
        class="landing-arrow"
      ></a>
    </section>

    <section class="about" ref="about">
      <h2 class="about-title" data-aos="fade-down" data-aos-duration="1250">
        Om Katta Teknologiske Festival
      </h2>

      <div class="about-textwrap">
        <p
          class="about-textwrap_1"
          data-aos="fade-down"
          data-aos-duration="1250"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
          eius, aperiam atque maiores quaerat earum officia debitis enim quo,
          obcaecati suscipit eos corporis labore soluta, ex optio illo error
          maxime porro ipsam nostrum! A, ipsum aliquid nulla amet cumque saepe
          veniam iure inventore possimus recusandae voluptatum itaque deserunt.
          Laborum ratione facilis dolor velit vero, enim repellendus illo ipsa
          eum fugit deleniti nesciunt laboriosam, error numquam ipsum
          praesentium, impedit possimus rerum quis distinctio qui animi non? Nam
          ab suscipit blanditiis accusantium at officia aperiam, consequuntur
          praesentium nesciunt, ipsam fugiat itaque, sunt minima placeat rerum
          atque tempore soluta nihil esse ducimus nisi.
        </p>
      </div>

      <div class="about-images">
        <img
          class="about-images_img1"
          alt="Vindu til Tante Gerda"
          src="../assets/ktt.jpg"
          data-aos="fade-down-left"
          data-aos-duration="1250"
          data-aos-delay="300"
        />
        <img
          class="about-images_img2"
          src="../assets/katta-skole.jpg"
          alt="Vindu til Tante Gerda"
          data-aos="fade-up-right"
          data-aos-duration="1250"
          data-aos-delay="350"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { VueTyper } from "vue-typer";

export default {
  name: "Home",

  components: {
    VueTyper,
  },

  data() {
    return {};
  },

  methods: {
    /* Funksjon som gjør at den scroller ned til dens ref ID */
    scrollTo(refName) {
      let element = this.$refs[refName];

      let top = element.offsetTop;

      window.scrollTo(0, top);
    },
  },
};
</script>

<style lang="scss">
@import "SASS/base/_Home.scss";
</style>
