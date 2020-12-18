<template>
<b-container>
  <b-form class="myform mt-5">
    <b-form-group id="input-group-1" label-for="input-1">
      <b-form-input
        id="email"
        v-model="form.email"
        type="email"
        placeholder="Correo electronico"
        required
      ></b-form-input>
    </b-form-group>
    <b-form-group id="input-group-2" label-for="input-2">
      <b-form-input
        id="password"
        v-model="form.password"
        type="password"
        placeholder="Contraseña"
        required
      ></b-form-input>
    </b-form-group>
    <b-form-group id="input-group-3" label-for="input-3">
      <b-form-input
        id="name"
        v-model="form.name"
        type="text"
        placeholder="Nombre del hotel"
        required
      ></b-form-input>
    </b-form-group>
    <b-form-group id="input-group-4" label-for="input-4">
      <b-form-input
        id="ubication"
        v-model="form.ubication"
        type="text"
        placeholder="Ubicación del hotel"
        required
      ></b-form-input>
    </b-form-group>
    <b-form-group id="input-group-4" label-for="input-4">
      <b-form-input
        id="price"
        type="tel"
        v-model="form.price"
        placeholder="Precio estándar habitación"
        required
      ></b-form-input>
    </b-form-group>
    <b-button v-on:click="submit" type="submit" variant="primary">Submit</b-button>
  </b-form>
</b-container>

</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        price: "",
        ubication: "",
        password: "",
      },
      show: true,
    };
  },
  methods: {
    contrasena: function () {
      var contrasena_1 = document.getElementById("contra1").value;
      var contrasena_2 = document.getElementById("contra2").value;
      if (contrasena_1 == contrasena_2) {
        return true;
      } else {
        return false;
      }
    },
    submit: function () {
      axios
        .post("https://https://g3m3-e9-hoteles-api.herokuapp.com//hotel/agregar", JSON.stringify(this.form))
        .then((result) => {
          alert("Se ingreso");
        })
        .catch((error) => {
          alert("ERROR Servidor", error.response.data);
        });
    },
  },
};
</script>

<style scoped>
.myform {
  min-width: 500px;
  text-align: center;
  font-size: 2.5rem;
}
</style>
