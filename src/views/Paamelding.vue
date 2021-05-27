<template>
  <div class="Meld">
    <h1 class="Meld-title" data-aos="fade-down" data-aos-duration="1250">
      Bli med på KTF!
    </h1>

    <b-form
      data-aos="fade-down"
      data-aos-duration="1250"
      data-aos-delay="500"
      v-if="show"
      @submit="onSubmit"
      @reset="onReset"
      class="Meld-form"
    >
      <b-form-group
        id="input-group-1"
        label="Ditt navn:"
        label-for="input-1"
        class="Meld-emailGroup"
      >
        <b-form-input
          id="input-1"
          v-model="form2.name"
          placeholder="Navn"
          type="name"
          required
          class="Meld-inputs lg-input-fs"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Din Epost:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form2.email"
          placeholder="Epost"
          type="email"
          required
          class="Meld-inputs"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Din klasse:" label-for="input-3">
        <b-form-input
          id="input-2"
          v-model="form2.class"
          placeholder="Klasse"
          type="text"
          required
          class="Meld-inputs"
        ></b-form-input>
      </b-form-group>

      <b-button
        @click="scrollTo('finishedMeld')"
        type="submit"
        class="Meld-submitBtn"
        variant="primary"
        >Send inn</b-button
      >
      <b-button type="reset" class="Meld-deleteBtn" variant="danger"
        >Slett</b-button
      >
    </b-form>

    <transition name="slide-fade">
      <div class="Meld-info" v-if="finishedMeld" ref="finishedMeld">
        <h3 class="Meld-info_title">Du er påmeldt, {{ this.form2.name }}!</h3>
        <p class="Meld-info_item">Epost: {{ this.form2.email }}</p>
        <p class="Meld-info_date">Klasse: {{ this.form2.class }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
import "../assets/custom-vars.scss";

export default {
  name: "Meld",

  data() {
    return {
      form2: {
        email: "",
        name: "",
        class: "",
      },
      show: true,
      finishedMeld: false,
    };
  },

  methods: {
    onSubmit(event) {
      event.preventDefault();
      // alert(JSON.stringify(this.form2));
      localStorage.setItem("FinishedMeld", (this.finishedMeld = true));

      this.finishedMeld = localStorage.getItem("FinishedMeld");

      localStorage.setItem("form2Name", this.form2.name);
      localStorage.setItem("form2Mail", this.form2.email);
      localStorage.setItem("form2Class", this.form2.class);
    },

    onReset(event) {
      event.preventDefault();
      // Reset our form2 values
      this.form2.email = "";
      this.form2.name = "";
      this.form2.class = "";
      this.finishedMeld = false;
      // Trick to reset/clear native browser form2 validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });

      localStorage.removeItem("form2Name");
      localStorage.removeItem("form2Mail");
      localStorage.removeItem("form2Class");
      localStorage.removeItem("FinishedMeld");
    },
  },
  mounted() {
    this.form2.name = localStorage.getItem("form2Name");
    this.form2.email = localStorage.getItem("form2Mail");
    this.form2.class = localStorage.getItem("form2Class");
    this.finishedMeld = localStorage.getItem("FinishedMeld");
  },
};
</script>

<style lang="scss" scoped>
@import "SASS/base/_Paamelding.scss";
</style>
