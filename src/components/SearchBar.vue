<template>
  <div class="uicards" style="margin: 10px">
    <div class="ui icon input" style="width: 100%">
    </div>
    <div class="wrapper">
      <input
        class="searchbox"
        type="text"
        placeholder="Search Tours"
        v-model="searchQuery"
      />
      <div class="searchicon"></div>
    <div
      class="card-ui-fluid"
      v-for="listing in searchedListings"
      :key="listing.id"
      style="margin: 0"
      data-live-search="false"
    >
      <div class="content">
        <img class="right floated mini ui image" :src="listing.imageURL" />
        <button>{{ listing.tour_name }}</button><br><br>
      </div>
    </div>
  </div>
  </div>
</template>

<!-- TO DO 
  UI not working properly.
  1. the ui cards are not clickable yet, it wont route to the tour page for those u click on
-->

<script>
import firebase from "firebase";
import { computed, onBeforeMount, reactive, ref } from "vue";

export default {
  name: "SearchBar",

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
  position: relative;
  overflow: hidden;
  padding-left: 50px;
  border-radius: 15px;
}
.wrapper:hover{
  cursor: pointer;
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
  top: 10px;
  left:10px;
  overflow: hidden;
}
.card-ui-fluid{
  display:none;
  width: 410px;
  position:relative;
  height: 47px;
  top:5px;
  left:0px;
  z-index:10;
  border-top: 1px black;
}
.content{
  background-color: white;
  padding: 15px;
}
.wrapper{
  position:absolute;
  top: 12px;
  left: 156px;
  width: 416px;
  height: 50px;
}
.wrapper:hover .card-ui-fluid{
  display:block;
  cursor: pointer;
}
</style>