
<template>
  <head>
    <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet" />
    <title>My Profile</title>
    </head>
    <body>
      <div class="page">
        <NavBar/>
        <UserInfo/>
        <SettingsButton/>
        <Logo/>


  <div class="listingsComp">
    <ul class = "tabs">
      <li data-tab-target="#bookedListings" class="active tab"> My Bookings</li>
      <li data-tab-target="#savedListings" class="tab"> Saved </li>
      <li data-tab-target="#newReview" class="tab"> Reviews </li>
    </ul>
    <button class="newReviewBtn" @click="$router.push('/newreviewtourist')">New Review</button>

    <div class="tabcontent">
      <div id = "savedListings" data-tab-content >
          <UserSavedListings/>
        </div>
      <div id = "newReview" data-tab-content>
          <ReviewList/>
        </div>
      <div id = "bookedListings" data-tab-content class="active">
         <UserBookedListings/>
        </div>        
      </div>

    </div>
</div>
  <DefaultFooter/>
    </body>
</template>

<script>
import UserInfo from '@/components/UserInfo.vue'
import UserSavedListings from '@/components/UserSavedListings.vue'
import SettingsButton from '@/components/SettingsButton.vue'
import NavBar from '@/components/NavBar.vue'
import Logo from '@/components/Logo.vue'
import UserBookedListings from '@/components/UserBookedListings.vue'
import ReviewList from '@/components/ReviewList.vue'
import DefaultFooter from '@/components/DefaultFooter.vue'

export default {
    name: "TouristProfile",
    components: { UserInfo, Logo ,UserSavedListings, SettingsButton, NavBar, UserBookedListings, ReviewList, DefaultFooter},
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
.listingsComp{
  position:absolute;
  top:100px;
  right:40px;
  height:830px;
  width:800px;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
body {
  font-size: 14px;
  background-color: rgba(242,238,238,1);
  width: 100%;
  height:1500px;
}
.tabs{
  position: absolute;
  top: 10px;
  left: 20px;
  display : flex;
  color:rgba(0, 0, 0, 0.75);
  list-style-type: none;
  border-bottom: 2px solid black;
  background-color : transparent;
  font-size: 23px;
  font-weight: 700;
  width:750px;
  padding:0px;
}
.tab{
  cursor: pointer;
  padding: 25px;
  padding-bottom: 10px;
}
.tab.active{
  border-bottom: rgba(63,163,184,1) 5px solid ;
  color:rgba(63,163,184,1);
}
[data-tab-content]{
  display: none;
}
.active[data-tab-content]{
  display: block;
}
#reviewContent, #bookingContent{
  position: absolute;
  top: 150px;
  left: 800px;
}
.newReviewBtn{
  width: 134px;
  height: 48px;
  background: rgba(63,163,184,1);
  opacity: 1;
  position: absolute;
  top: 20px;  
  left: 630px;
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