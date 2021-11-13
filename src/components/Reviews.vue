<template>
<body>
  <div class="tour_name">Tour Name</div>
    <div class="tour_name_box">
        <form  v-if="this.type === 'tour-guide'" >
        <select id="tour_name_input" v-model="tourname" >
          <option v-for="listing in listings" :key="listing">
            {{listing.name}} </option>
        </select>
      </form>
       <form v-else>
        <select id="tour_name_input" v-model="tourname">
          <option v-for="booking in bookedTrips" :key="booking">
            {{booking.name}} </option>
        </select>
      </form>
    </div>

  <p class="email_title">Email</p>
    <div class="email_box">
        <textarea v-if="this.type === 'tour-guide'"
        class="email_input"
        v-model.lazy="email"
        placeholder="Enter your tourist's email"
        ></textarea>

        <textarea v-else
        class="email_input"
        v-model.lazy="email"
        placeholder="Enter your tour guide's email"
        ></textarea>
    </div>

    <div class="ratings">Ratings</div>
    <div class="ratings_box">
    <input
      class="ratings_input"
      type="number"
      v-model.lazy="ratings"
      placeholder=" Give a rating out of 5!"
      min="0" max="5">
    </div>

    <div class="reviews">Reviews</div>
    <div class="review_box">
    <textarea v-if="this.type === 'tour-guide'"
      class="review_input"
      v-model.lazy="reviews"
      placeholder="Describe your experience with your tourist!"
    ></textarea>

    <textarea v-else
      class="review_input"
      v-model.lazy="reviews"
      placeholder="Describe your experience with your tour guide!"
    ></textarea>

    </div>

    <button class="save" @click="save">Save</button>
</body>

</template>

<script>
import firebase from "firebase";
import { db } from "../main.js";
export default {
    name: "Reviews",
    data() {
    return {
      tourname: "",
      email: "",
      ratings: "",
      reviews: "",
      type:"",
      bookedTrips:[],
      listings: []
    };
  },
  mounted() {
    const auth = firebase.auth();
    auth.onAuthStateChanged(user => {
      if (user) {
        let fbuser = auth.currentUser.email;
        if (fbuser) {
          db.collection("users").doc(String(fbuser))
          .get()
          .then(doc => {
            if (doc.exists){
              const data = doc.data()
              this.type = data["type"]
              if (this.type == 'tour-guide'){ //if tour guide, retrieve listings guide has for review
                db.collection("listings").where("email","==",fbuser)
                .get()
                .then((z => {
                  z.forEach((doc) => {
                    const data = doc.data()
                    const listing = {
                        name: data["tour_name"],
                        email:fbuser
                    }
                    console.log("here")
                    console.log(listing)
                    this.listings.push(listing)
                  }
                )}))
              }
              else{ //if tourist, retrieve their bookings to review
                data["bookings"].forEach((booking)=>{
                  let parsed = {
                    name : booking.split(", ").slice(-1).toString(),
                    email:  booking.split(", ").slice(0).toString()
                  }
                  this.bookedTrips.push(parsed)
                }
                )
              }
            } else {
              console.log("no such document")
            }
          })
        }
      }
    })
  },
            
  methods: {
    save() {
      const self = this;
      const auth = firebase.auth();
      auth.onAuthStateChanged((user) => {
        if (user) {
          let fbuser = auth.currentUser.email;
          const tour_id = String(this.email + ',' + this.tourname + " reviewed by " + fbuser)
          if (fbuser) {
            if (!(this.tourname == ""  || this.email == ""  || this.ratings == "" || this.reviews == "")){
              db.collection("Reviews").doc(tour_id).set({
                tourname: self.tourname,
                email: self.email,
                ratings: self.ratings,
                reviews: self.reviews,
                my_email: fbuser,
              });
              alert("Edit successfully saved!");
              this.$router.push("/touristProfile")
            }
            else alert("Cannot take empty Values. Please enter the values")
            console.log("no such document");
          }
        }
      });
     },
  },
};


</script>

<style scoped>
body{
  width: 100%
}

.tour_name {
  width: 902px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 235px;
  left: 20%;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Ubuntu;
  font-weight: Bold;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}
#tour_name_input{
  width:900px;
  height:55px;
  outline: none;
}
textarea{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding-top:15px;
  padding-left:10px;
}
.tour_name_box {
  width: 920px;
  height: 58px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 300px;
  left: 20%;
  border: 1px solid rgba(0, 0, 0, 0.33000001311302185);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.tour_input {
    margin: 0px;
    font-size: 20px;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: hidden;
    width: 919px;
    height: 56px;
    left: 400px;
    outline: none;
}

.email_title{
  position: absolute;
  top: 400px;
  left: 20%;
  font-size: 25px;
  font-weight: Bold;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
}

.email_box {
  width: 920px;
  height: 58px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 465px;
  left: 20%;
  border: 1px solid rgba(0, 0, 0, 0.33000001311302185);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.email_input {
    margin: 0px;
    font-size: 20px;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: hidden;
    width: 919px;
    height: 56px;
    left: 20%;
    outline: none;
}

.ratings {
  width: 902px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 565px;
  left: 20%;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Ubuntu;
  font-weight: Bold;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}

.ratings_box {
  width: 920px;
  height: 58px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 630px;
  left: 20%;
  border: 1px solid rgba(0, 0, 0, 0.33000001311302185);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.ratings_input {
    margin: 0px;
    font-size: 20px;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: hidden;
    width: 919px;
    height: 56px;
    left: 20%;
    outline: none;
}

.reviews {
  width: 902px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 730px;
  left: 20%;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Ubuntu;
  font-weight: Bold;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}

.review_box {
  width: 920px;
  height: 222px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 795px;
  left: 20%;
  border: 2px solid rgba(0, 0, 0, 0.33000001311302185);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.review_input {
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

.save {
  width: 100px;
  height: 50px;
  background: rgba(63, 163, 184, 1);
  opacity: 1;
  position: absolute;
  top: 1100px;
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
</style>