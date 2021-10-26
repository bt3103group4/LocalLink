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
    <title>Listings</title>
  </head>
  <body>
    <div class="container" style="display: flex; height: 100px">
      <div style="width: 10%">
        <Logo />
      </div>
      <div style="flex-grow: 1">
        <Layout />
      </div>
    </div>
    <br />
    <br />
    <div class="card text-center">
      <div class="card-header">
        <ul class="nav nav-pills card-header-pills">
          <li class="nav-item">
            <a class="nav-link active" href="#">Nature</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="$router.push('/listingsadv')"
              >Adventure</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="$router.push('/listingsbeach')"
              >Beach Clubs</a
            >
          </li>
        </ul>
      </div>
      <div class="card-body">
        <h2 class="card-title">Natural Wonders</h2>
        <p class="card-text">
          Forget not that the earth delights to feel your bare feet and the
          winds long to play with your hair.
        </p>
        <a href="#" class="btn btn-primary">Customize my trip now!</a>
      </div>
    </div>

    <div class="card-group">
      <div class="card">
        <img
          class="card-img-top"
          src="..\images\v225_106.png"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Crystal Bay</h5>
          <p class="card-text">description and pdf</p>
          <a href="#" class="btn btn-primary">Reserve</a>
          <p class="card-text">
            <small class="text-muted">Last booked 5 mins ago</small>
          </p>
        </div>
      </div>
      <div class="card">
        <img
          class="card-img-top"
          src="..\images\v225_106.png"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Crystal Bay</h5>
          <p class="card-text">description and pdf</p>
          <a href="#" class="btn btn-primary">Reserve</a>
          <p class="card-text">
            <small class="text-muted">Last booked 5 mins ago</small>
          </p>
        </div>
      </div>
      <div class="card">
        <img
          class="card-img-top"
          src="..\images\v225_106.png"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Crystal Bay</h5>
          <p class="card-text">description and pdf</p>
          <a href="#" class="btn btn-primary">Reserve</a>
          <p class="card-text">
            <small class="text-muted">Last booked 5 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
//import NavBar from "@/components/NavBar.vue";
import Logo from "@/components/Logo.vue";
import Layout from "@/components/Layout.vue";

export default {
  name: "Listings",

  components: { Layout, Logo },
};
</script>