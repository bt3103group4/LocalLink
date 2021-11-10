<template>
  <head>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap"
      rel="stylesheet"
    />
    <title>ListingsAdv</title>
  </head>
  <body>
    <NavBar />
    <Logo />
    <SettingsButton />
    <DefaultFooter />

    <div class="container">
      <div style="width: 10%"></div>
      <div style="flex-grow: 1"></div>
    </div>
    <br />
    <br />
    <div class="card text-center" id ="top1">
      <div class="card-body">
        <h1 class="card-title">Travel Tips For Your Next Adventure</h1>
        <p class="card-text">
          <i>
            Not sure what to prepare for your upcoming trip?  Here are some tips
            to prepare you for an amazing experience! </i>
        </p>
      </div>
    </div>
    <div class="card text-center" id ="top">
      <div class="card-body">
        <h1 class="card-title">News Updates</h1>
        <p class="card-text">
          <i>
            Watch the latest travel news before planning your trip! </i>
        </p>
      </div>
    </div>

    <div class ="travel-update">
    <h1 > Latest Travel Updates on Covid-19 </h1>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/WuoY7_6O3pc" 
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
    clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div class="grid">
      <div @click="$router.push('/tips-for-travelling-with-covid')"  class="card">
        <img class="card-img-top" src="../images/travel1.jpg" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">5 Expert Tips for Travelling with Covid</h5>
          <p class="card-text"> The Vaccinated Travel Lanes (VTL) are finally open! Here are
              some expert tips on travelling with covid to help you plan your itinerary.
          </p>
        </div>
      </div>
       <div @click="$router.push('/top-destinations-you-should-visit')" class="card">
        <img class="card-img-top" id="sec-img" src="../images/travel2.jpg" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Top 10 destinations you should visit in 2021</h5>
          <p class="card-text"> What's on your travel bucket list? If you need a getaway
              but don't know where to go, we list 15 destinations you should check out!
          </p>
        </div>
        </div>
        <div @click="$router.push('/tips-for-your-next-solo-trip')" class="card">
        <img class="card-img-top" id="sec-img" src="../images/travel3.jpg" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">7 Essential Tips for your Next Solo Trip</h5>
          <p class="card-text"> Your first solo trip will feel extremely intimidating. 
              Check out these useful tips to prepare you for an experience of a lifetime.
          </p>
        </div>
      </div>
    </div>
  </body>
</template>


<script>
import SettingsButton from "@/components/SettingsButton.vue";
import NavBar from "@/components/NavBar.vue";
import Logo from "@/components/Logo.vue";
import DefaultFooter from "@/components/DefaultFooter.vue";
// import firebase from "firebase";
import { db } from "../main.js";

export default {
  name: "Tips",
  components: { SettingsButton, NavBar, Logo, DefaultFooter },

  data() {
    return {
      tours: [],
    };
  },

  mounted() {
    db.collection("listings")
      .where("tour_type", "==", "Adventure")
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          const data = doc.data();
          let tour = {
            email: data.email,
            tour_name: data.tour_name,
            description: data.description,
            tour_photo: data.tour_photo,
            tour_id: String(data.email + ", " + data.tour_name),
          };
          // console.log(this.tours)
          // console.log(tour)
          this.tours.push(tour);
        });
      });
  },
  methods: {
    viewTourInfo(tour_id) {
      this.$router.push({
        name: "TourInfo",
        params: {
          tour_id: tour_id,
        },
      });
    },
  },
};
</script>

<style scoped>
body {
  width: 100%;
}

#sec-img{
    width:377px;
    height:285px;
}
#top{
    position: absolute;
    top:100px;
    width:100%;
}
#top1{
    position: absolute;
    top:800px;
    width:100%;
}
.grid {
  size: 50%;
  position: absolute;
  top: 1000px;
  left: 130px;
  right: 130px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-content: center;
  align-content: center;
}
.card:hover{
    cursor: pointer;
}
.container{
    position:absolute;
    top:50px;
}
.travel-update{
    position: absolute;
    top:300px;
    left:400px;
    border: red 10px solid;
}
.btn-primary {
  width: 120px;
  height: 48px;
  background: rgba(63, 163, 184, 1);
  opacity: 1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  color: rgba(255, 255, 255, 1);
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 18px;
  padding: 0px;
  opacity: 1;
  text-align: center;
  cursor: pointer;
}

.customise {
  background: rgba(63, 163, 184, 1);
  color: rgba(255, 255, 255, 1);
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 18px;
}

a:hover {
  color: rgba(255, 255, 255, 1);
}

button:hover {
  background: rgba(63, 163, 184, 1);
}

a.nav-link.active {
  background: rgba(63, 163, 184, 1);
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 18px;
}

a.nav-link {
  color: rgba(63, 163, 184, 1);
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 18px;
}
</style>