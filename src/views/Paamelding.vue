<template>
  <div class="Meld">
    <h1 class="Meld-title">Bli med på KTF!</h1>

    <b-form v-if="show" @submit="onSubmit" @reset="onReset" class="Meld-form">
      <b-form-group
        id="input-group-1"
        label="Ditt navn:"
        label-for="input-1"
        class="Meld-emailGroup"
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          placeholder="Navn"
          type="name"
          required
          class="Meld-inputs lg-input-fs"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Din Epost:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.email"
          placeholder="Epost"
          type="email"
          required
          class="Meld-inputs"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Din klasse:" label-for="input-3">
        <b-form-input
          id="input-2"
          v-model="form.class"
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
        <h3 class="Meld-info_title">Du er påmeldt, {{ this.form.name }}!</h3>
        <p class="Meld-info_item">Epost: {{ this.form.email }}</p>
        <p class="Meld-info_date">Klasse: {{ this.form.class }}</p>
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
      form: {
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
      // alert(JSON.stringify(this.form));
      localStorage.setItem("FinishedMeld", (this.finishedMeld = true));

      this.finishedMeld = localStorage.getItem("FinishedMeld");

      localStorage.setItem("formName", this.form.name);
      localStorage.setItem("formMail", this.form.email);
      localStorage.setItem("formClass", this.form.class);
    },

    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.class = "";
      this.finishedMeld = false;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
      localStorage.clear();
    },
  },
  mounted() {
    this.form.name = localStorage.getItem("formName");
    this.form.email = localStorage.getItem("formMail");
    this.form.class = localStorage.getItem("formClass");
    this.finishedMeld = localStorage.getItem("FinishedMeld");
  },
};
</script>

<style lang="scss" scoped>
@import "SASS/base/_Paamelding.scss";
</style>
