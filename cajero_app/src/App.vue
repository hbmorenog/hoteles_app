<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand tag="h1" class="mb-0">
          <img src="./assets/hotel.png" class="d-inline-block align-top" alt="hotel" />
          Hotelify
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-dropdown
              right
              size="lg"
              text="User"
              class="mb-0"
              variant="bg--transparent"
            >
              <!-- Using 'button-content' slot -->
              <b-dropdown-item href="#">Registrarse</b-dropdown-item>
              <b-dropdown-item href="#">Iniciar sesión</b-dropdown-item>
            </b-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div class="main_component">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Registro from "./components/Registro.vue";
export default {
  name: "App",
  components: {},
};
</script>

<style scoped>
img {
  width: 60px;
  height: 60px;
}
h1 {
  font-size: 40px;
}
.button {
  font-size: 30px;
}
</style>
