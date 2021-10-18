<template>
<Layout/>
  <h1>Tour Guide Profile here</h1>
   <button v-if="isUserAccount"  @click="$router.push('/editTourGuideProfile')"> Edit Profile </button>
   <!DOCTYPE html><html>
    <head><link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
        <link href="./main.css" rel="stylesheet" />
        <title>Document</title><link href="./css/main.css" rel="stylesheet" />
        <title>Document</title>
    </head>
    <body>
        <div class="v207_49">
            <div class="v222_58">

        </div>
        <div class="v222_57">

        </div>
        <div class="v207_56">
                
        </div>
        
        <span class="v207_57">Click to Add Photo</span>
        <div class="v207_58">

        </div>
        <div class="v218_77">

        </div>
        <button class="settingsbtn"></button>

        <div class="details">
            <h4>Name </h4>
            <h4>Languages</h4>
            <h4>Biography</h4>
        </div>

        <div class="v207_64">
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
Duration Offerred</span><div class="v207_95"><div class="v207_96"><div class="v207_97"></div></div></div><div class="v207_103"></div><div class="v97_459"></div><div class="v102_8"><div class="name"></div><div class="name"></div><div class="name"></div><div class="name"></div><div class="name"></div></div><div class="v208_60"><div class="name"></div><div class="name"></div><div class="name"></div><div class="name"></div><div class="name"></div></div><div class="v208_66"><div class="name"></div><div class="name"></div><div class="name"></div><div class="name"></div><div class="name"></div></div><div class="v207_107"><div class="name"></div><div class="name"></div><div class="name"></div><div class="name"></div><div class="name"></div></div><div class="v207_105"></div><div class="name"></div><div class="name"></div><div class="name"></div><div class="name"></div><div class="name"></div><div class="name"></div><div class="v208_55"></div><div class="v208_57"></div><div class="v216_71"></div><div class="name"></div><span class="v218_73">@username</span><div class="name"></div><span class="v218_79">Listings</span>
<button class="uploadbtn">Upload Tour</button>
<span class="v218_91">About</span><div class="v218_107"></div><div class="v222_55"></div><div class="v222_56"></div><div class="name"></div></div></body></html>
</template>
<script>
import Layout from '@/components/Layout.vue'

export default {
    name: "TouristProfile",
    components: { Layout },
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
.v207_49 {
  width: 100%;
  height: 925px;
  background: rgba(242,238,238,1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
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
.v222_57 {
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
.v207_56 {
  width: 322px;
  height: 322px;
  background: rgba(255,251,251,1);
  opacity: 1;
  position: absolute;
  top: 170px;
  left: 147px;
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.v207_57 {
  width: 189px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 284px;
  left: 216px;
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 20px;
  opacity: 1;
  text-align: left;
}
.v207_58 {
  width: 442px;
  height: 289px;
  background: rgba(255,251,251,1);
  opacity: 1;
  position: absolute;
  top: 574px;
  left: 87px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.uploadbtn {
  width: 134px;
  height: 48px;
  background: rgba(63,163,184,1);
  opacity: 1;
  border: none;
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
  border: none;
  top: 46px;
  left: 1314px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.details {
  width: 416px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 680px;
  left: 118px;
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 20px;
  opacity: 1;
  text-align: left;
}
.v207_64 {
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
.v207_95 {
  width: 416px;
  height: 56px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 42px;
  left: 156px;
  overflow: hidden;
}
.v207_96 {
  width: 416px;
  height: 56px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
}
.v207_97 {
  width: 416px;
  height: 56px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  border: 3px solid rgba(0,0,0,0.20000000298023224);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
}
.v207_103 {
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
.v102_8 {
  width: 99px;
  height: 20px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 501px;
  left: 664px;
  overflow: hidden;
}
.name {
  color: #fff;
}
.name {
  color: #fff;
}
.name {
  color: #fff;
}
.name {
  color: #fff;
}
.name {
  color: #fff;
}
.v208_60 {
  width: 99px;
  height: 20px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 822px;
  left: 663px;
  overflow: hidden;
}
.name {
  color: #fff;
}
.name {
  color: #fff;
}
.name {
  color: #fff;
}
.name {
  color: #fff;
}
.name {
  color: #fff;
}
.v208_66 {
  width: 99px;
  height: 20px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 822px;
  left: 1019px;
  overflow: hidden;
}
.name {
  color: #fff;
}
.name {
  color: #fff;
}
.name {
  color: #fff;
}
.name {
  color: #fff;
}
.name {
  color: #fff;
}
.v207_107 {
  width: 99px;
  height: 20px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 501px;
  left: 1022px;
  overflow: hidden;
}
.name {
  color: #fff;
}
.name {
  color: #fff;
}
.name {
  color: #fff;
}
.name {
  color: #fff;
}
.name {
  color: #fff;
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
.name {
  color: #fff;
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
.v216_71 {
  width: 39px;
  height: 33px;
  background: url("~@/images/v216_71.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 56px;
  left: 177px;
  overflow: hidden;
}
.name {
  color: #fff;
}
.v218_73 {
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
.v218_91 {
  width: 188px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 598px;
  left: 118px;
  font-family: Ubuntu;
  font-weight: Medium;
  font-size: 25px;
  opacity: 1;
  text-align: left;
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

</style>