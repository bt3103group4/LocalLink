<template>
  <ListingsNature @fetchInfo="fetchInfo($event)"></ListingsNature>
  <span>Description: {{ description }}</span>
  <span>Start Date of Tour: {{ start_date }}</span>
  <span>End Date of Tour: {{ end_date }}</span>
  <span>Transport: {{ transport }}</span>
  <span>Experience: {{ experience }}</span>
  <span>Cost: {{ cost }}</span>
  <span>Tour Name: {{ tour_name }}</span>
  <span>Tour Type: {{ tour_type }}</span>
  <span>Tour Guide's Email:{{ email }}</span>
</template>

<script>
import { db } from "../main.js";
import ListingsNature from "@/views/ListingsNature.vue";

export default {
  name: "TourInfo",
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
      email: "",
    }
  },
  components: { ListingsNature },
  methods: {
    fetchInfo(tour_id) {
      // console.log("running Load Info", tour_id);
      db.collection("listings")
        .doc(tour_id)
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
          } else {
            console.log("no such document");
          }
        });
    },
  },
};
</script>

<style>
</style>