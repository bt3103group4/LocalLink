<template>
  <Layout />
  <Logo />
  <head>
    <link
      href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap"
      rel="stylesheet"
    />
    <link href="./css/main.css" rel="stylesheet" />
    <title>Document</title>
  </head>
  <body>
    <div class="v97_34">
      <div class="name"></div>
      <span class="v97_485">Personal Information</span>

      <span class="username">User Name</span>
      <input type="text" class="username-input" placeholder="User Name">
         
      <span class="full-name">Full Name</span>
      <input type="text" class="full-name-input" placeholder="Full Name">

      <span class="email">Email</span>
      <input type="text" class="email-input" placeholder="Email">

       <span class="phone">Phone Number</span>
      <input type="text" class="phone-input" placeholder="Phone Number">


      <span class="experience">How many years of tour experience do you have?</span>
      <input type="text" class="experience-input" placeholder="Input in years and months">
      <button class="save-button" @click="saveEdits()">Save</button>
      <br/>
      <button @click="$router.push('/myTourListings')">View My Tour Listings</button>
    </div>

  </body>
</template>

<script>
import Layout from "@/components/Layout.vue";
import Logo from "@/components/Logo.vue";

export default {
  name: "EditTouristProfile",
  components: { Layout, Logo },
  methods: {
    saveEdits() {
      //TODO: save new edits to firebase
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  font-size: 14px;
}
.v97_34 {
  width: 100%;
  height: 2096px;
  background: rgba(255, 251, 251, 1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
}
.name {
  color: #fff;
}
.v97_485 {
  width: 724px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 70px;
  left: 388px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Ubuntu;
  font-weight: Bold;
  font-size: 50px;
  opacity: 1;
  text-align: left;
}
.name {
  color: #fff;
}
.v264_76 {
  width: 661px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 655px;
  left: 317px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Ubuntu;
  font-weight: Bold;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}
.v264_80 {
  width: 902px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 817px;
  left: 317px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Ubuntu;
  font-weight: Bold;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}
.username {
  width: 902px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 200px;
  left: 317px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Ubuntu;
  font-weight: Bold;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}

.full-name {
  width: 902px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 350px;
  left: 317px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Ubuntu;
  font-weight: Bold;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}

.email {
  width: 902px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 500px;
  left: 317px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Ubuntu;
  font-weight: Bold;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}

.phone {
  width: 902px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 650px;
  left: 317px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Ubuntu;
  font-weight: Bold;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}

.experience {
  width: 902px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 800px;
  left: 317px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Ubuntu;
  font-weight: Bold;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}

.username-input {
  width: 920px;
  height: 58px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 250px;
  left: 317px;
  border: 1px solid rgba(0, 0, 0, 0.33000001311302185);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.full-name-input {
  width: 920px;
  height: 58px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 400px;
  left: 317px;
  border: 1px solid rgba(0, 0, 0, 0.33000001311302185);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.email-input {
  width: 920px;
  height: 58px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 550px;
  left: 317px;
  border: 1px solid rgba(0, 0, 0, 0.33000001311302185);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.phone-input {
  width: 920px;
  height: 58px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 700px;
  left: 317px;
  border: 1px solid rgba(0, 0, 0, 0.33000001311302185);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.experience-input {
  width: 920px;
  height: 58px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 850px;
  left: 317px;
  border: 1px solid rgba(0, 0, 0, 0.33000001311302185);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.save-button {
  top: 900px;
  left: 317px;
}

</style>