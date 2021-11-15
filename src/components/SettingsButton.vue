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
import { useRouter } from 'vue-router'
import { getCurrentInstance } from 'vue'

export default {
   setup () {
            let name = ref("");
            const store = getCurrentInstance().appContext.config.globalProperties.$store
            const router = useRouter()

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
                    .then(() => store.commit("setLoggedOut", null))
                    .then(() => console.log(store.state))
                    .then(() => router.push('/'))
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
  right:4%;
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