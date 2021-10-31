
<template>

<div class="landing-page">
    <div class="centered-container">
      <h1>Local Link</h1>
      <span class = landing-logo></span>
    </div>
    <div class ="two-col">
    <button class="landing-button"><router-link to="/logintourist">Tourist</router-link></button>
    <button class="landing-button"><router-link to="/logintourguide">TourGuide</router-link></button>
    </div>
</div>
</template>

<style scoped>
.landing-logo{
  background: url("~@/assets/logo.png");
}

.two-col{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-right: 10px;

}

.landing-button{
  background-color: rgb(136, 195, 218); /* Green */
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 5px;
  font-size: 16px;
}

</style>







