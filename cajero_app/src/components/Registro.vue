<template>
  <div id="User">
    <h2>
      Hola <span> {{ username }}, </span> ¡Bienvenido!
    </h2>
  </div>
</template>
<script>
export default {
  name: "User",
  data: function () {
    return {
      username: "none",
    };
  },
  created: function () {
    this.username = this.$route.params.username;
  },
};
</script>