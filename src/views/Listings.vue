<template>
  <div style="text-align: center" v-if="user">
    <NavBar />

    <h3>This is the all listings page.</h3>
  </div>
</template>

<script>
// import firebase from '@/firebase.js'
// import ProfitDisplay from "@/components/ListingTable.vue";
import NavBar from "@/components/NavBar.vue";
// import firebase from '@/firebase.js'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: "Listings",

  components: {
    NavBar,
  },

  data() {
    return {
      user: false,
    };
  },

  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
      }
    });
  },
};
</script>