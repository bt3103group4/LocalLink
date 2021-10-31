
<template>

<div class="landing-page">
    <div class="centered-container">
      <h1>Explore Local Link as a</h1>
      <span class = landing-logo></span>
    </div>
    <div class ="two-col">
    <button class="landing-button"><router-link to="/logintourist">Tourist</router-link></button>
    <button class="landing-button"><router-link to="/logintourguide" >TourGuide</router-link></button>
    </div>
    <div class="logo">
    <FormLogo/>
    </div>
</div>
</template>

<script>
import FormLogo from '@/components/FormLogo.vue'
export default {
    components: { FormLogo },
}
</script>


<style scoped>
.logo{
  display: flex;
}

/* body {
  background-color: rgb(153, 214, 223);
} */
.centered-container{
display: flex;
align-items: center;
justify-content: center;
}

.two-col{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-right: 10px;

}

.landing-button {
  appearance: none;
  background-color: #7394d3;
  opacity: 0.9;
  border: 2px solid white;
  border-radius: 15px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  will-change: transform;
}

.landing-button:disabled {
  pointer-events: none;
}

.landing-button:hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.landing-button:active {
  box-shadow: none;
  transform: translateY(0);
}

</style>








