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
    <title>ListingsBeach</title>
  </head>
  <body>
    <NavBar />
    <Logo />
    <SettingsButton />
    <DefaultFooter/>

    <div class="container">
      <div style="width: 10%"></div>
      <div style="flex-grow: 1"></div>
    </div>
    <br />
    <br />
    <div class="card text-center">
      <div class="card-header">
        <ul class="nav nav-pills card-header-pills">
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              @click="$router.push('/listingsnature')"
              >Nature</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="$router.push('/listingsadv')"
              >Adventure</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">Beach</a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <h2 class="card-title">Sandy Beach</h2>
        <p class="card-text">
          Soft sand, rolling waves and endless sunshine. What's not to love?
        </p>
        <a href="#" class="btn btn-primary">Customize my trip now!</a>
      </div>
    </div>
    <div class="grid">
      <div class="card" v-for="tour in tours" :key="tour.tour_name">
        <img
          class="card-img-top"
          src="..\images\v225_106.png"
          alt="Card image cap"
        />
        <div class="card-body" id="tour-item">
          <h5 class="card-title">{{ tour.tour_name }}</h5>
          <p class="card-text">{{ tour.description }}</p>
          <button class="btn btn-primary" @click="viewTourInfo(tour.tour_id)">
            See more
          </button>
          <!-- <p class="card-text"> -->
          <!-- <small class="text-muted">Last booked 5 mins ago</small> -->
          <!-- </p> -->
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import SettingsButton from "@/components/SettingsButton.vue";
import NavBar from "@/components/NavBar.vue";
import Logo from "@/components/Logo.vue";
import DefaultFooter from "@/components/DefaultFooter.vue"
// import firebase from "firebase";
import { db } from "../main.js";

export default {
  name: "ListingsBeach",

  components: { SettingsButton, NavBar, Logo, DefaultFooter},

  data() {
    return {
      tours: [],
    };
  },

  mounted() {
    db.collection("listings")
      .where("tour_type", "==", "Beach")
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          const data = doc.data();
          let tour = {
            email: data.email,
            tour_name: data.tour_name,
            description: data.description,
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
        name: 'TourInfo',
        params: {
          tour_id: tour_id
        }
      })
    },
  },
};
</script>

<style scoped>

body{
  width:100%;
}

.grid {
  size: 50%;
  position: absolute;
  top: 500px;
  right: 130px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</style>