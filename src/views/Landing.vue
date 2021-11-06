<template>
  <div class="landing-container">
    <div class="landing-navbar-container">
    </div>
    <div class="landing-content-container">
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