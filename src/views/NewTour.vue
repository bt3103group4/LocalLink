<template>
    <Layout/>
    <Logo/>
    <span class="header">Describe your experience</span>
    <div class="description"><b>What will you and your guests do?</b>
      <li>Provide a detailed timeline of the tour from start to finish.</li>
      <li>Describe how your tour stands out from the rest!</li>
    </div>
      
    <div class="des_input">
        <textarea class = "des_text" v-model.lazy= "Description" placeholder = "Describe your tour to stand out from the rest! A good description usually has more than 200 words."></textarea>
    </div>

    <div class="time">When will you be free to host the experience?</div>
    <div id="time_box">
      <div class="time_input">
        <form action="/action_page.php">
          <label for="start_date"> Start Date:</label>
          <input id="start_date" v-model.lazy= "Start_Date" type="date" >
          <label for="end_date"> End Date:</label>
          <input id="end_date" v-model.lazy= "End_Date" type="date" >
        </form>
      </div>
    </div>

    <div class="transport">Please select your mode of transportation provided for your guests:</div>
    <div class="transport_box">
      <form action="/action_page.php">
        <select v-model= "Transport">
          <option>Car</option>
          <option>Public Transport</option>
          <option>Walk</option>
        </select>
      </form>
    </div>

    <div class="experience">How many years of tour experience do you have?</div>
    <div class="experience_box">
      <input class = "diff_input" type="number" v-model.lazy= "Experience" placeholder = "Input the number of years in numbers.">
    </div>

    <div class="cost">How much would the experience cost?</div>
    <div class="cost_box">
      <input class = "diff_input" type="number" v-model.lazy= "Cost" placeholder = "Price of tour.">
    </div>

    <div class="photos">Add photos to describe your tour</div>
    <div id="photos_box">
      <div class="photos_input">
        <form action="/action_page.php">
            <label for="img">Select photo:</label><br><br>
            <input type="file" id="img" name="img" accept="image/*"><br><br>
        </form>
      </div>
    </div>

    <div class="tour_name">Name your tour</div>
    <div class="tour_name_box">
      <textarea class = "diff_input" v-model.lazy= "TourName" placeholder = "Name of tour."></textarea>
    </div>

    <button class="list"> List </button>
    


    <head>
      <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet" />
      <link href="./css/main.css" rel="stylesheet" />
      <title>Document</title>
    </head>

    <body>
      <div class="v97_34">
        <div class="name"></div>

        <div class="v97_508"></div>
          
          <span class="v97_516"> </span>
          <div class="v97_518"></div>
            <div class="v97_520"></div>
          <div class="name"></div>
          <div class="v151_59"></div>
          <span class="v264_121">Tour Name</span>
          <span class="v264_63">What you’ll do</span>
          <span class="v264_96">Add photos</span>
          <div class="name"></div>
          <span class="v151_143">Duration Offered</span>
          <span class="v264_85">Work Experience</span>
          <div class="v264_78"></div>
          <div class="v264_64"></div>
          <div class="v264_86"></div>
          <div class="v264_79"></div>
          <div class="v264_122"></div>
          <div class="v264_92"></div>
          <div class="v264_97"></div>
          <div class="v264_62"></div>
          <span class="v264_77">Transportation</span>
          <span class="v264_93">Cost</span>
    </div>
 </body>
</template>

<script>
import Layout from '@/components/Layout.vue'
import Logo from '@/components/Logo.vue'

export default {
    name: "NewTour",
    components: { Layout ,Logo },
    data() {
      return {
        Description:"",
        Start_Date:"",
        End_Date:"",
        Transport:"",
        Experience:"",
        Cost:"",
        TourName:"",
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

.name {
  color: #fff;
}
.header {
  width: 724px;
  color: rgba(0,0,0,1);
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

.description {
  width: 696px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 235px;
  left: 317px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Ubuntu;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}

.des_input {
  width: 920px;
  height: 222px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 384px;
  left: 317px;
  border: 2px solid rgba(0,0,0,0.33000001311302185);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.des_text {
  outline: none;
  margin: 0px; 
  width: 900px; 
  height: 230px;
  resize: none;
  font-size: 20px;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
}

.time {
  width: 661px;
  color: rgba(0,0,0,1);
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

#time_box {
  width: 920px;
  height: 58px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 700px;
  left: 317px;
  border: 1px solid rgba(0,0,0,0.33000001311302185);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.time_input {
  margin: 15px; 
  left: 320px;
  top: 750px;
  outline: none;
  resize: none;
  font-size: 20px;
  font-family: Ubuntu;
  font-weight: Regular;
}

input {
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;
  font-size: 20px;
}

.transport {
  width: 902px;
  color: rgba(0,0,0,1);
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

.transport_box {
  width: 920px;
  height: 58px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 867px;
  left: 317px;
  border: 1px solid rgba(0,0,0,0.33000001311302185);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}


select {
  width: 800px;
  height: 50px;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;
  font-size: 20px;
  font-family: Ubuntu;
  font-weight: Regular;
}

.experience {
  width: 902px;
  color: rgba(0,0,0,1);
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

.experience_box {
  width: 920px;
  height: 58px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 1037px;
  left: 317px;
  border: 1px solid rgba(0,0,0,0.33000001311302185);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.diff_input {
  margin: 0px; 
  width: 900px; 
  height: 60px;
  outline: none;
  resize: none;
  font-size: 20px;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;
}

.cost {
  width: 902px;
  color: rgba(0,0,0,1);
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

.cost_box {
  width: 920px;
  height: 58px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 1197px;
  left: 317px;
  border: 1px solid rgba(0,0,0,0.33000001311302185);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.photos {
  width: 902px;
  color: rgba(0,0,0,1);
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

#photos_box {
  width: 920px;
  height: 417px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 1344px;
  left: 317px;
  border: 1px solid rgba(0,0,0,1);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
}

.photos_input {
  margin: 15px; 
  outline: none;
  resize: none;
  font-size: 25px;
  font-family: Ubuntu;
  font-weight: Regular;
}

.tour_name {
  width: 902px;
  color: rgba(0,0,0,1);
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

.tour_name_box {
  width: 920px;
  height: 58px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 1852px;
  left: 308px;
  border: 1px solid rgba(0,0,0,0.33000001311302185);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.list {
  width: 242px;
  height: 78px;
  background: rgba(63,163,184,1);
  opacity: 1;
  position: absolute;
  top: 1972px;
  left: 1133px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size:30px;
  color: white;
  font-family: Ubuntu;
}


.name {
  color: #fff;
}

.v97_516 {
  color: rgba(0,0,0,1);
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

.name {
  color: #fff;
}

.v264_121 {
  width: 192px;
  color: rgba(0,0,0,1);
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
  color: rgba(0,0,0,1);
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
  color: rgba(0,0,0,1);
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
  color: rgba(0,0,0,1);
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
  color: rgba(0,0,0,1);
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
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 347px;
  left: 34px;
  border-radius: 50%;
}
.v264_64 {
  width: 28px;
  height: 24px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 347px;
  left: 34px;
  border-radius: 50%;
}
.v264_86 {
  width: 28px;
  height: 24px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 541px;
  left: 33px;
  border-radius: 50%;
}
.v264_79 {
  width: 28px;
  height: 24px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 448px;
  left: 34px;
  border-radius: 50%;
}
.v264_122 {
  width: 28px;
  height: 24px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 847px;
  left: 33px;
  border-radius: 50%;
}
.v264_92 {
  width: 28px;
  height: 24px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 642px;
  left: 33px;
  border-radius: 50%;
}
.v264_97 {
  width: 28px;
  height: 24px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 751px;
  left: 33px;
  border-radius: 50%;
}
.v264_62 {
  width: 28px;
  height: 24px;
  background: rgba(63,163,184,1);
  opacity: 1;
  position: absolute;
  top: 257px;
  left: 34px;
  border-radius: 50%;
}
.v264_77 {
  width: 170px;
  color: rgba(0,0,0,1);
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
  color: rgba(0,0,0,1);
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

.v264_128 {
  width: 234px;
  color: rgba(255,255,255,1);
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