<template>
<Layout/>
    <head><link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
        <link href="./main.css" rel="stylesheet" />
        <title>Document</title><link href="./css/main.css" rel="stylesheet" />
        <title>Document</title>
    </head>
    <body>

        <div class="v218_77">
        <UserInfo/>
        <SearchBar/>
        <UserListings/>

        <ul class = "tabs">
          <li data-tab-target="#listings" class="active tab">Listings </li>
          <li data-tab-target="#newReview" class="tab"> Reviews </li>
        </ul>

        <div class="tabcontent">
          <div id = "listings" data-tab-content class="active">
              <UserListings/>
            </div>
          <div id = "newReview" data-tab-content>
              <h1 id = "reviewContent"> Reviews </h1>
            </div>
          </div>
            </div>

        <button class="settingsbtn"></button>

        <button id="editprofilebtn" v-if="isUserAccount" @click="$router.push('/editTourGuideProfile')"> </button>

    <Logo/>

    <div class="name"></div>
    <button class="uploadbtn">Upload Tour</button>
    <div class="v218_107"></div>

    </body>
    </template>
<script>
import Layout from '@/components/Layout.vue'
import UserInfo from '@/components/UserInfo.vue'
import SearchBar from '@/components/UserInfo.vue'
import Logo from '@/components/Logo.vue'
import UserListings from '@/components/UserListings.vue'

export default {
    name: "TouristProfile",
    components: { Layout , UserInfo, SearchBar, Logo, UserListings},
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
        getTourGuideProfile() {
            //TODO: Pull data from database
        },
        isUserAccount() {
            //TODO: Check this is users account if they want to edit info
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
body {
  width: 100%;
  height: 1800px;
  background: rgba(242,238,238,1);
  opacity: 1;
  position: relative;
  top: 0px;
  left: 0px;
}

#uploadImage{
    top : 300px;
    width : 200px;
    position: relative;
    left : 210px;
    align-content: center;
}
.addPhotoBtn {
  width: 189px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 315px;
  left: 216px;
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 20px;
  opacity: 1;
  text-align: left;
}
.uploadbtn {
  width: 134px;
  height: 48px;
  background: rgba(63,163,184,1);
  opacity: 1;
  position: absolute;
  top: 46px;
  left: 1180px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.settingsbtn {
  width: 40px;
  height: 48px;
  background: rgba(63,163,184,1);
  opacity: 1;
  position: absolute;
  top: 46px;
  left: 1314px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.v207_66 {
  width: 118px;
  color: rgba(63,163,184,1);
  position: absolute;
  top: 0px;
  left: 0px;
  font-family: Roboto;
  font-weight: Black;
  font-size: 24px;
  opacity: 1;
  text-align: left;
}
.v207_69 {
  width: 118px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 0px;
  left: 149px;
  font-family: Roboto;
  font-weight: Regular;
  font-size: 24px;
  opacity: 1;
  text-align: left;
}
.v207_82 {
  width: 215px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 432px;
  left: 664px;
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 18px;
  opacity: 1;
  text-align: left;
}
.v208_58 {
  width: 215px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 748px;
  left: 664px;
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 18px;
  opacity: 1;
  text-align: left;
}
.v208_59 {
  width: 215px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 748px;
  left: 1022px;
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 18px;
  opacity: 1;
  text-align: left;
}
.v207_106 {
  width: 215px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 425px;
  left: 1022px;
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 18px;
  opacity: 1;
  text-align: left;
}
.name {
  color: #fff;
}
.v218_79 {
  width: 255px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 187px;
  left: 619px;
  font-family: Roboto;
  font-weight: Medium;
  font-size: 30px;
  opacity: 1;
  text-align: left;
}
.uploadbtn {
  color: rgba(255,255,255,1);
  position: absolute;
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 16px;
  opacity: 1;
  text-align: center;
}

.v218_107 {
  width: 17px;
  height: 17px;
  background: url("~~@/images/v218_107.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 61px;
  left: 1325px;
  overflow: hidden;
}
.name {
  color: #fff;
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

</style>