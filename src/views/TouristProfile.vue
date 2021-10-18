<template>
<Layout/>
  <h1>Tourist Profile here</h1>
  <button v-if="isUserAccount" @click="$router.push('/editTouristProfile')"> Edit Profile </button>
    <head>
        <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet" />
        <link href="./css/main.css" rel="stylesheet" />
        <title>Document</title>
    </head>
    <body>
        <div class="v225_54">
            <div class="v225_55"></div>
            <div class="v225_56"></div>
            <div class="v225_57"></div>
            <span class="v225_58">Click to Add Photo</span>
            <div class="v225_59"></div>
            <div class="name"></div>
            <div class="v225_60"></div>
            <div class="v225_61"></div>
            <span class="v225_62">Name

Languages

Biography



</span>
<div class="v225_63">
    <span class="v225_64">Saved Listings</span>
    <span class="v225_65">Reviews</span>
</div>
<span class="v225_66">Listing Name
Tags
Duration Offerred</span><span class="v225_67">Listing Name
Tags
Duration Offerred</span><span class="v225_68">Listing Name
Tags
Duration Offerred</span><span class="v225_69">Listing Name
Tags
Duration Offerred</span><div class="v225_70"><div class="v225_71"><div class="v225_72"></div></div></div>
<div class="v225_73"></div>
<div class="v225_74"></div>
<div class="v225_75">
    <div class="name"></div>
    <div class="name"></div>
    <div class="name"></div>
    <div class="name"></div>
    <div class="name"></div>
</div><div class="v225_81">
    <div class="name"></div>
    <div class="name"></div>
    <div class="name"></div>
    <div class="name"></div>
    <div class="name"></div></div>
    <div class="v225_87"><div class="name"></div><div class="name"></div><div class="name"></div><div class="name"></div><div class="name"></div></div><div class="v225_93"><div class="name"></div><div class="name"></div><div class="name"></div><div class="name"></div><div class="name"></div></div><div class="v225_99"></div><div class="v225_105"></div><div class="v225_106"></div><div class="v225_107"></div><div class="name"></div><span class="v225_109">@username</span><div class="name"></div><span class="v225_111">Saved Listings</span><span class="v225_113">About</span><div class="v225_116"></div><div class="v225_117"></div><div class="v225_118"></div><span class="v225_124">New Review</span><div class="name"></div></div></body>
</template>

<script>
import Layout from '@/components/Layout.vue'

export default {
    name: "TouristProfile",
    components: { Layout },
    methods: {
        getTouristProfile() {
            //TODO: Pull data from database
        },
        isUserAccount() {
            //TODO: check if users account if they want to edit
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
.v225_54 {
  width: 100%;
  height: 883px;
  background: rgba(242,238,238,1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
}
.v225_55 {
  width: 16px;
  height: 17px;
  background: url("~@/images/v225_55.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 749px;
  left: 1226px;
  overflow: hidden;
}
.v225_56 {
  width: 16px;
  height: 17px;
  background: url("~@/images/v225_56.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 433px;
  left: 1226px;
  overflow: hidden;
}
.v225_57 {
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
.v225_58 {
  width: 189px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 284px;
  left: 224px;
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 20px;
  opacity: 1;
  text-align: left;
}
.v225_59 {
  width: 442px;
  height: 289px;
  background: rgba(255,251,251,1);
  opacity: 1;
  position: absolute;
  top: 574px;
  left: 87px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.name {
  color: #fff;
}
.v225_60 {
  width: 134px;
  height: 48px;
  background: rgba(63,163,184,1);
  opacity: 1;
  position: absolute;
  top: 46px;
  left: 1180px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.v225_61 {
  width: 40px;
  height: 48px;
  background: rgba(63,163,184,1);
  opacity: 1;
  position: absolute;
  top: 46px;
  left: 1314px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.v225_62 {
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
.v225_63 {
  width: 327px;
  height: 53px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 98px;
  left: 611px;
  overflow: hidden;
}
.v225_64 {
  width: 202px;
  color: rgba(63,163,184,1);
  position: absolute;
  top: 0px;
  left: 0px;
  font-family: Ubuntu;
  font-weight: Bold;
  font-size: 24px;
  opacity: 1;
  text-align: left;
}
.v225_65 {
  width: 118px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 2px;
  left: 209px;
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 24px;
  opacity: 1;
  text-align: left;
}
.v225_66 {
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
.v225_67 {
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
.v225_68 {
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
.v225_69 {
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
.v225_70 {
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
.v225_71 {
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
.v225_72 {
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
.v225_73 {
  width: 100px;
  height: 101px;
  background: url("~@/images/v225_73.png");
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
.v225_74 {
  width: 230px;
  height: 160px;
  background: url("~@/images/v225_74.png");
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
.v225_75 {
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
.v225_81 {
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
.v225_87 {
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
.v225_93 {
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
.v225_99 {
  width: 220px;
  height: 160px;
  background: url("~@/images/v225_99.png");
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
.v225_105 {
  width: 230px;
  height: 160px;
  background: url("~@/images/v225_105.png");
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
.v225_106 {
  width: 223px;
  height: 160px;
  background: url("~@/images/v225_106.png");
  opacity: 1;
  position: absolute;
  top: 574px;
  left: 1019px;
}
.v225_107 {
  width: 39px;
  height: 33px;
  background: url("~@/images/v225_107.png");
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
.v225_109 {
  width: 391px;
  color: rgba(95,94,94,1);
  position: absolute;
  top: 511px;
  left: 105px;
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 35px;
  opacity: 1;
  text-align: center;
}
.name {
  color: #fff;
}
.v225_111 {
  width: 255px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 187px;
  left: 611px;
  font-family: Ubuntu;
  font-weight: Medium;
  font-size: 30px;
  opacity: 1;
  text-align: left;
}
.v225_113 {
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
.v225_116 {
  width: 17px;
  height: 17px;
  background: url("~@/images/v225_116.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 61px;
  left: 1325px;
  overflow: hidden;
}
.v225_117 {
  width: 16px;
  height: 17px;
  background: url("~@/images/v225_117.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 433px;
  left: 879px;
  overflow: hidden;
}
.v225_118 {
  width: 16px;
  height: 17px;
  background: url("~@/images/v225_118.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 749px;
  left: 878px;
  overflow: hidden;
}
.v225_124 {
  width: 207px;
  color: rgba(255,255,255,1);
  position: absolute;
  top: 59px;
  left: 1192px;
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 20px;
  opacity: 1;
  text-align: left;
}
.name {
  color: #fff;
}

</style>