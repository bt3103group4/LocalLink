<template>
  <html>
    <head>
      <link
        href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap"
        rel="stylesheet"
      />
      <link href="./main.css" rel="stylesheet" />
      <title>Document</title>
      <link href="./main.css" rel="stylesheet" />
      <title>Document</title>
    </head>
    <body>
      <NavBar/>
      <Logo/>
      <SettingsButton/>
      <div class="v233_56">
        <div class="v233_68"></div>
        <div class="v257_61"></div>
        <span class="v100_27">Nature</span>
      </div>
      <div class="v233_56">
        <div class="v233_68"></div>
        <div class="v257_61"></div>
        <span class="v100_27">Nature</span>
      </div>
      <div class="v233_56">
        <div class="v233_68"></div>
        <div class="v257_61"></div>
        <span class="v100_27">Nature</span>
      </div>
    </body>
</template>

<script>
import SettingsButton from '@/components/SettingsButton.vue'
import NavBar from '@/components/NavBar.vue'
import Logo from '@/components/Logo.vue'

export default {
  components:{SettingsButton,NavBar,Logo}
}
</script>


<style scoped>
* {
  box-sizing: border-box;
}
body {
  font-size: 14px;
}
.v233_56 {
  width: 100%;
  height: 917px;
  background: rgba(242, 238, 238, 1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}
.v233_68 {
  width: 27px;
  height: 28px;
  background: rgba(0, 0, 0, 1);
  opacity: 1;
  position: absolute;
  top: 72px;
  left: 613px;
}
.v257_61 {
  width: 203px;
  height: 50px;
  background: rgba(63, 163, 184, 1);
  opacity: 1;
  position: absolute;
  top: 143px;
  left: 301px;
  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
  border-bottom-left-radius: 45px;
  border-bottom-right-radius: 45px;
  overflow: hidden;
}
.v100_27 {
  width: 203px;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  top: 143px;
  left: 301px;
  font-family: Ubuntu;
  font-weight: Bold;
  font-size: 25px;
  opacity: 1;
  text-align: center;
}
</style>