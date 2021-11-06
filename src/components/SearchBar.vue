<template>
  <div class="uicards" style="margin: 10px">
    <div class="ui icon input" style="width: 100%">
      <input
        class="searchbox"
        @input= "onClickShow"
        type="text"
        placeholder="Search Tours"
        v-model="searchQuery"
      />
      <div class="searchicon"></div>
    </div>
    <div class = "wrapper">
    <div
      class="card-ui-fluid"
      v-for="listing in searchedListings"
      :key="listing.id"
      style="margin: 0"
      data-live-search="false"
    >
      <div class="content">
        <img class="right floated mini ui image" :src="listing.imageURL" />
        <p>{{ listing.tour_name }}</p><br><br>
        <p>{{ listing.email }} | {{ listing.description }}</p>
      </div>
    </div>
    </div>
  </div>
</template>

<!-- TO DO 
  UI not working properly.
  1. the ui cards are not clickable yet, it wont route to the tour page for those u click on
  2. try to hide the ui cards before clicking the search bar
-->

<script>
import firebase from "firebase";
import { computed, onBeforeMount, reactive, ref } from "vue";

export default {
  name: "SearchBar",

  methods:{
      onClickShow() {
      var popup = document.getElementsByClassName("wrapper");
      console.log(popup)
      popup.classList.toggle("show");
}
  }
    ,

  setup() {
    const listings = reactive([]);
    const searchQuery = ref("");
    const searchedListings = computed(() => {
      return listings.filter((listing) => {
        return (
          listing.tour_name
            .toLowerCase()
            .indexOf(searchQuery.value.toLowerCase()) != -1
        );
      });
    });

    onBeforeMount(async () => {
      try {
        const listingsSnap = await firebase
          .firestore()
          .collection("listings")
          .get();

        listingsSnap.forEach((doc) => {
          let listing = doc.data();
          listing.id = doc.id;
          listings.push(listing);
        });
      } catch (e) {
        console.log("Error Loading Listings");
      }
    });

    return { searchedListings, searchQuery };
  },
};
</script>


<style scoped>
.searchbox {
  width: 416px;
  height: 50px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 42px;
  left: 156px;
  overflow: hidden;
  padding-left: 50px;
  border-radius: 15px;
}
.searchicon {
  width: 27px;
  height: 27px;
  background: url("~@/images/v216_71.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 0.5;
  position: absolute;
  top: 55px;
  left: 170px;
  overflow: hidden;
}
.wrapper{
  visibility: hidden;
  border-left:solid red 3px;
  border-right:solid red 3px;
  border-bottom:solid red 3px;
  width: 410px;
  position:relative;
  height: 50px;
  top: 80px;
  left: 150px;
  z-index:10;
}
.wrapper.show{
  visibility: visible;
  position:relative;
  height: 50px;
  top: 80px;
  z-index:10;
}
</style>