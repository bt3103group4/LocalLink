<template>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap"
      rel="stylesheet"
    />
    <title>Explore</title>
  </head>
  <body>
    <NavBar />
    <Logo />
    <SettingsButton />
    <div class="page-container">
      <h1 class="main-header">Virtual Tours</h1>
      <h4 class="no-bold">
        Find unique and exciting virtual tours to give you the adrenaline rush
        sitting at home
      </h4>
  </body>
</template>

<script>
import SettingsButton from "@/components/SettingsButton.vue";
import NavBar from "@/components/NavBar.vue";
import Logo from "@/components/Logo.vue";

export default {
  name: "VirtualTour",
  data() {},
  components: { SettingsButton, NavBar, Logo },
  methods: {},
};
</script>

<style scoped>
body {
  width: 100%;
}

.main-header {
  margin-top: 40px;
}

.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.no-bold {
  font-weight: 300;
}

#video1 {
  position: absolute;
  top: 300px;
  left: 100px;
}

#video2 {
  position: absolute;
  top: 300px;
  left: 750px;
}

.customise {
  background: rgba(63, 163, 184, 1);
  color: rgba(255, 255, 255, 1);
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 18px;
}

a:hover {
  color: rgba(255, 255, 255, 1);
}

button:hover {
  background: rgba(63, 163, 184, 1);
}

a.nav-link.active {
  background: rgba(63, 163, 184, 1);
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 18px;
}

a.nav-link {
  color: rgba(63, 163, 184, 1);
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 18px;
}

.card-img-top {
  float: left;
  height: 250px;
  object-fit: cover;
}
</style>
