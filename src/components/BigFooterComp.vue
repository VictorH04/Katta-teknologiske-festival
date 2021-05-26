<template>
  <div class="footer">
    <img
      src="../assets/Logo_Katt_Stor.png"
      alt="Katta Teknologiske Festival Logo liten"
      class="footer-logo"
    />

    <a href="tel:62 54 42 00" class="footer-text1">📞 62 54 42 0 </a>

    <a href="mailto:hamar.katedralskole@hedmark.org" class="footer-text2"
      >Epost <br />
      hamar.katedralskole@hedmark.org</a
    >

    <h4 class="footer-developer">
      Utviklet av:
      <a
        class="footer-developer_link"
        href="https://victor-hristov-8c2eg.ondigitalocean.app/"
        >Victor N. Hristov</a
      >
    </h4>
  </div>
</template>

<script>
export default {
  name: "BigFooterComp",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "SASS/base/_bigFooter.scss";
</style>
