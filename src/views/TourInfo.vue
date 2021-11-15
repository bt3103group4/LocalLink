<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <NavBar />
  <Logo />
  <SettingsButton/>
  <DefaultFooter />
  <Back />
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap"
      rel="stylesheet"
    />

    <img :src="tour_photo" /> <br />
    <br />

    <div class="right_info_box">
      <div class="container" v-if="this.type === 'tourist'">
        <input
          type="checkbox"
          @click="saveToSavedListings(this.tour_name, this.email)"
          v-model="selected"
        />
      </div>

      <div class="v228_57">
        <div class="duration_box"></div>
        <span class="duration">Duration Offered:</span>
      </div>
      <span class="date">{{ start_date }} to {{ end_date }}</span>
      <div class="top_info">
        <span class="num_review">(120 reviews)</span>
        <span class="review">4.97</span>
        <span class="cost">From ${{ cost }} / person</span>
      </div>
      <span class="no_charge">You won’t be charged yet</span>
      <button id="tourGuideBtn" @click="seeGuideProfile(this.email)">
        See Tour Guide Profile
      </button>

      <button
        class="reserve_btn"
        @click="
          this.$router.push('/confirmationpage');
          saveToDB(this.tour_name, this.email);
        "
      >
        Reserve
      </button>
    </div>

    <div class="left_info_box">
      <p class="name">
        <b>Tour's Name:</b> {{ tour_name }} <br />
        <b> Mode of transport:</b> {{ transport }} <br />
        <b> Years of experience: </b> {{ experience }}<br />
        <b> Tour type: </b> {{ tour_type }}<br />
        <b> Tour Guide's email: </b> {{ email }}<br /><br />
        <b> Description: </b> <br />
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Logo from "@/components/Logo.vue";
import DefaultFooter from "@/components/DefaultFooter.vue";
import Back from "@/components/Back.vue";
import { db } from "../main.js";
import firebase from "firebase";
import SettingsButton from "@/components/SettingsButton.vue";

export default {
  name: "TourInfo",
  components: { SettingsButton, NavBar, Logo, DefaultFooter, Back },
  props: ["tour_id"],
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
      selected: "",
      type: "",
    };
  },
  methods: {
    seeGuideProfile(guideEmail) {
      this.$router.push({
        name: "TourGuideView",
        params: {
          guideEmail: guideEmail,
        },
      });
      console.log("guide profile");
      console.log(guideEmail);
    },
    saveToDB(tour_name,email){
        const auth = firebase.auth();
        auth.onAuthStateChanged(user => {
        if (user){
            let fbuser = auth.currentUser.email;
            db.collection("users").doc(this.email).update({
              tour_bookings: firebase.firestore.FieldValue.arrayUnion(tour_name + ' by ' + fbuser)
            })
            if (fbuser){
                db.collection("users").doc(fbuser) 
                .update({
                    bookings: firebase.firestore.FieldValue.arrayUnion(email +", " + tour_name )
                }) 
            }
        }
      });
    },
    saveToSavedListings(tour_name, email) {
      if (this.selected == "") {
        alert("Listing saved!");
        const auth = firebase.auth();
        auth.onAuthStateChanged((user) => {
          if (user) {
            let fbuser = auth.currentUser.email;
            if (fbuser) {
              db.collection("users")
                .doc(fbuser)
                .update({
                  saved_listings: firebase.firestore.FieldValue.arrayUnion(
                    email + ", " + tour_name
                  ),
                });
            }
          }
        });
      } else {
        alert("Removing saved listing!");
        const auth = firebase.auth();
        auth.onAuthStateChanged((user) => {
          if (user) {
            let fbuser = auth.currentUser.email;
            if (fbuser) {
              db.collection("users")
                .doc(fbuser)
                .update({
                  saved_listings: firebase.firestore.FieldValue.arrayRemove(
                    email + ", " + tour_name
                  ),
                });
            }
          }
        });
      }
    },
  },

  mounted() {
    console.log(this.id);
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
          this.tour_photo = data.tour_photo;
        } else {
          console.log("no such document");
        }
      });

    const auth = firebase.auth();
    auth.onAuthStateChanged((user) => {
      if (user) {
        let fbuser = auth.currentUser.email;
        if (fbuser) {
          db.collection("users")
            .doc(String(fbuser))
            .get()
            .then((doc) => {
              if (doc.exists) {
                const data = doc.data();
                this.type = data["type"];
              }
            });
        }
      }
    });
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
body {
  height: 150px;
  font-size: 14px;
  width: 100%;
}

/* 
.card-title {
  font-size: 50;
} */

.top_info {
  width: 648px;
  height: 38px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 30px;
  left: 50px;
  overflow: hidden;
}

.cost {
  width: 500px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 0px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  opacity: 1;
  text-align: left;
  font-size: 30px;
}

.duration_box {
  width: 380px;
  height: 52px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 212px;
  border: 1px solid rgba(0, 0, 0, 1);
  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
  border-bottom-left-radius: 45px;
  border-bottom-right-radius: 45px;
}
.duration {
  width: 400px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 10px;
  left: 2px;
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 23px;
  opacity: 1;
  text-align: left;
}
.date {
  width: 297px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 112px;
  left: 320px;
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 23px;
  opacity: 1;
  text-align: left;
}
.reserve_btn {
  width: 400px;
  height: 67px;
  background: rgba(63, 163, 184, 1);
  opacity: 1;
  position: absolute;
  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
  border-bottom-left-radius: 45px;
  border-bottom-right-radius: 45px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  top: 260px;
  left: 180px;
  font-family: Ubuntu;
  font-weight: Medium;
  font-size: 26px;
  opacity: 1;
  text-align: center;
}

#tourGuideBtn {
  width: 320px;
  height: 60px;
  background: rgba(63, 163, 184, 1);
  opacity: 1;
  position: absolute;
  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
  border-bottom-left-radius: 45px;
  border-bottom-right-radius: 45px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  top: 180px;
  left: 220px;
  font-family: Ubuntu;
  font-weight: Medium;
  font-size: 26px;
  opacity: 1;
  text-align: center;
}

.reserve_btn:hover {
  cursor: pointer;
}
.no_charge {
  width: 250px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 350px;
  left: 250px;
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 15px;
  opacity: 1;
  text-align: center;
}

.tour_photo_div {
  width: 1250px;
  height: 600px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 20px;
  left: 100px;
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

.v198_104 {
  width: 295px;
  height: 168px;
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
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 988px;
  overflow: hidden;
}

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

.num_review {
  width: 154px;
  color: rgba(123, 123, 123, 1);
  position: absolute;
  top: 5px;
  left: 460px;
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}
.review {
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

*,
*:before,
*:after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container {
  height: 130px;
  width: 130px;
  background-color: white;
  position: relative;
  left: 290px;
  border-radius: 12px;
  display: grid;
  place-items: center;
}
input {
  -webkit-appearance: none;
  appearance: none;
  height: 45px;
  border-right: 40px solid lightgray;
  border-bottom: 40px solid transparent;
  position: relative;
  left: 40px;
  outline: none;
  cursor: pointer;
}
input:before {
  content: "";
  position: absolute;
  left: 0px;
  height: 45px;
  border-left: 40px solid lightgray;
  border-bottom: 40px solid transparent;
}
input:checked {
  border-right-color: rgba(63, 163, 184, 1);
  animation: scale 0.4s;
  transition: 0.1s 0.3s border;
}
@keyframes scale {
  80% {
    transform: scale(0.8);
  }
}
input:checked:before {
  border-left-color: rgba(63, 163, 184, 1);
  transition: 0.1s 0.3s border;
}

img {
  display: block;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  height: 1000px;
  width: 1400px;
}

.right_info_box {
  min-width: 731px;
  /* width: 16%; */
  height: 400px;
  border: 1px solid rgba(0, 0, 0, 0.33000001311302185);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  position: absolute;
  /* top: 800px; */
  right: 100px;
}

.left_info_box {
  max-width: calc(100% - 1000px);
  overflow: hidden;
  position: absolute;
  /* top: 800px; */
  float: left;
  left: 100px;
}

.name {
  /* width: 731px; */
  color: rgba(78, 78, 78, 1);
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 20px;
  opacity: 1;
  text-align: left;
  /* display: inline-block; */
}
</style>
