<template>
<Layout/>

  <head>
    <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet" />
    <link href="./css/main.css" rel="stylesheet" />
    <title>Document</title>
    </head>
    <body>
      <div class="page">
        <button class="newReviewBtn" @click="$router.push('/Review')">New Review</button>


        <UserInfo/>
        <SettingsButton/>

    <button id="editprofilebtn" v-if="isUserAccount" @click="$router.push('/editTouristProfile')"></button>
    <button class="logout" @click="Logout">Logout</button>
    <input class="searchBar" placeholder="Search ">  
    <Logo/>

    <ul class = "tabs">
      <li data-tab-target="#savedListings" class="active tab"> Saved Listings </li>
      <li data-tab-target="#newReview" class="tab"> Reviews </li>
    </ul>

    <div class="tabcontent">
      <div id = "savedListings" data-tab-content class="active">
          <UserListings/>
        </div>
      <div id = "newReview" data-tab-content>
          <h1 id = "reviewContent"> Reviews </h1>
        </div>
      </div>

    </div>
        <div class="searchIcon"></div>
        <div class="name"></div>
        <div class="name"></div>
        <div class="container">
  
  </div>
        
    </body>
</template>

<script>
import Layout from '@/components/Layout.vue'
import UserInfo from '@/components/UserInfo.vue'
import Logo from '@/components/Logo.vue'
import UserListings from '@/components/UserListings.vue'
import SettingsButton from '@/components/SettingsButton.vue'
import {ref, onBeforeMount} from 'vue';
import firebase from 'firebase';

export default {
    name: "TouristProfile",

    components: { Layout, UserInfo, Logo ,UserListings, SettingsButton},

    mounted(){
      let tabs = document.querySelectorAll('[data-tab-target]')
      let tabContents = document.querySelectorAll('[data-tab-content]')

      tabs.forEach(tab => {
        tab.addEventListener('click', ()=> {
          const target = document.querySelector(tab.dataset.tabTarget)
          tabContents.forEach(tabContent => tabContent.classList.remove('active'))
          tabs.forEach(tab=> tab.classList.remove('active'))
          target.classList.add('active')
          tab.classList.add('active')
        })
      })
    },

    methods: {
        getTouristProfile() {
            //TODO: Pull data from database
        },
        isUserAccount() {
            //TODO: check if users account if they want to edit
        },
    },
    setup () {
            const name = ref("");

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
                    .cathc(err => alert(err.message));
            }

            return{
                name,
                Logout
            }
            

        }
}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  font-size: 14px;
}
.page {
  width: 100%;
  height: 883px;
  background: rgba(242,238,238,1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow:visible;
}
.tabs{
  position: absolute;
  top: 130px;
  left: 600px;
  display : flex;
  color:rgba(0, 0, 0, 0.75);
  list-style-type: none;
  border-bottom: 2px solid black;
  background-color : rgba(242,238,238,1);
  font-size: 23px;
  font-weight: 700;
  width:750px;
  text-align: left;
}
.tab{
  cursor: pointer;
  padding:20px;
}
.tab:hover{
  background-color: #AAA;
}
.tab.active{
  border-bottom: rgba(63,163,184,1) 5px solid;
}
[data-tab-content]{
  display: none;
}
.active[data-tab-content]{
  display: block;
}
#reviewContent{
  position: absolute;
  top: 250px;
  left: 600px;
}
button{
  cursor: pointer;
}
.newReviewBtn{
  width: 134px;
  height: 48px;
  background: rgba(63,163,184,1);
  opacity: 1;
  position: absolute;
  top: 46px;
  left: 1180px;
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
.newReviewBtn:hover{
  background-color: rgba(0,0,0,0.3);
}
.searchBar {
  width: 416px;
  height: 56px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: absolute;
  top: 42px;
  left: 156px;
  overflow: hidden;
  padding-left: 55px;
  font-style: italic;
  font-size: 20px;
  color: rgba(0,0,0,0.50);
}
.searchIcon {
  width: 29px;
  height: 31px;
  background: url("~@/images/search icon.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 56px;
  left: 177px;
  overflow: hidden;
  padding-left: 20px;
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