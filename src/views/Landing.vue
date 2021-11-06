<template>
  <div class="landing-container">
    <div class="landing-navbar-container">
      <div class="landing-navbar-container">
        <div class="landing-navbar">
          <span class="logo"></span>
          <div class="landing-left-side">
            <div class="landing-links-container">
              <a href="#about" class="anchor landing-link"
                >About Us</a
              >
              <a href="#values" class="anchor landing-link"
                >Our Values</a
              >
              <a href="#team" class="anchor landing-link">Meet the team</a>
              <a href="#contact" class="anchor landing-link landing-link-last"
                >Contact Us</a
              >
            </div>
          </div>
          <div class="landing-right-side">
            <button class="anchor landing-cta-btn"><router-link to="/logintourist"> Login as Tourist</router-link></button>
            <button class="anchor landing-cta-btn"><router-link to="/logintourguide" > Login as TourGuide</router-link></button>
          </div>
        </div>
      </div>
    </div>
    <div class="landing-content-container">
    </div>
    
  </div>
</template>

<script>
export default {
}
</script>


<style scoped>
* {
  --landing-color-gray-500: #595959;
  --landing-color-gray-700: #999999;
  --landing-color-gray-900: #d9d9d9;
  --landing-color-danger-300: #a22020;
  --landing-color-danger-500: #bf2626;
  --landing-color-danger-700: #e14747;
  --landing-color-gray-black: #000000;
  --landing-color-gray-white: #ffffff;
  --landing-space-space-unit: 8px;
  --landing-color-theme-blue: #40a3b9;
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

.logo {
  width: 100px;
  height: 100px;
  background: url("~@/assets/logo.png");
  box-shadow: 1px 4px 5px 0px #b9b9b9;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  overflow: hidden;
}

.anchor {
  font-size: 18px;
  font-style: normal;
  font-family: Raleway;
  font-weight: 700;
  line-height: 1.55;
  text-transform: capitalize;
  text-decoration: none;
}

.landing-link {
  text-decoration: underline;
}

.landing-cta-btn {
  color: var(--landing-color-gray-white);
  padding-top: var(--landing-space-space-unit);
  padding-left: var(--landing-space-space-fiveunits);
  margin-left: var(--landing-space-space-fiveunits);
  border-radius: var(--landing-radius-radius-radius24);
  padding-right: var(--landing-space-space-fiveunits);
  padding-bottom: var(--landing-space-space-unit);
  background-color: var(--landing-color-theme-blue);
  box-shadow: 1px 0.5px 5px 0px #b9b9b9;
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
  box-shadow: 1px 1px 5px 0px #b9b9b9;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
}

.landing-navbar {
  width: 100%;
  display: flex;
  max-width: var(--landing-size-size-maxcontent);
  align-items: center;
  padding-top: var(--landing-space-space-doubleunit);
  padding-left: var(--landing-space-space-tripleunit);
  padding-right: var(--landing-space-space-tripleunit);
  flex-direction: row;
  padding-bottom: var(--landing-space-space-doubleunit);
  justify-content: space-between;
}

.landing-left-side {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  padding-left: 140px;
}

.landing-burger-menu {
  display: none;
  align-items: flex-start;
  flex-direction: column;
}

.landing-links-container {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}

.landing-link {
  margin-right: var(--landing-space-space-tripleunit);
  text-decoration: none;
}

.landing-link-last {
  text-decoration: none;
}

.landing-content-container {
  width: 100%;
  display: flex;
  max-width: var(--landing-size-size-maxcontent);
  margin-top: var(--landing-space-space-fiveunits);
  align-items: center;
  padding-top: var(--landing-space-space-tenunits);
  padding-left: var(--landing-space-space-tripleunit);
  margin-bottom: var(--landing-space-space-fiveunits);
  padding-right: var(--landing-space-space-tripleunit);
  flex-direction: row;
  padding-bottom: var(--landing-space-space-tenunits);
  justify-content: center;
}

</style>