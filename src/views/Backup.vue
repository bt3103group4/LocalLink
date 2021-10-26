<template>
  <Layout />
  <Logo />
  <head>
    <link
      href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap"
      rel="stylesheet"
    />
    <link href="./css/main.css" rel="stylesheet" />
    <title>Document</title>
  </head>
  <body>
    <div class="v97_34">
      <div class="name"></div>
      <span class="v97_485">Personal Information</span>
      <div class="name"></div>
      <span class="v264_76">When will you be free to host the experience?</span>
      <span class="v264_80"
        >Please select your mode of transportation provided for your
        guests:</span
      >
      <span class="v264_84"
        >How many years of tour experience do you have?</span
      >
      <span class="v264_89">How much would the experience cost?</span>
      <span class="v264_98">Add photos to describe your tour</span>
      <span class="v264_124">Name your tour</span>
      <input type="text" class="v97_504" />
      <input type="text" class="v264_87" placeholder="Input in years and months">
      <div class="v264_90"></div>
      <div class="v264_125"></div>
      <div class="v264_61"></div>
      <div class="v264_99"></div>
      <div class="v97_508"></div>
      <div class="v97_511">
        <div class="v97_512"></div>
        <div class="v97_513"></div>
      </div>
      <span class="v97_514">23 Sep 2021 - 30 Dec 2021</span>
      <span class="v97_516"> </span>
      <div class="v97_518"></div>
      <div class="v97_519"><div class="v97_520"></div></div>
      <div class="name"></div>
      <span class="v264_56"
        >What will you and your guests do? Provide a detailed timeline of the
        tour from start to finish Describe how your tour stands out from the
        rest! </span
      ><span class="v264_121">Tour Name</span
      ><span class="v264_63">What you’ll do</span
      ><span class="v264_96">Add photos</span>
      <div class="name"></div>
      <span class="v151_143">Duration Offered</span
      ><span class="v264_85">Work Experience</span>
      <div class="v264_78"></div>
      <div class="v264_64"></div>
      <div class="v264_86"></div>
      <div class="v264_79"></div>
      <div class="v264_122"></div>
      <div class="v264_92"></div>
      <div class="v264_97"></div>
      <div class="v264_62"></div>
      <span class="v264_77">Transportation</span
      ><span class="v264_93">Cost</span
      ><span class="v264_65"
        >Describe your tour to stand out from the rest! A good description
        usually has more than 200 words. </span
      >
      <div class="v264_82"><div class="v264_83"></div></div>
      <span class="v264_91">Price of tour.</span
      ><span class="v264_100">Add photos</span>
      <div class="v264_126"></div>
      <span class="v264_128">List</span>
    </div>
  </body>
  <button @click="saveEdits()">Save</button>
</template>

<script>
import Layout from "@/components/Layout.vue";
import Logo from "@/components/Logo.vue";

export default {
  name: "EditTouristProfile",
  components: { Layout, Logo },
  methods: {
    saveEdits() {
      //TODO: save new edits to firebase
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  font-size: 14px;
}
.v97_34 {
  width: 100%;
  height: 2096px;
  background: rgba(255, 251, 251, 1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
}
.name {
  color: #fff;
}
.v97_485 {
  width: 724px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 70px;
  left: 388px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Ubuntu;
  font-weight: Bold;
  font-size: 50px;
  opacity: 1;
  text-align: left;
}
.name {
  color: #fff;
}
.v264_76 {
  width: 661px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 655px;
  left: 317px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Ubuntu;
  font-weight: Bold;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}
.v264_80 {
  width: 902px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 817px;
  left: 317px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Ubuntu;
  font-weight: Bold;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}
.v264_84 {
  width: 902px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 986px;
  left: 317px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Ubuntu;
  font-weight: Bold;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}
.v264_89 {
  width: 902px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 1145px;
  left: 317px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Ubuntu;
  font-weight: Bold;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}
.v264_98 {
  width: 902px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 1294px;
  left: 317px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Ubuntu;
  font-weight: Bold;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}
.v264_124 {
  width: 902px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 1810px;
  left: 312px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Ubuntu;
  font-weight: Bold;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}
.v97_504 {
  width: 920px;
  height: 58px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 867px;
  left: 317px;
  border: 1px solid rgba(0, 0, 0, 0.33000001311302185);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}
.v264_87 {
  width: 920px;
  height: 58px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 1037px;
  left: 317px;
  border: 1px solid rgba(0, 0, 0, 0.33000001311302185);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}
.v264_90 {
  width: 920px;
  height: 58px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 1197px;
  left: 317px;
  border: 1px solid rgba(0, 0, 0, 0.33000001311302185);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}
.v264_125 {
  width: 920px;
  height: 58px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 1852px;
  left: 308px;
  border: 1px solid rgba(0, 0, 0, 0.33000001311302185);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}
.v264_61 {
  width: 920px;
  height: 222px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 384px;
  left: 317px;
  border: 2px solid rgba(0, 0, 0, 0.33000001311302185);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}
.v264_99 {
  width: 920px;
  height: 417px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 1344px;
  left: 317px;
  border: 1px solid rgba(0, 0, 0, 1);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
}

.v97_511 {
  width: 48px;
  height: 42px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 708px;
  left: 1166px;
  overflow: hidden;
}
.v97_512 {
  width: 39px;
  height: 39px;
  background: rgba(63, 163, 184, 1);
  opacity: 1;
  position: absolute;
  top: 1px;
  left: 4px;
}

.v97_514 {
  width: 561px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 719px;
  left: 351px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}
.v97_516 {
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 1024px;
  left: 920px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}

.v97_519 {
  width: 35px;
  height: 22px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 735px;
  left: 517px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}
.name {
  color: #fff;
}

.v264_56 {
  width: 696px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 235px;
  left: 361px;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}
.v264_121 {
  width: 192px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 835px;
  left: 77px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}
.v264_63 {
  width: 183px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 235px;
  left: 77px;
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}
.v264_96 {
  width: 192px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 742px;
  left: 73px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}
.name {
  color: #fff;
}
.v151_143 {
  width: 370px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 353px;
  left: 75px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}
.v264_85 {
  width: 192px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 544px;
  left: 77px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}
.v264_78 {
  width: 28px;
  height: 24px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 347px;
  left: 34px;
  border-radius: 50%;
}
.v264_64 {
  width: 28px;
  height: 24px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 347px;
  left: 34px;
  border-radius: 50%;
}
.v264_86 {
  width: 28px;
  height: 24px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 541px;
  left: 33px;
  border-radius: 50%;
}
.v264_79 {
  width: 28px;
  height: 24px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 448px;
  left: 34px;
  border-radius: 50%;
}
.v264_122 {
  width: 28px;
  height: 24px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 847px;
  left: 33px;
  border-radius: 50%;
}
.v264_92 {
  width: 28px;
  height: 24px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 642px;
  left: 33px;
  border-radius: 50%;
}
.v264_97 {
  width: 28px;
  height: 24px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 751px;
  left: 33px;
  border-radius: 50%;
}
.v264_62 {
  width: 28px;
  height: 24px;
  background: rgba(63, 163, 184, 1);
  opacity: 1;
  position: absolute;
  top: 257px;
  left: 34px;
  border-radius: 50%;
}
.v264_77 {
  width: 170px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 449px;
  left: 75px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}
.v264_93 {
  width: 192px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 633px;
  left: 77px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}
.v264_65 {
  width: 901px;
  color: rgba(41, 37, 37, 0.33000001311302185);
  position: absolute;
  top: 370px;
  left: 370px;
  font-family: Ubuntu;
  font-weight: Italic;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}
.v264_82 {
  width: 55px;
  height: 50px;
  background: rgba(255, 255, 255, 1);
  opacity: 0.699999988079071;
  position: absolute;
  top: 920px;
  left: 1214px;
  transform: rotate(-89deg);
  overflow: hidden;
}
.v264_83 {
  width: 16px;
  height: 29px;
  background: rgba(0, 0, 0, 1);
  opacity: 1;
  position: absolute;
  top: 19px;
  left: 10px;
}
.v264_88 {
  width: 549px;
  color: rgba(41, 37, 37, 0.33000001311302185);
  position: absolute;
  top: 1035px;
  left: 380px;
  font-family: Ubuntu;
  font-weight: Italic;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}
.v264_91 {
  width: 549px;
  color: rgba(41, 37, 37, 0.33000001311302185);
  position: absolute;
  top: 1193px;
  left: 380px;
  font-family: Ubuntu;
  font-weight: Italic;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}
.v264_100 {
  width: 516px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 1479px;
  left: 755px;
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}
.v264_126 {
  width: 242px;
  height: 78px;
  background: rgba(63, 163, 184, 1);
  opacity: 1;
  position: absolute;
  top: 1972px;
  left: 1133px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.v264_128 {
  width: 234px;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  top: 1972px;
  left: 1216px;
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 40px;
  opacity: 1;
  text-align: left;
}
</style>