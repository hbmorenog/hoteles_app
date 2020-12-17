<template>
  <div id="app">
    <div class="header">
      <img src="./assets/hotel.png" class="d-inline-block align-top" alt="hotel" />
      <h1>Hotelify</h1>
      <b-dropdown right size="lg" text="User" class="mb-0" variant="bg--transparent">
        <!-- Using 'button-content' slot -->
        <b-dropdown-item v-on:click="profile" v-if="is_auth">Profile</b-dropdown-item>
        <b-dropdown-item v-on:click="partners" v-if="is_auth">Partners</b-dropdown-item>
        <b-dropdown-item v-on:click="registro">Registro</b-dropdown-item>
        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
      </b-dropdown>
    </div>

    <div class="main-component">
      <router-view />
    </div>

    <div class="footer">
      <h2>
        Conditions of Use - Privacy Notice - Interest-Based Ads - © 2020, Hotelify.com
      </h2>
    </div>
  </div>
</template>

<script>
import Registro from "./components/Registro";
export default {
  name: "App",
  components: {
    Registro,
  },

  data: function () {
    return {
      is_auth: localStorage.getItem("isAuth") || false,
    };
  },

  methods: {
    profile: function () {
      if (this.$route.email != "user") {
        let email = localStorage.getItem("current_email");
        let ubication = localStorage.getItem("current_ubication");
        let username = localStorage.getItem("current_username");
        let price = localStorage.getItem("current_price");

        this.$router.push({ name: "user", params: { email: email } });
      }
    },
<<<<<<< HEAD
    partners: function () {
      if (this.$route.name != "user_balance") {
        let username = localStorage.getItem("current_username");
        this.$router.push({ name: "user_balance", params: { username: username } });
      }
    },
    profile: function(){
        if(this.$route.email != "user_profile"){
          let email = localStorage.getItem("current_email")

          this.$router.push({name: "user_profile", params:{ email: email }})
        }
      },
    registro: function () {
      this.$router.push({ path: "/registro" });
    },
  },
   beforeCreate:function() {
      localStorage.setItem('current_email','decameron@gmail.com')

      this.$router.push({name: "user", params:{ email: 'decameron@gmail.com' }})
    }
};
=======

    methods: {
      profile: function(){
        if(this.$route.email != "user_profile"){
          let email = localStorage.getItem("current_email")

          this.$router.push({name: "user_profile", params:{ email: email }})
        }
      },

      // partners: function(){
      //   if(this.$route.email != "user"){
      //     let email = localStorage.getItem("current_email")
      //     let ubication = localStorage.getItem("current_ubication")
      //     let username = localStorage.getItem("current_username")
      //     let price = localStorage.getItem("current_price")

      //     this.$router.push({name: "user", params:{ email: email }})
      //   }
      // },
    },

    beforeCreate:function() {
      localStorage.setItem('current_email','decameron@gmail.com')

      this.$router.push({name: "user", params:{ email: 'decameron@gmail.com' }})
    }
  };
>>>>>>> 72cfcd447ab8c07aef6f95a7575291b47a8cc34c
</script>

<style scoped>
body {
  margin: 0 0 0 0;
}

.header {
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color: #4390b1;
  color: #e5e7e9;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h1 {
  margin: 2%;
  float: left;
  margin-bottom: 20px;
  margin-top: 20px;
  text-align: left;
  width: 100%;
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
  padding: 0;
  width: 100%;
  height: 7vh;
  min-height: 100px;
  background-color: #4390b1;
  color: #e5e7e9;
}

.footer h2 {
  float: center;
  margin-top: 20px;
  text-align: center;
  width: 100%;
  font-size: 14px;
}
</style>
