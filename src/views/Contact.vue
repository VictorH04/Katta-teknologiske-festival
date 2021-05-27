<template>
  <div class="contact">
    <h1 class="contact-title" data-aos="fade-down" data-aos-duration="1250">
      Kontakt oss
    </h1>

    <div class="contact-wrap" data-aos="fade-down" data-aos-duration="1250">
      <p class="contact-wrap_text">
        Ring oss eller send oss en Epost dersom du lurer på noe.
      </p>

      <a href="tel:62 54 42 00" class="contact-wrap_text1">📞 62 54 42 0 </a>

      <a
        href="mailto:hamar.katedralskole@hedmark.org"
        class="contact-wrap_text2"
        >Epost <br />
        hamar.katedralskole@hedmark.org</a
      >
    </div>

    <iframe
      data-aos="fade-down"
      data-aos-duration="1250"
      class="contact-map"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7784.3358775966835!2d11.051164787280277!3d60.806373543351604!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x21fd22fc8f467603!2sHamar%20Katedralskole!5e0!3m2!1sno!2sno!4v1622122855698!5m2!1sno!2sno"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "Contact",

  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "SASS/base/_Contact.scss";
</style>
