<template>
    <input class="searchbox">
    <div class="searchicon"></div>
</template>

<script>
export default ({
    name : "SearchBar"
})
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
</style>