<template>
  <div id="app">
    <NavbarComp />
    <router-view />
    <BigFooterComp />
  </div>
</template>

<script>
import BigFooterComp from "./components/BigFooterComp.vue";
import NavbarComp from "./components/NavbarComp.vue";

export default {
  name: "App",
  components: {
    BigFooterComp,
    NavbarComp,
  },
};
</script>

<style lang="scss">
@import "SASS/main.scss";

::-webkit-scrollbar-track {
  background-color: #f5f5f5;
}
::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f5f5;
}
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #f29559;
}

::selection {
  background-color: #4269ac;
  color: #fff;
}
</style>
