<template>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap"
      rel="stylesheet"
    />
    <title>Document</title>
  </head>

  <body>
    <NavBar />
    <Logo />
    <Back />
    <SettingsButton />
    <span class="header">Describe your experience</span>
    <div class="description">
      <b>What will you and your guests do?</b><br/>
      <li>Provide a detailed timeline of the tour from start to finish.</li>
      <li>Describe how your tour stands out from the rest!</li>
    </div>

    <div class="des_input">
      <textarea
        minlength="100"
        class="des_text"
        v-model.lazy="description"
        placeholder="Describe your tour to stand out from the rest! A good description usually has more than 200 words. (Min requirement: 100 words)"
        required = ""
      ></textarea>
    </div>

    <div class="time">When will you be free to host the experience?</div>
    <div id="time_box">
      <div class="time_input">
        <form>
          <label for="start_date"> Start Date:</label>
          <input id="start_date" v-model.lazy="start_date" type="date" min="getDate()" required/>
          <label for="end_date"> End Date:</label>
          <input id="end_date" v-model.lazy="end_date" type="date" required/>
        </form>
      </div>
    </div>

    <div class="transport">
      Please select your mode of transportation provided for your guests:
    </div>
    <div class="transport_box">
      <form>
        <select v-model="transport" required>
          <option>Car</option>
          <option>Public Transport</option>
          <option>Walk</option>
        </select>
      </form>
    </div>

    <div class="experience">How many years of tour experience do you have?</div>
    <div class="experience_box">
      <input
        class="diff_input"
        type="number"
        v-model.lazy="experience"
        placeholder="  Input the number of years in numbers."
        required
      />
    </div>

    <div class="cost">How much would the experience cost?</div>
    <div class="cost_box">
      <input
        class="diff_input"
        type="number"
        v-model.lazy="cost"
        placeholder="  Price of tour"
        required
      />
    </div>

    <div class="tour_photo_description">Add a photo of your tour</div>
    <div class="tour_photo_box">
    <button id="choosephoto" @click="click1">Choose photo</button>
    <p id="loading" v-if="uploaded == false" >Please wait while your image loads... </p>
    <div class="tour_photo_div" >
          <div class="listing_photo">
            <input 
              type="file"
              ref="input1"
              style="display: none"
              @change="previewImage"
              accept="image/*"
              required
            />
          </div>
          <br />
        </div>
        <img 
              v-if="tour_photo != ''"
              id="tour_picture"
              :src="tour_photo"
              width="300"
            />
    </div>

    <div class="tour_name">Name your tour</div>
    <div class="tour_name_box">
      <textarea
        class="diff_input"
        v-model.lazy="tour_name"
        placeholder="Name of tour"
        required
      ></textarea>
    </div>

    <div class="tour_type">Please select your tour type</div>
    <div class="tour_type_box">
      <form>
        <select v-model="tour_type" required>
          <option>Adventure</option>
          <option>Nature</option>
          <option>Beach</option>
        </select>
      </form>
    </div>

    <button class="save" @click="save">List</button>
  </body>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Logo from "@/components/Logo.vue";
import Back from "@/components/Back.vue";
import firebase from "firebase";
import { db } from "../main.js";
import SettingsButton from '@/components/SettingsButton.vue'

export default {
  name: "NewTour",
  components: { NavBar, Logo, Back, SettingsButton },
  data() {
    return {
      description: "",
      start_date: "",
      end_date: "",
      transport: "",
      experience: "",
      cost: "",
      tour_name: "",
      tour_type: "",
      saved_list: "",
      reserved_list: "",
      tour_photo: "",
      uploaded : true
    };
  },
  methods: {
    save() {
      const self = this;
      const auth = firebase.auth();
      const user = auth.currentUser;
      console.log(this.start_date);
        if (user) {
          let fbuser = auth.currentUser.email;
          const tour_id = String(fbuser + ", " + this.tour_name);
          if (fbuser) {
            if (
              !(
                (this.description.length < 100) ||
                this.start_date == "" ||
                this.end_date == "" ||
                this.start_date > this.end_date ||
                this.transport == "" ||
                this.experience == "" ||
                this.cost == "" ||
                this.tour_name == "" ||
                this.tour_type == "" ||
                this.tour_photo == "" ||
                new Date().toISOString().slice(0, 10) > this.start_date
              )
            ) {
              db.collection("listings").doc(tour_id).set({
                description: self.description,
                start_date: self.start_date,
                end_date: self.end_date,
                transport: self.transport,
                experience: self.experience,
                cost: self.cost,
                tour_name: self.tour_name,
                tour_type: self.tour_type,
                email: fbuser,
                tour_photo: self.tour_photo,
              });
              alert("Edit successfully saved!");
              alert("this.")
              this.$router.push("/tourGuideProfile");
            } else alert("Please check that your description is longer than 100 words, start and end dates are correct or all fields are filled in!");
            console.log("no such document");
          }
        }
    },
    click1() {
      this.$refs.input1.click();
    },

    previewImage(event) {
      this.uploadValue = 0;
      this.tour_photo = null;
      this.uploaded=false;
      this.imageData = event.target.files[0];
      this.onUpload();
    },

    onUpload() {
      let self = this;
      self.tour_photo = null;
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            self.tour_photo = url;
            console.log("Picture");
            console.log(this.tour_photo);
            self.uploaded=true;
          });
        }
      );
      
    },
  },
};
</script>

<style scoped>
body {
  font-size: 14px;
  color: grey;
  width: 100%;
  margin: 0px;
  padding: 0px;
  size: 100%;
}

textarea {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding-top: 15px;
  padding-left: 10px;
}
li {
  font-size: 16px;
}
.header {
  width: 724px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 140px;
  left: 30%;
  font-family: Ubuntu;
  font-weight: Bold;
  font-size: 50px;
  opacity: 1;
  text-align: left;
}

.description {
  width: 696px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 240px;
  left: 20%;
  font-family: Ubuntu;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}

.des_input {
  width: 920px;
  height: 222px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 350px;
  left: 20%;
  border: 2px solid rgba(0, 0, 0, 0.33000001311302185);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0px 4px 4px rgba(194, 148, 148, 0.25);
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
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 15px;
}

.time {
  width: 661px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 625px;
  left: 20%;
  font-family: Ubuntu;
  font-weight: Bold;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}

#time_box {
  width: 920px;
  height: 58px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 680px;
  left: 20%;
  border: 1px solid rgba(0, 0, 0, 0.33000001311302185);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.time_input {
  margin: 15px;
  left: 20%;
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
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 780px;
  left: 20%;
  font-family: Ubuntu;
  font-weight: Bold;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}

.transport_box {
  width: 920px;
  height: 58px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 830px;
  left: 20%;
  border: 1px solid rgba(0, 0, 0, 0.33000001311302185);
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
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 940px;
  left: 20%;
  font-family: Ubuntu;
  font-weight: Bold;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}

.experience_box {
  width: 920px;
  height: 58px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 990px;
  left: 20%;
  border: 1px solid rgba(0, 0, 0, 0.33000001311302185);
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
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 1090px;
  left: 20%;
  font-family: Ubuntu;
  font-weight: Bold;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}

.cost_box {
  width: 920px;
  height: 58px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 1140px;
  left: 20%;
  border: 1px solid rgba(0, 0, 0, 0.33000001311302185);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}
.tour_photo_description {
  width: 950px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 1250px;
  left: 20%;
  font-family: Ubuntu;
  font-weight: Bold;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}
.tour_photo_box {
  width: 920px;
  height: 480px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 1300px;
  left: 20%;
  border: 2px solid rgba(0, 0, 0, 0.33000001311302185);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0px 4px 4px rgba(194, 148, 148, 0.25);
  padding-top: 20px;
  padding-left: 30px;
  overflow: hidden;
}
#choosephoto {
  margin: 15px;
  outline: none;
  resize: none;
  font-size: 20px;
  font-family: verdana;
  font-weight: Regular;
}
#tour_picture {
  top: 1000px
}
.tour_name {
  width: 902px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 1810px;
  left: 20%;
  font-family: Ubuntu;
  font-weight: Bold;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}

.tour_name_box {
  width: 920px;
  height: 58px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 1852px;
  left: 20%;
  border: 1px solid rgba(0, 0, 0, 0.33000001311302185);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.tour_type {
  width: 902px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 1960px;
  left: 20%;
  font-family: Ubuntu;
  font-weight: Bold;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}

.tour_type_box {
  width: 920px;
  height: 58px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 2000px;
  left: 20%;
  border: 1px solid rgba(0, 0, 0, 0.33000001311302185);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.save {
  width: 100px;
  height: 50px;
  background: rgba(63, 163, 184, 1);
  opacity: 1;
  position: absolute;
  top: 2100px;
  left: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 30px;
  color: white;
  font-family: Ubuntu;
  font-size: 22px;
}
.save:hover{
  cursor: pointer;
}

.tour_photo_div{
  border: 10px solid red;
  position:relative;
  top: 1250px;
  left: 20%;
  z-index: 5;
}

*:focus {
  outline: none;
}
</style>