<template>
  <div class="booking">
    <h1 class="booking-title" data-aos="fade-down" data-aos-duration="800">
      Book utstyr på KTF!
    </h1>

    <b-form
      data-aos="fade-down"
      data-aos-duration="800"
      data-aos-delay="500"
      v-if="show"
      @submit="onSubmit"
      @reset="onReset"
      class="booking-form"
    >
      <b-form-group
        id="input-group-1"
        label="Ditt navn:"
        label-for="input-1"
        class="booking-emailGroup"
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          placeholder="Navn"
          type="name"
          required
          class="booking-inputs lg-input-fs"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Din Epost:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.email"
          placeholder="Epost"
          type="email"
          required
          class="booking-inputs"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Din klasse:" label-for="input-3">
        <b-form-input
          id="input-2"
          v-model="form.class"
          placeholder="Klasse"
          type="text"
          required
          class="booking-inputs"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-4"
        label="Velg en dato:"
        label-for="input-4"
      >
        <b-form-datepicker
          id="example-datepicker"
          v-model="form.date"
          class="booking-inputs"
        ></b-form-datepicker>
      </b-form-group>

      <b-form-group id="input-group-5" label="Utstyr:" label-for="input-5">
        <b-form-select
          id="input-3"
          v-model="form.utstyr"
          :options="utstyr"
          required
          class="booking-inputs"
        ></b-form-select>
      </b-form-group>

      <b-button
        @click="scrollTo('finishedBooking')"
        type="submit"
        class="booking-submitBtn"
        variant="primary"
        >Send inn</b-button
      >
      <b-button type="reset" class="booking-deleteBtn" variant="danger"
        >Slett</b-button
      >
    </b-form>

    <transition name="slide-fade">
      <div class="booking-info" v-if="finishedBooking" ref="finishedBooking">
        <h3 class="booking-info_title">{{ this.form.name }}, du har booket:</h3>
        <p class="booking-info_item">Utstyr: {{ this.form.utstyr }}</p>
        <p class="booking-info_date">Til datoen: {{ this.form.date }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
import "../assets/custom-vars.scss";

export default {
  name: "Booking",

  data() {
    return {
      form: {
        email: "",
        name: "",
        class: "",
        utstyr: null,
        checked: [],
        date: "",
      },
      utstyr: [
        { text: "Velg utstyr", value: null },
        "PC",
        "VR-utstyr",
        "3D-printer",
        "360-kamera",
        "VR-rom",
      ],
      type: ["email"],
      show: true,
      finishedBooking: false,
    };
  },

  methods: {
    /** Denne funksjonen gjør at form-dataen sender data fra data-objektet ovenfor som får sin data fra form-inputene
     og lagrer denne dataen i localStorage  
     */
    onSubmit(event) {
      event.preventDefault();
      // alert(JSON.stringify(this.form));
      localStorage.setItem("FinishedBooking", (this.finishedBooking = true));

      this.finishedBooking = localStorage.getItem("FinishedBooking");

      localStorage.setItem("formName", this.form.name);
      localStorage.setItem("formMail", this.form.email);
      localStorage.setItem("formClass", this.form.class);
      localStorage.setItem("Utstyr", this.form.utstyr);
      localStorage.setItem("formDate", this.form.date);
    },

    /** Denne funksjonen klargjør alle input-fields og fjerner dataen som ble sendt til localStorage.
     */
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.class = "";
      this.form.utstyr = null;
      this.form.checked = [];
      this.form.date = "";
      this.finishedBooking = false;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });

      localStorage.removeItem("formName");
      localStorage.removeItem("formMail");
      localStorage.removeItem("formClass");
      localStorage.removeItem("Utstyr");
      localStorage.removeItem("formDate");
      localStorage.removeItem("FinishedBooking");
    },
  },
  /** Denne funksjonen binder localStorage-dataen fra inputene tilbake til data-objektet. Det er egentlig samme data men fra localStorage,
   *  denne funksjonen tilhører det kortet som kommer under formen når du har skrevet ferdig formen.
   */
  mounted() {
    this.form.name = localStorage.getItem("formName");
    this.form.email = localStorage.getItem("formMail");
    this.form.class = localStorage.getItem("formClass");
    this.form.utstyr = localStorage.getItem("Utstyr");
    this.form.date = localStorage.getItem("formDate");
    this.finishedBooking = localStorage.getItem("FinishedBooking");
  },
};
</script>

<style lang="scss" scoped>
@import "SASS/base/_Booking.scss";
</style>
