<template>
    <div class= "dropdown">
      <button class="settingsBtn"></button>
        <div class="dropdown-content">
            <a href="#">Help</a> <br>
            <button class="logout" @click="Logout">Logout</button>
        </div>
    </div>

    <div class="settingsIcon"></div>
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

.logout{
  border:None;
  text-align: right;
  padding: 0px;
  font-family: Ubuntu;
  font-size: 14px;
}
.logout:hover{
  cursor: pointer;
}
.settingsBtn{
    border:none;
    width: 50px;
    height: 50px;
    background: rgba(63,163,184,1);
    margin:0px;
    padding:0px;
    cursor: pointer;
    z-index:10;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 175px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding:10px;
  z-index: 1;
  font-family: Ubuntu;
  right:0;
  text-align: right;
}
.dropdown {
  position: absolute;
  top:9px;
  right: 85px;
  display: inline-block;
}
.dropdown-content a {
  color: black;
  text-decoration: none;
  display: block;
  padding-right: 0px;
}
.dropdown-content a:hover {
  background-color: #ddd;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown:hover .settingsBtn {
  background-color:grey;
  height:55px;
}
.settingsIcon {
  width: 17px;
  height: 17px;
  background: url("~@/images/v225_116.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 28px;
  right:100px;
  overflow: hidden;
  z-index:1;
}
</style>