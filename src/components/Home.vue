<template>
  <div class="home" id="Home">
    <b-container class="mt-5">
      <b-row justify-content-md-center class="d-flex justify-content-center">
        <b-col v-for="(hotel, i) in hoteles" :key="i">
          <b-card
            thumbnail
            fluid
            :title="hotel.name"
            :img-src="hotel.image"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 30rem"
            class="mb-2"
          >
            <b-card-text>
              Ubicación: {{ hotel.ubication }}<br />
              Precio: {{ hotel.price }}<br />
              Correo: {{ hotel.email }}
            </b-card-text>

            <b-button href="#" variant="primary">Ver mas</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";

export default {
  name: "home",
  data() {
    return {
      hoteles: [],
    };
  },
  mounted() {
    axios
      .get("https://https://g3m3-e9-hoteles-api.herokuapp.com//hoteles/resumen")
      .then((response) => (this.hoteles = response.data));
  },
};
</script>
