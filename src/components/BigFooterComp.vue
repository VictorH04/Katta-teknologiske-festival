<template>
  <div class="footer-container">
    <img
      v-bind:src="
        `http://142.93.136.108${this.footer.Footer_venstre.Logo.Bilde.url}`
      "
      class="footer-container_logo"
      v-bind:alt="`${this.footer.Footer_venstre.Logo.kort_om_bilde}`"
    />

    <div class="footer-container_SoMe">
      <a
        v-bind:href="
          `${this.footer.Footer_venstre.Sosiale_medier_venstre.Sosiale_medie_link}`
        "
        class="footer-container_SoMe-facebook"
        target="_blank"
        ><img
          v-bind:src="
            `http://142.93.136.108${this.footer.Footer_venstre.Sosiale_medier_venstre.Sosiale_medie_logo.url}`
          "
          alt="Link til facebook til Tante Gerda"
          title="Følg Tante Gerda på Facebook!"
          class="footer-container_SoMe-facebook--logo"
      /></a>

      <a
        v-bind:href="
          `${this.footer.Footer_venstre.Sosiale_medier_hoyre.Sosiale_medie_link}`
        "
        class="footer-container_SoMe-Instagram"
        target="_blank"
        ><img
          v-bind:src="
            `http://142.93.136.108${this.footer.Footer_venstre.Sosiale_medier_hoyre.Sosiale_medie_logo.url}`
          "
          alt="Link til instagram til Tante Gerda"
          class="footer-container_SoMe-Instagram--logo"
          title="Følg Tante Gerda på Instagram!"
      /></a>
    </div>

    <h1 class="footer-container_contactTitle">
      {{ this.footer.Footer_midten.Overskrift }}
    </h1>

    <div class="footer-container_contact">
      <a
        v-bind:href="`mailto:${this.footer.Footer_midten.Undertekst[0].Tekst}`"
        class="footer-container_contact--mail"
        >{{ this.footer.Footer_midten.Undertekst[0].Tekst }}
      </a>

      <a
        v-bind:href="`tel:${this.footer.Footer_midten.Undertekst[2].Tekst}`"
        class="footer-container_contact--phone"
      >
        {{ this.footer.Footer_midten.Undertekst[2].Tekst }}
      </a>

      <a
        href="https://www.google.com/maps/place/Strandgata+35,+2317+Hamar/data=!4m2!3m1!1s0x4641e139229fd8af:0xf8340a8d2123a99a?sa=X&ved=2ahUKEwiCk8yLqdXvAhWMlosKHaNvCGQQ8gEwAHoECAYQAQ
"
        class="footer-container_contact--address"
      >
        {{ this.footer.Footer_midten.Undertekst[1].Tekst }}
      </a>
    </div>

    <h1 class="footer-container_devTitle">{{ this.footer.Footer_hoyre.Overskrift }}</h1>

    <div class="footer-container_devGroup">
      <router-link to="/levert-av/empiler">
        <a class="footer-container_devGroup--empiler">Empiler</a>
      </router-link>

      <router-link to="/levert-av/frozensoft">
        <a class="footer-container_devGroup--frozenSoft">FrozenSoft Games</a>
      </router-link>
      <router-link
        to="/personvern"
        class="footer-container_devGroup--personvern"
      >
        <a>{{ this.footer.Footer_hoyre.Terms }}</a>
      </router-link>
    </div>

    <!--  <a href="https://twitter.com/Medietilsynet?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" class="footer-container_instagram" target="_blank"><img src="../assets/instagram-logo.png" class="instagram" alt="Instagram link til Hai sin instagram-konto."></a>
    <a href="tel: "> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BigFooterComp",
  data() {
    return {
      footer: null,

      routes: {
        empiler: "/levert-av/empiler",
        frozenSoft: "/levert-av/frozensoft",
        personvern: "/personvern",
      },
    };
  },

  methods: {
    routeEmpiler: function() {
      this.$router.push({ path: this.routes.empiler });
    },

    routeFrozensoft: function() {
      this.$router.push({ path: this.routes.frozenSoft });
    },

    routeTos: function() {
      this.$router.push({ path: this.routes.personvern });
    },
  },

  mounted() {
    axios
      .get("http://142.93.136.108/footer")
      .then((Response) => (this.footer = Response.data));
  },
};
</script>

<style lang="scss">
@import "SASS/base/_bigFooter.scss";
</style>
