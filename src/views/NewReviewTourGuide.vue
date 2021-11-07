<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <NavBar/>
    <Logo/>
    <SettingsButton/>
  <span class="header">Leave a Review for your Tourist!</span>
  <Back/>
  <head>
    <link
      href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap"
      rel="stylesheet"
    />
    <link href="./css/main.css" rel="stylesheet" />
    <title>Document</title>
  </head>
  <body>
    <button class="backNav" @click="$router.push('/TourGuideProfile')"></button>
    <Reviews/>
  </body>
</template>

<script>
import SettingsButton from '@/components/SettingsButton.vue'
import NavBar from '@/components/NavBar.vue'
import Logo from '@/components/Logo.vue'
import Reviews from '@/components/Reviews.vue'
import Back from '@/components/Back.vue'

export default {
  name: "NewReviewTourGuide",
  components: { NavBar,SettingsButton, Logo, Reviews, Back},
};
</script>

<style scoped>
body{
  width:100%;
}

.name {
  color: #fff;
}
.header {
  width: 800px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 140px;
  left: 388px;

  font-family: Ubuntu;
  font-weight: Bold;
  font-size: 45px;
  opacity: 1;
  text-align: left;
}
</style>