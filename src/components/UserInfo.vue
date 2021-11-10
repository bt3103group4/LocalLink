<template>
<body>  
  <div class="listingComp">
    <div id ="profilepicture1">                     
        <img id ="profilepicture" v-if="profilepic != ''" class="preview" height="268" width="356" :src="profilepic">
        <img id ="profilepicture" v-else src='~@/images/unknown.jpeg'>
       <br>
      </div>  
    <span class="username">@{{username}}</span>
    <div class="detailsbox">
        </div>

        <div class="details">
            <p style="font-weight:900;font-size:22px" class="about">About me</p> <hr>
            <span style="font-weight:700;font-size:15px">Name </span>
            <p> {{firstname}} {{lastname}} </p>
            <span style="font-weight:700;font-size:15px" >Languages</span>
            <p v-if="lang != ''"> {{lang}} </p>
            <p style="color:grey;font-style: italic;font-size:15px" v-else> Nothing here yet :(   Add your languages by clicking on the edit icon! </p>
            <span style="font-weight:700;font-size:15px" >Biography</span>
            <p v-if="bio != ''"> {{bio}} </p>
            <p style="color:grey;font-style: italic;font-size:15px" v-else> Nothing here yet :(   Add your bio by clicking on the edit icon! </p><br>
        </div>
        </div>
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
        profilepic:''
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
            if(data["bio"] != null){
                self.bio = data["bio"]
            }
            if(data["lang"] != null){
                self.lang = data["lang"]
            }
            if(data["profilepic"] != null){
                self.profilepic=data["profilepic"]
            }
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
  object-fit:cover;
  border: white 10px solid;
  z-index:5;
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
  font-size: 20px;
  font-family: Verdana;
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

</style>