<template>
  <div class="landing-container">
    <div class="landing-navbar-container">
    </div>
    <div class="landing-content-container">
      <button class="landing-button"><router-link to="/logintourist">Tourist</router-link></button>
      <button class="landing-button"><router-link to="/logintourguide" >TourGuide</router-link></button>
    </div>
    
  </div>
</template>

<script>
// import FormLogo from '@/components/FormLogo.vue'
export default {
    // components: { FormLogo },
}
</script>


<style scoped>

:root {
  --landing-color-gray-500: #595959;
  --landing-color-gray-700: #999999;
  --landing-color-gray-900: #d9d9d9;
  --landing-color-danger-300: #a22020;
  --landing-color-danger-500: #bf2626;
  --landing-color-danger-700: #e14747;
  --landing-color-gray-black: #000000;
  --landing-color-gray-white: #ffffff;
  --landing-space-space-unit: 8px;
  --landing-color-primary-100: #3f68b5ff;
  --landing-color-primary-300: #0074f0;
  --landing-color-primary-500: #14a9ff;
  --landing-color-primary-700: #85dcff;
  --landing-color-success-300: #199033;
  --landing-color-success-500: #32a94c;
  --landing-color-success-700: #4cc366;
  --landing-radius-radius-round: 50%;
  --landing-size-size-maxcontent: 1414px;
  --landing-space-space-halfunit: 4px;
  --landing-space-space-tenunits: 80px;
  --landing-radius-radius-radius2: 2px;
  --landing-radius-radius-radius4: 4px;
  --landing-radius-radius-radius8: 8px;
  --landing-space-space-fiveunits: 40px;
  --landing-space-space-fourunits: 32px;
  --landing-radius-radius-radius24: 24px;
  --landing-space-space-doubleunit: 16px;
  --landing-space-space-tripleunit: 24px;
}

.landing-container {
  width: 100%;
  height: auto;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}

.landing-navbar-container {
  top: 0;
  width: 100%;
  display: flex;
  z-index: 100;
  position: sticky;
  box-shadow: 5px 5px 10px 0px #b9b9b9;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
}

.landing-content-container {
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxcontent);
  margin-top: var(--dl-space-space-fiveunits);
  align-items: center;
  padding-top: var(--dl-space-space-tenunits);
  padding-left: var(--dl-space-space-tripleunit);
  margin-bottom: var(--dl-space-space-fiveunits);
  padding-right: var(--dl-space-space-tripleunit);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-tenunits);
  justify-content: center;
}

</style>