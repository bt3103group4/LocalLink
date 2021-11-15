<template>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
<body>
    <NavBar/>
    <Logo/>
    <img class="background-image" src="../images/pool.jpg">
    <div id="wrapper">
      <div class="main_message">Your booking has been confirmed! </div>
      <p> Please remember to book this in your calendar! <br> Your tour guide can't wait to see you :) </p>
      <button class="home" @click="this.$router.push('/ListingsNature')">Return to <br> Main Page</button>
    </div>
    <img class="success" src="../images/tick.png">
</body>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Logo from '@/components/Logo.vue'

export default {
    name: "ConfirmationPage",
    components: {NavBar,Logo},
}
</script>


<style scoped>
body{
  width:100%;
}
.background-image{
  position:relative;
  top:75px;
  width:100%;
  height:100%;
  opacity:0.5;
}
.success{
  width:150px;
  position:absolute;
  top:225px;
  left: 650px;
  z-index:10;
}
#wrapper{
  background-color: white;
  width: 700px;
  height: 500px;
  position: absolute;
  top: 200px;
  left: 380px;
  border-radius: 20px;
}
.main_message {
  width: 100%;
  color: rgba(0, 0, 0, 1);
  position: relative;
  top: 200px;
  font-family: Ubuntu;
  font-weight: Bold;
  font-size: 45px;
  opacity: 1;
  text-align: center;
}

p {
  width: 100%;
  color: rgba(0, 0, 0, 1);
  position: relative;
  top: 225px;
  font-family: Ubuntu;
  font-weight: Bold;
  font-size: 25px;
  opacity: 1;
  text-align: center;
}

.home_btn {
  text-align: center;
}

.home {
  width: 200px;
  height: 48px;
  margin:auto;
  background: rgba(63,163,184,1);
  opacity: 1;
  position: relative;
  top: 250px;
  left: 240px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border:none;
  color: rgba(255,255,255,1);
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 18px;
  opacity: 1;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
}
</style>