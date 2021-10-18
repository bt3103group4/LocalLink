<template>
    <div class="profilePicture"></div>
        <div id="uploadImage">
            <form action="/action_page.php">
                <label for="img">Select image:</label><br><br>
                <input type="file" id="img" name="img" accept="image/*"><br><br>
            </form>
        </div>
        
    <span class="username">@username</span>
    <div class="detailsbox">
        </div>

        <div class="details">
            <h3 class="about">About</h3> <hr>
            <h4>Name </h4>
            <h4>Languages</h4>
            <h4>Biography</h4>
        </div>
</template>

<script>
export default{
    name : "UserProfile"
}
</script>

<style scoped>

.profilePicture {
  width: 322px;
  height: 322px;
  background: rgba(255,251,251,1);
  opacity: 1;
  position: absolute;
  top: 170px;
  left: 147px;
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.details {
  width: 400px;
  height: 289px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 580px;
  left: 105px;
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 20px;
  opacity: 1;
  text-align: left;
  
}
.detailsbox {
  width: 442px;
  height: 289px;
  background: rgba(255,251,251,1);
  opacity: 1;
  position: absolute;
  top: 574px;
  left: 87px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.username {
  width: 391px;
  color: rgba(95,94,94,1);
  position: absolute;
  top: 511px;
  left: 105px;
  font-family: Roboto;
  font-weight: Regular;
  font-size: 35px;
  opacity: 1;
  text-align: center;
}
</style>