<template>
  <head>
    <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet" />
    <title>My Profile</title>
    </head>
    <body>
      <div class="page">
<<<<<<< HEAD
=======
        <button class="newReviewBtn" @click="$router.push('/newreviewtourist')">New Review</button>
>>>>>>> d164a97f5b247083a3972129348d485130d6be53
        <NavBar/>
        <UserInfo/>
        <SettingsButton/>
        <Logo/>

    <ul class = "tabs">
      <li data-tab-target="#savedListings" class="active tab"> Saved Listings </li>
      <li data-tab-target="#newReview" class="tab"> Reviews </li>
    </ul>
    <button class="newReviewBtn" @click="$router.push('/Review')">New Review</button>

    <div class="tabcontent">
      <div id = "savedListings" data-tab-content class="active">
          <UserListings/>
        </div>
      <div id = "newReview" data-tab-content>
          <h1 id = "reviewContent"> Reviews </h1>
        </div>
      </div>

    </div>

  
    </body>
</template>

<script>
import UserInfo from '@/components/UserInfo.vue'
import UserListings from '@/components/UserListings.vue'
import SettingsButton from '@/components/SettingsButton.vue'
import NavBar from '@/components/NavBar.vue'
import Logo from '@/components/Logo.vue'

export default {
    name: "TouristProfile",

    components: { UserInfo, Logo ,UserListings, SettingsButton, NavBar},

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
    }
   
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
body {
  font-size: 14px;
  background-color: rgba(242,238,238,1);
  width: 100%;
  height:1500px;
}

.tabs{
  position: absolute;
  top: 140px;
  left: 600px;
  display : flex;
  color:rgba(0, 0, 0, 0.75);
  list-style-type: none;
  border-bottom: 2px solid black;
  background-color : transparent;
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
.newReviewBtn{
  width: 134px;
  height: 48px;
  background: rgba(63,163,184,1);
  opacity: 1;
  position: absolute;
  top: 150px;  
  left: 1220px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border:none;
  color: rgba(255,255,255,1);
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 18px;
  padding:0px;
  opacity: 1;
  text-align: center;
  cursor: pointer;
}
.newReviewBtn:hover{
  background-color: rgba(0,0,0,0.3);
  cursor: pointer;
}

</style>