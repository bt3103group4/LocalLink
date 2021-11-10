<template>
  <body>
    <div class="topnav">
      <div class="navcontents">
        <a href="#home">About</a>
        <a class="active" href="#home">Chat</a>
        <router-link v-if="this.type === 'tour-guide'" to="/TourGuideProfile" >Account</router-link>
        <router-link v-else to="/TouristProfile" >Account</router-link>
        </div>
    </div>
    <SearchBar />
  </body>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import firebase from "firebase";
import SearchBar from "./SearchBar.vue";
import { db } from "../main.js";

export default {
  components: { SearchBar },
  setup() {
    let name = ref("");

    onBeforeMount(() => {
      const user = firebase.auth().currentUser;
      if (user) {
        name.value = user.email.split("@")[0];
      }
    });

    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => console.log("Sign Out"))
        .catch((err) => alert(err.message));
    };

    return {
      name,
      Logout,
    };
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
  }
};
</script>

<style scoped>

.topnav {
  background-color: rgba(63, 163, 184, 1);
  width: 100%;
  position: relative;
  top: 0px;
  height: 75px;
  padding-left: 80%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.navcontents{
  position: relative;
  right:5%;
  top: 35%;
}
a {
  padding: 20px;
  font-family: Ubuntu;
  color: white;
  text-decoration: none;
  font-size: 18px;
}
a:hover {
  cursor: pointer;
  background-color: grey;
  height: 75px;
  top: 0px;
  color: white;
  font-style: normal;
}
.searchbox {
  width: 416px;
  height: 50px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 10px;
  left: 156px;
  overflow: hidden;
  padding-left: 50px;
  border-radius: 15px;
  font-style: italic;
}
.searchicon {
  width: 27px;
  height: 27px;
  background: url("~@/images/v216_71.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 0.5;
  position: absolute;
  top: 22px;
  left: 170px;
  overflow: hidden;
}
</style>
