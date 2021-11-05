<template>
<body>
<div class="topnav">
    <a href="#home">About</a>
    <a class="active" href="#home">Contact</a>
  <router-link to="/touristProfile">Account</router-link>
</div>
    <input class="searchbox" placeholder="Search">
    <div class="searchicon"></div>

</body>
</template>

<script>
import {ref, onBeforeMount} from 'vue'
import firebase from 'firebase'

export default {
   setup () {
            let name = ref("");

            onBeforeMount(() => {
                const user = firebase.auth().currentUser;
                if (user) {
                    name.value = user.email.split('@')[0];
                }
                
            });

            const Logout = () => {
                firebase    
                    .auth()
                    .signOut()
                    .then(() => console.log("Sign Out"))
                    .catch(err => alert(err.message));
            }

            return{
                name,
                Logout
            }
            

        }
}
</script>

<style scoped>
body{
  margin:0px;
  padding:0px;
  position: absolute;
  top: 0px;
  left:0px;
}
.topnav{
  background-color: rgba(63,163,184,1);
  width: 100%;
  position: absolute;
  top: 0px;
  height: 75px;
  padding-top: 25px ;
  padding-left: 1000px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
a{
  padding: 20px;
  font-family: Ubuntu;
  color: white;
  text-decoration: none;
  font-size: 18px;
}
a:hover{
  cursor: pointer;
  background-color: grey;
  height: 75px;
  top:0px;
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