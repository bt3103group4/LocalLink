<template>
    <NavBar/>
    <Logo/>
    <SettingsButton/>
  <span class="header">Leave a Review for your Tourist!</span>
  <Reviews/>
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
  </body>
</template>

<script>
import SettingsButton from '@/components/SettingsButton.vue'
import NavBar from '@/components/NavBar.vue'
import Logo from '@/components/Logo.vue'
import Reviews from '@/components/Reviews.vue'

export default {
  name: "NewReviewTourGuide",
  components: { NavBar,SettingsButton, Logo, Reviews},
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
body {
  font-size: 14px;
  width:100%;
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
.backNav{
    position: absolute;
    top: 150px;
    left:30px;
    background: url("~@/images/backicon.png");
    width: 45px;
    height:45px;
    background-size: 100% 100%;
    border:none;
}
</style>