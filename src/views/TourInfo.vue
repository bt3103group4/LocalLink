<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap"
      rel="stylesheet"
    />
    <div class="v429_58">
      <div class="tour_photo_div">
        <!-- tour photo div  -->
        <img
          :src= "tour_photo"
          alt= "Card image cap"
        />
      </div>
      <div class="v257_63">
        <div class="right_info_box">
          <!-- <div class="v232_103"></div> -->
          <!-- <div class="v232_110"></div> -->
          <div class="v228_57">
            <div class="v228_58"></div>
            <span class="v228_59">Duration Offered:</span>
          </div>
          <span class="v228_72">{{ start_date }} to {{ end_date }}</span>
        </div>
        <div class="v257_64">
          <span class="v228_85">(120 reviews)</span
          ><span class="v228_84">4.97</span
          ><span class="v228_90">From ${{ cost }} / person</span>
        </div>
        <span class="v232_114">You won’t be charged yet</span>
        <button class="v232_110">Reserve</button>
      </div>
      <div>
        <span class="v228_70">Description</span>
        <div class="description">Description: {{ description }}</div>
        <div class="transport">Mode of transport: {{ transport }}</div>
        <div class="experience">Years of experience: {{ experience }}</div>
        <div class="tour-type">Tour type: {{ tour_type }}</div>
        <div class="email">Tour Guide's email: {{ email }}</div>
        <span class="v232_115">{{ tour_name }}</span>
      </div>
    
      <button
        class="back"
        @click= "this.$router.go(-1)"
      >
        Back
      </button>
    </div>
  </div>
</template>

<script>
import { db } from "../main.js";

export default {
  name: "TourInfo",
  components: { },
  props: ['tour_id'],
  data() {
    return {
      id: this.tour_id,
      description: "",
      start_date: "",
      end_date: "",
      transport: "",
      experience: "",
      cost: "",
      tour_name: "",
      tour_type: "",
      email: "",
      tour_photo: "",
    };
  },

  mounted() {
    db.collection("listings")
      .doc(this.id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          (this.description = data.description),
            (this.start_date = data.start_date),
            (this.end_date = data.end_date),
            (this.transport = data.transport),
            (this.experience = data.experience),
            (this.cost = data.cost),
            (this.tour_name = data.tour_name),
            (this.tour_type = data.tour_type),
            (this.email = data.email);
            (this.tour_photo = data.tour_photo)
        } else {
          console.log("no such document");
        }
      });
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
.v429_58 {
  width: 100%;
  height: 800px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
}
.v257_57 {
  width: 374px;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  top: 781px;
  left: 23px;
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 20px;
  opacity: 1;
  text-align: left;
}
.tour_photo_div {
  width: 100%;
  height: 348px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 82px;
  left: 14px;
  overflow: hidden;
}
.v198_104 {
  width: 295px;
  height: 168px;
  /* background: url("../images/v198_104.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 180px;
  left: 676px;
  overflow: hidden;
}
.v198_83 {
  width: 657px;
  height: 348px;
  /* background: url("../images/v198_83.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
}
.v198_103 {
  width: 295px;
  height: 168px;
  /* background: url("../images/v198_103.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 676px;
  overflow: hidden;
}
.v198_105 {
  width: 419px;
  height: 348px;
  /* background: url("../images/v198_105.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 988px;
  overflow: hidden;
}
.v257_63 {
  width: 731px;
  height: 305px;
  /* background: url("../images/v257_63.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 490px;
  left: 690px;
  overflow: hidden;
}
.right_info_box {
  width: 731px;
  height: 305px;
  /* background: url("../images/v228_56.png"); */
  /* background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1; */
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
}
/* .v232_103 {
  width: 731px;
  height: 305px;
  background: rgba(242, 235, 235, 1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  border: 1px solid rgba(234, 224, 224, 1);
  border-top-left-radius: 34px;
  border-top-right-radius: 34px;
  border-bottom-left-radius: 34px;
  border-bottom-right-radius: 34px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
} */
/* .v232_110 {
  width: 628px;
  height: 67px;
  background: rgba(63, 163, 184, 1);
  opacity: 1;
  position: absolute;
  top: 177px;
  left: 58px;
  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
  border-bottom-left-radius: 45px;
  border-bottom-right-radius: 45px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  width: 118px;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  top: 194px;
  left: 306px;
  font-family: Ubuntu;
  font-weight: Medium;
  font-size: 30px;
  opacity: 1;
  text-align: left;
} */
.v228_57 {
  width: 618px;
  height: 52px;
  /* background: url("../images/v228_57.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 100px;
  left: 58px;
  overflow: hidden;
}
.v228_58 {
  width: 407px;
  height: 52px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 212px;
  border: 1px solid rgba(0, 0, 0, 1);
}
.v228_59 {
  width: 211px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 6px;
  left: 0px;
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}
.v228_72 {
  width: 297px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 112px;
  left: 303px;
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}
.v257_64 {
  width: 648px;
  height: 38px;
  /* background: url("../images/v257_64.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 35px;
  left: 47px;
  overflow: hidden;
}
.v228_85 {
  width: 154px;
  color: rgba(123, 123, 123, 1);
  position: absolute;
  top: 5px;
  left: 494px;
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}
.v228_84 {
  width: 78px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 5px;
  left: 404px;
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}
.v228_90 {
  width: 415px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 0px;
  left: 0px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  opacity: 1;
  text-align: left;
}
.v228_78 {
  width: 268px;
  height: 245px;
  /* background: url("../images/v228_78.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 45px;
  left: 260px;
  overflow: hidden;
}
.v232_114 {
  width: 233px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 223px;
  left: 0px;
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 20px;
  opacity: 1;
  text-align: left;
}
.v228_66 {
  width: 170px;
  height: 34px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 367px;
  left: 1237px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
}
.v228_68 {
  width: 144px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 5px;
  left: 14px;
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 20px;
  opacity: 1;
  text-align: left;
}
.v228_70 {
  width: 318px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 501px;
  left: 29px;
  font-family: Ubuntu;
  font-weight: Medium;
  font-size: 35px;
  opacity: 1;
  text-align: left;
}
.v228_73 {
  width: 634px;
  height: 154px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 560px;
  left: 29px;
  border: 1px solid rgba(167, 160, 160, 1);
  overflow: hidden;
}
.description {
  width: 590px;
  color: rgba(78, 78, 78, 1);
  position: absolute;
  top: 569px;
  left: 49px;
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}
.transport {
  width: 590px;
  color: rgba(78, 78, 78, 1);
  position: absolute;
  top: 620px;
  left: 49px;
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}
.experience {
  width: 590px;
  color: rgba(78, 78, 78, 1);
  position: absolute;
  top: 660px;
  left: 49px;
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}
.tour-type {
  width: 590px;
  color: rgba(78, 78, 78, 1);
  position: absolute;
  top: 700px;
  left: 49px;
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}
.email {
  width: 590px;
  color: rgba(78, 78, 78, 1);
  position: absolute;
  top: 730px;
  left: 49px;
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}
.v232_115 {
  width: 510px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 0px;
  left: 53px;
  font-family: Ubuntu;
  font-weight: Medium;
  font-size: 40px;
  opacity: 1;
  text-align: left;
}
.v257_66 {
  width: 53px;
  height: 42px;
  background: rgba(255, 255, 255, 1);
  opacity: 0.699999988079071;
  position: absolute;
  top: 4px;
  left: 0px;
  overflow: hidden;
}
.back {
  width: 15px;
  height: 24px;
  background: rgba(0, 0, 0, 1);
  opacity: 1;
  position: absolute;
  top: 8px;
  left: 18px;
}
</style>