<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <NavBar/>
    <Logo/>
    <SettingsButton/>
  <span v-if="this.type === 'tour-guide'" class="header">Leave a Review for your Tourist!</span>
  <span v-else class="header">Leave a Review for your Tour Guide!</span>
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
    <Reviews/>
  </body>
</template>

<script>
import SettingsButton from '@/components/SettingsButton.vue'
import NavBar from '@/components/NavBar.vue'
import Logo from '@/components/Logo.vue'
import Reviews from '@/components/Reviews.vue'
import Back from '@/components/Back.vue'
import firebase from "firebase";
import { db } from "../main.js";

export default {
  name: "NewReview",
  components: { NavBar,SettingsButton, Logo, Reviews, Back},
  data() {
    return {
      type:"",
    }
  },

  mounted() {
    const auth = firebase.auth();
    auth.onAuthStateChanged(user => {
      if (user) {
        let fbuser = auth.currentUser.email;
        if (fbuser) {
          db.collection("users").doc(String(fbuser))
          .get()
          .then(doc => {
            if (doc.exists){
              const data = doc.data()
              this.type = data["type"]
              console.log(this.type)
            } else {
              console.log("no such document")
            }
          })
        }
      }
    })
  },

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
  left:25%;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Ubuntu;
  font-weight: Bold;
  font-size: 45px;
  opacity: 1;
  text-align: left;
}
</style>