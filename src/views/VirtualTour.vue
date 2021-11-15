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
      <div class="cards">
        <div class="tour-card text-center">
          <div class="card-textarea">
            <h2 class="card-title">Adventure Tours</h2>
            <p class="card-text">
              <i>
                Find unique and exciting virtual tours to give you the
                adrenaline rush sitting at home
              </i>
            </p>
          </div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?controls=0&amp;list=PLO-Qy09mMggg6cZKhDKW6xT6EtP6QJiN3"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div class="tour-card text-center">
          <div class="card-textarea">
            <h2 class="card-title">Nature Tours</h2>
            <p class="card-text">
              <i>
                Find unique and exciting virtual tours to give you the peace and
                tranquility of Nature right at home.
              </i>
            </p>
          </div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?controls=0&amp;list=PLO-Qy09mMgggklnlZxIWsUQglqYGpQ_0t"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div class="tour-card text-center">
          <div class="card-textarea">
            <h2 class="card-title">Beach Tours</h2>
            <p class="card-text">
              <i>
                Find your next beach vacation here! Or take a beach vacation
                from the comfort of your homes
              </i>
            </p>
          </div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?controls=0&amp;list=PLO-Qy09mMggiaz9VZ6FNtDNBmcVqtBSF0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
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

.cards {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 35px 65px;
}

.tour-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 0 0 50px;
}

.card-textarea {
  padding-right: 80px;
}

.cards > :nth-child(2) {
  flex-direction: row-reverse;
}

.cards > :nth-child(2) > .card-textarea {
  padding-right: 0px;
  padding-left: 80px;
}

.card:hover {
  cursor: pointer;
}
.container {
  position: absolute;
  top: 50px;
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
