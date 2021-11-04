<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <NavBar/>
    <Logo/>
    <SettingsButton/>
    <Back/>
  <span class="header">Leave a Review for your Tour Guide!</span>
  <Reviews/>
  <head>
    <link
      href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap"
      rel="stylesheet"
    />
    <link href="./css/main.css" rel="stylesheet" />
    <title>Document</title>
  </head>
</template>

<script>
import SettingsButton from '@/components/SettingsButton.vue'
import NavBar from '@/components/NavBar.vue'
import Logo from '@/components/Logo.vue'
import Reviews from '@/components/Reviews.vue'
import Back from '@/components/Back.vue'

export default {
  name: "NewReviewTourist",
  components: { NavBar,SettingsButton, Logo, Reviews,Back},
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  size:100%;
}
body {
  font-size: 14px;
  width:100%
}

.name {
  color: #fff;
}
.header {
  width: 800px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 120px;
  left: 388px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Ubuntu;
  font-weight: Bold;
  font-size: 45px;
  opacity: 1;
  text-align: left;
}
</style>