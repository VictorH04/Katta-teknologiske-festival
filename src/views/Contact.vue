<template>
  <div class="contact">
    <section class="pageContact2">
      <h1
        class="pageContact2-title"
        data-aos="fade-down"
        data-aos-duration="1250"
      >
        {{ this.kontakt.Overskrift }}
      </h1>

      <div class="pageContact2-textwrap">
        <h3
          class="pageContact2-textwrap_1"
          data-aos="fade-right"
          data-aos-duration="1250"
          data-aos-delay="500"
        >
          {{ this.kontakt.Lokale[0].Tekst }}
        </h3>
        <h3
          class="pageContact2-textwrap_2"
          data-aos="fade-right"
          data-aos-duration="1250"
          data-aos-delay="750"
        >
          {{ this.kontakt.Lokale[1].Tekst }}
        </h3>
        <h3
          class="pageContact2-textwrap_3"
          data-aos="fade-right"
          data-aos-duration="1250"
          data-aos-delay="1000"
        >
          {{ this.kontakt.Lokale[2].Tekst }}
        </h3>
        <h3
          class="pageContact2-textwrap_4"
          data-aos="fade-right"
          data-aos-duration="1250"
          data-aos-delay="1250"
        >
          {{ this.kontakt.Lokale[3].Tekst }}
        </h3>
        <h3
          class="pageContact2-textwrap_5"
          data-aos="fade-right"
          data-aos-duration="1250"
          data-aos-delay="1500"
        >
          📞
          <a
            class="pageContact2-textwrap_5--tel"
            v-bind:href="`tel:${this.kontakt.Lokale[4].Tekst}`"
            data-aos="fade-right"
            data-aos-duration="1250"
            data-aos-delay="1500"
            >{{ this.kontakt.Lokale[4].Tekst }}</a
          >
        </h3>
        <h3
          class="pageContact2-textwrap_6"
          data-aos="fade-right"
          data-aos-duration="1250"
          data-aos-delay="1750"
        >
          Epost:
          <a
            v-bind:href="`mailto:${this.kontakt.Lokale[5].Tekst}`"
            class="pageContact2-textwrap_6--mail"
            >{{ this.kontakt.Lokale[5].Tekst }}
          </a>
        </h3>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1946.8826371765367!2d11.070839916131863!3d60.79323458219479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4641e139229fd8af%3A0xf8340a8d2123a99a!2sStrandgata%2035%2C%202317%20Hamar!5e0!3m2!1sno!2sno!4v1617016385438!5m2!1sno!2sno"
        class="pageContact2-map"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        data-aos="fade-left"
        data-aos-duration="1250"
        data-aos-delay="1750"
      ></iframe>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",

  data() {
    return {
      kontakt: null,
      backgroundImage: null,
      logo: null,

      routes: {
        om: "/meny",
      },
    };
  },

  metaInfo: {
    meta: [
      { charset: "utf-8" },
      {
        name: "description",
        content: "Kontakt informasjon til Tante Gerda.",
      },
      {
        name: "keywords",
        content:
          "tante-gerda,tante gerda,strandgata 35,arrangementer,mobil,epost",
      },

      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },

  mounted() {
    axios
      .get("http://142.93.136.108/kontakt-oss")
      .then((Response) => (this.kontakt = Response.data));
  },

  methods: {
    giveRoute: function() {
      this.$router.push({ path: this.routes.om });
    },
  },
};
</script>

<style lang="scss">
.landing {
  width: 100vw;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;

  background-image: url("../assets/background1.jpg");
}

@import "SASS/base/_Contact.scss";
</style>
