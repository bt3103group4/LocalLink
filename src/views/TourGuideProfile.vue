<template>
<Layout/>
    <head><link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
        <link href="./main.css" rel="stylesheet" />
        <title>Document</title><link href="./css/main.css" rel="stylesheet" />
        <title>Document</title>
    </head>
    <body>
        <div class="v222_58"></div>
        <div class="deletebtn"></div>

        <div class="v218_77">
        <UserInfo/>
        </div>
        <button class="settingsbtn"></button>

        <button id="editprofilebtn" v-if="isUserAccount" @click="$router.push('/editTourGuideProfile')"> </button>

        <div class="profilenavbar">
            <span class="v207_66">Listings</span>
            <span class="v207_69">Reviews</span> 
        </div>
        <span class="v207_82">Listing Name
Tags
Duration Offerred</span><span class="v208_58">Listing Name
Tags
Duration Offerred</span><span class="v208_59">Listing Name
Tags
Duration Offerred</span><span class="v207_106">Listing Name
Tags
Duration Offerred</span>
    <input class="searchbox">
    <div class="logo"></div><div class="v97_459"></div>
    <div class="v207_105"></div><div class="v208_55"></div>
    <div class="v208_57"></div>
    <div class="searchicon"></div>

    <div class="name"></div>
    <span class="v218_79">Listings</span>
    <button class="uploadbtn">Upload Tour</button>
    <div class="v218_107"></div>
    <button class="v222_55"></button>
    <div class="v222_56"></div>

    </body>
    </template>
<script>
import Layout from '@/components/Layout.vue'
import UserInfo from '@/components/UserInfo.vue'

export default {
    name: "TouristProfile",
    components: { Layout , UserInfo},
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
.v222_58 {
  width: 16px;
  height: 17px;
  background: url("~@/images/v222_58.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 748px;
  left: 1219px;
  overflow: hidden;
}
#uploadImage{
    top : 300px;
    width : 200px;
    position: relative;
    left : 210px;
    align-content: center;
}

.deletebtn {
  width: 16px;
  height: 17px;
  background: url("~@/images/v222_57.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 434px;
  left: 1221px;
  overflow: hidden;
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

.profilenavbar {
  width: 268px;
  height: 53px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 101px;
  left: 603px;
  overflow: hidden;
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
.searchbox {
  width: 416px;
  height: 50px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 42px;
  left: 156px;
  overflow: hidden;
  padding-left: 50px;
  border-radius: 15px;
}

.logo {
  width: 100px;
  height: 101px;
  background: url("~@/images/v207_103.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 22px;
  left: 28px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  overflow: hidden;
}
.v97_459 {
  width: 230px;
  height: 160px;
  background: url("~@/images/v97_459.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 255px;
  left: 664px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
}

.v207_105 {
  width: 220px;
  height: 160px;
  background: url("~@/images/v207_105.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 255px;
  left: 1022px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
}

.v208_55 {
  width: 230px;
  height: 160px;
  background: url("~@/images/v208_55.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 574px;
  left: 664px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
}
.v208_57 {
  width: 223px;
  height: 160px;
  background: url("~@/images/v208_57.png");
  opacity: 1;
  position: absolute;
  top: 574px;
  left: 1019px;
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
  top: 55px;
  left: 170px;
  overflow: hidden;
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
.v222_55 {
  width: 16px;
  height: 17px;
  background: url("~~@/images/v222_55.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 433px;
  left: 856px;
  overflow: hidden;
}
.v222_56 {
  width: 16px;
  height: 17px;
  background: url("~~@/images/v222_56.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 749px;
  left: 856px;
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

</style>