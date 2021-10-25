<template>
    <table id="listings">
        <tr v-for="listing in listings" :key="listing"> {{listing}} </tr>
        </table>
</template>

<script>

let listings = ["listing1" , "listing2","listing3","listings4"]

export default {
    name: "UserListings",
    data(){
        return{
            listings 
        }
    }

}
</script>


<style scoped>
#listings{
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 255px;
  left: 664px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  gap:400px
}
</style>