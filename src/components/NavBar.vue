<template>
  <body>
    <div class="topnav">
      <div class="navcontents">
        <router-link to="/Explore">Explore</router-link>
        <router-link to="/virtualTour">Virtual Tours</router-link>
        <router-link v-if="this.type === 'tour-guide'" to="/TourGuideProfile" >Account</router-link>
        <router-link v-else to="/TouristProfile" >Account</router-link>
        </div>
      <div class= "dropdown">
        <button class="settingsBtn"></button>
          <div class="dropdown-content">
              <a href="#">Help</a> <br>
              <button class="logout" @click="Logout">Logout</button>
          </div>
      </div>
    </div>
    <div class="settingsIcon"></div>
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
  data(){
    return{
      type: "",
      email:""
    }
  },
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
        .then(() => this.$router.push("/"))
        .catch((err) => alert(err.message));
    };

    return {
      name,
      Logout,
    };
  },
    mounted() {
    const auth = firebase.auth();
    var self=this
    auth.onAuthStateChanged(user => {
      if (user) {
        let fbuser = auth.currentUser.email;
        self.email=fbuser
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
  methods:{
    Chat(){ //push current user's username to rooms list
    const self=this
      this.$router.push({
        name: 'Chat',
        params: {
          email: self.email
        }
      })
    }
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
  padding-left:70%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.navcontents {
  display: flex;
  padding-right: 50px;
  align-items: center;
  width: 800px;
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
  /* height: 75px; */
  /* top: 0px; */
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

.logout{
  border:None;
  text-align: right;
  padding: 0px;
  font-family: Ubuntu;
  font-size: 16px;
}
.logout:hover{
  cursor: pointer;
}
.settingsBtn{
    border:none;
    width: 20px;
    height: 20px;
    position: relative;
    background: none;
    margin:0px;
    cursor: pointer;
    right:0;
    z-index:10;
    top:4px;
    background: url("~@/images/v225_116.png");
    background-size: 90%;
    background-repeat: no-repeat;
    background-position: center center;
    align-content: right;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 175px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding:10px;
  z-index: 10;
  font-family: Ubuntu;
  right:0;
  top:50px;
  text-align: right;
}
.dropdown {
  position: absolute;
  top:20px;
  left: 95%;
  display: inline-block;
  height:60px;
  
}
.dropdown-content a {
  color: black;
  text-decoration: none;
  display: block;
  padding-right: 0px;
  right: 60px;
}
.dropdown-content a:hover {
  background-color: #ddd;
}
.dropdown:hover .dropdown-content {
  display: block;
}
</style>
