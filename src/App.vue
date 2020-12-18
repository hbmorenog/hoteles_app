<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#"
        ><img
          src="./assets/hotel.png"
          class="d-inline-block align-top"
          alt="hotel"
      /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="items">
          <b-nav-item href="#"
            ><router-link to="/">Home</router-link></b-nav-item
          >
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="User" right>
            <!-- Using 'button-content' slot -->
            <b-dropdown-item v-on:click="profile" v-if="is_auth"
              >Profile</b-dropdown-item
            >
            <b-dropdown-item v-on:click="partners" v-if="is_auth"
              >Partners</b-dropdown-item
            >
            <b-dropdown-item v-on:click="registro">Registro</b-dropdown-item>
            <b-dropdown-item v-if="is_auth" href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-carousel
      id="carousel-1"
      :interval="1800"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/250/?image=52"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/250/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide
        img-src="https://picsum.photos/1024/250/?image=58"
      ></b-carousel-slide>

    </b-carousel>

    <div class="main-component">
      
      <Home v-if="this.$route.path==='/'"/>
      <router-view />
    </div>

    <div class="footer">
      <h2>
        Conditions of Use - Privacy Notice - Interest-Based Ads - © 2020,
        Hotelify.com
      </h2>
    </div>
  </div>
</template>

<script>
import Home from "./components/Home";
export default {
  name: "App",
  components: {
    Home,
  },

  data: function () {
    return {
      is_auth: localStorage.getItem("isAuth") || false,
    };
  },

  methods: {
    profile: function () {
      if (this.$route.email != "user_profile") {
        let email = localStorage.getItem("current_email");

        this.$router.push({ name: "user_profile", params: { email: email } });
      }
    },

    partners: function () {
      if (this.$route.name != "user_balance") {
        let username = localStorage.getItem("current_username");
        this.$router.push({
          name: "user_balance",
          params: { username: username },
        });
      }
    },

    registro: function () {
      this.$router.push({ path: "/registro" });
    },
  },

  beforeCreate: function () {
    localStorage.setItem("current_email", "decameron@gmail.com");

    this.$router.push({
      name: "user",
      params: { email: "decameron@gmail.com" },
    });
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
#app {
  font-family: "Montserrat", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0 0 0 0;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.items a {
  font-size: 15px;
  color: white;
}
.btn {
  font-size: 15px;
  color: white !important;
}

img {
  width: 60px;
  height: 60px;
}

.main-component {
  height: 75vh;
  margin: 0%;
  padding: 0%;
  background: #fdfefe;
}

.footer {
  margin: 0;
  padding: 50px;
  width: 100%;
  background-color: #4390b1;
  color: #e5e7e9;

}

.footer h2 {
  text-align: center;
  width: 100%;
  font-size: 14px;
}
</style>
