<template>
<body>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <NavBar/>
    <Logo/>
    <SettingsButton/>
    <div class="main_message">Congrats! Booking successful! </div>
    <p> Please remember to book this in your calendar! <br> Your tour guide can't wait to see you :) </p>
    <button class="home" @click="home">Return to <br> Main Page</button>
</body>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Logo from '@/components/Logo.vue'
import SettingsButton from '@/components/SettingsButton.vue'

export default {
    name: "ConfirmationPage",
    components: {NavBar,Logo, SettingsButton},
}
</script>

<style scoped>
body{
  width:100%
}
.main_message {
  width: 800px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 200px;
  left: center;
  font-family: Ubuntu;
  font-weight: Bold;
  font-size: 45px;
  opacity: 1;
  text-align: center;
}

p {
  width: 902px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 250px;
  left: center;
  font-family: Ubuntu;
  font-weight: Bold;
  font-size: 25px;
  opacity: 1;
  text-align: center;
}

.home {
  width: 134px;
  height: 48px;
  background: rgba(63,163,184,1);
  opacity: 1;
  position: absolute;
  top: 380px;  
  left: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border:none;
  color: rgba(255,255,255,1);
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 18px;
  opacity: 1;
  text-align: center;
  cursor: pointer;
}
</style>