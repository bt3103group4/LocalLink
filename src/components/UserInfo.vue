<template>
<body>  
    <div id ="profilepicture1">                     
        <img id ="profilepicture" class="preview" height="268" width="356" :src="profilepic">
       <br>
      </div>  
    <span class="username">@{{username}}</span>
    <div class="detailsbox">
        </div>

        <div class="details">
            <p style="font-weight:900;font-size:22px" class="about">About me</p> <hr>
            <span style="font-weight:700;font-size:15px">Name </span>
            <h4> {{firstname}} {{lastname}} </h4><br>
            <span style="font-weight:700;font-size:15px" >Languages</span>
            <h4 v-if="$lang != ''"> {{lang}} </h4>
            <h4 style="color:grey;font-style: italic;" v-else> Add your languages! </h4><br>
            <span style="font-weight:700;font-size:15px" >Biography</span>
            <h4 v-if="$bio != ''"> {{bio}} </h4>
            <h4 style="color:grey;font-style: italic;" v-else> Nothing here yet :(   Add your bio by clicking on the edit icon! </h4><br>
        </div>

        <button id="editprofilebtn" @click="$router.push('/EditUserProfile')"></button>
        </body>
</template>
<script>

import firebase from 'firebase';
import { db} from "../main.js";

export default{
    name : "UserProfile",
    data(){
      return{
        username: "",
        firstname: "",
        lastname: "",
        bio: "",
        lang:"",
        profilepic:""
      }
    },
    mounted(){
      const self = this;
      async function display(){
      const auth = firebase.auth();
      auth.onAuthStateChanged(user => {
      if (user){
        let fbuser = auth.currentUser.email;
        if (fbuser){
          db.collection("users").doc(String(fbuser))
          .get()
          .then(doc => {
          if (doc.exists){
          const data = doc.data()
          self.firstname = data["firstname"] 
          self.lastname = data["lastname"]
          self.username = data["username"]
          self.bio = data["bio"]
          self.lang = data["lang"]
          self.profilepic = data["profilepic"]
          }
          else{
            console.log("no such document")
          }
        })
      } 
    }
  })
}
    display();
    },
}
</script>

<style scoped>
#profilepicture{
  position:absolute;
  top: 110px;
  left:125px;
  height:380px;
  width: 380px;
  border-radius:1000px;
  object-fit: cover;
  border: white 10px solid;
}
hr{
  border: 3px black solid rgba(0, 0, 0.75);
}
button{
  cursor: pointer;
}
.details {
  width: 400px;
  height: 400px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 580px;
  left: 105px;
  font-weight: Regular;
  font-size: 12px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  opacity: 1;
  text-align: left;
  padding: 10px;
}
.detailsbox {
  width: 442px;
  height: 350px;
  background: rgba(255,251,251,1);
  opacity: 1;
  position: absolute;
  top: 574px;
  left: 87px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.username {
  width: 391px;
  color: rgba(95,94,94,1);
  position: absolute;
  top: 511px;
  left: 105px;
  font-family: Roboto;
  font-weight: Regular;
  font-size: 35px;
  opacity: 1;
  text-align: center;
}
#editprofilebtn {
    width: 30px;
    height: 30px;
    position : absolute;
    left: 440px;
    top : 565px;
    margin: 30px;
    background: url("~@/images/edit.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    border: none;
}
</style>