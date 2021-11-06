<template>
  <div class="landing-container">
    <div class="landing-navbar-container">
        <div class="landing-navbar">
          <span class="logo"></span>
          <div class="landing-left-side">
            <div class="landing-links-container">
              <a href="#about" class="anchor landing-link"
                >About Us</a
              >
            <a href="#features" class="anchor landing-link"
              >Features</a
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
        </div>
      </div>
    <div id="about" class="landing-hero">
      <div class="landing-content-container">
        <div class="landing-hero-text">
          <h1 class="section-heading landing-heading">
            Find your <span class="grey-title"> LocalLink </span> today!
          </h1>
          <span class="section-text landing-text">
            LocalLink is the best way for tourists to connect with their travel destination and its people. 
            It is also the perfect match for locals who wish to make hosting and guiding tourists around their
            locality a reality.
          </span>
          <div class="landing-btn-container">
            <button class="anchor landing-cta-btn"><router-link to="/logintourist"> Login as Tourist</router-link></button>
            <button class="anchor landing-cta-btn"><router-link to="/logintourguide" > Login as Tour Guide</router-link></button>
          </div>
        </div>
      </div>
    </div>
        <div id="features" class="landing-features">
      <div class="landing-heading-container">
        <h2 class="section-heading landing-features-text">
          Which are the greatest things about it?
        </h2>
      </div>
      <div class="landing-cards-container">
        <div class="landing-features-card">
          <div class="landing-icon-container">
            <svg viewBox="0 0 1024 1024" class="landing-icon">
              <path
                d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"
              ></path>
              <path
                d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"
              ></path>
            </svg>
          </div>
          <div class="landing-text-container">
            <span class="card-heading landing-heading">Feature One</span>
            <span class="card-text landing-feature-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
              nisi. Nulla quis sem at nibh elementum imperdiet.
            </span>
          </div>
        </div>
        <div class="landing-features-card">
          <div class="landing-icon-container">
            <svg viewBox="0 0 1024 1024" class="landing-icon">
              <path
                d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"
              ></path>
              <path
                d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"
              ></path>
            </svg>
          </div>
          <div class="landing-text-container">
            <span class="card-heading landing-heading">Feature Two</span>
            <span class="card-text landing-feature-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
              nisi. Nulla quis sem at nibh elementum imperdiet.
            </span>
          </div>
        </div>
        <div class="landing-features-card">
          <div class="landing-icon-container">
            <svg viewBox="0 0 1024 1024" class="landing-icon">
              <path
                d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"
              ></path>
              <path
                d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"
              ></path>
            </svg>
          </div>
          <div class="landing-text-container">
            <span class="card-heading landing-heading">Feature Three</span>
            <span class="card-text landing-feature-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
              nisi. Nulla quis sem at nibh elementum imperdiet.
            </span>
          </div>
        </div>
        <div class="landing-features-card">
          <div class="landing-icon-container">
            <svg viewBox="0 0 1024 1024" class="landing-icon">
              <path
                d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"
              ></path>
              <path
                d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"
              ></path>
            </svg>
          </div>
          <div class="landing-text-container">
            <span class="card-heading landing-heading">Feature Four</span>
            <span class="card-text landing-feature-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
              nisi. Nulla quis sem at nibh elementum imperdiet.
            </span>
          </div>
        </div>
        <div class="landing-features-card">
          <div class="landing-icon-container">
            <svg viewBox="0 0 1024 1024" class="landing-icon">
              <path
                d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"
              ></path>
              <path
                d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"
              ></path>
            </svg>
          </div>
          <div class="landing-text-container">
            <span class="card-heading landing-heading">Feature Five</span>
            <span class="card-text landing-feature-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
              nisi. Nulla quis sem at nibh elementum imperdiet.
            </span>
          </div>
        </div>
        <div class="landing-features-card">
          <div class="landing-icon-container">
            <svg viewBox="0 0 1024 1024" class="landing-icon">
              <path
                d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"
              ></path>
              <path
                d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"
              ></path>
            </svg>
          </div>
          <div class="landing-text-container">
            <span class="card-heading landing-heading">Feature Six</span>
            <span class="card-text landing-feature-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
              nisi. Nulla quis sem at nibh elementum imperdiet.
            </span>
          </div>
        </div>
      </div>
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


.section-heading {
  font-size: 48px;
  font-family: Montserrat;
  font-weight: 700;
  line-height: 1.22;
  text-transform: none;
  text-decoration: none;
}

.section-text {
  font-size: 18px;
  font-family: Raleway;
  font-weight: 400;
  line-height: 1.55;
  text-transform: none;
  text-decoration: none;
}

.landing-hero {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--landing-space-space-tenunits);
  margin-bottom: var(--landing-space-space-fiveunits);
  flex-direction: row;
  padding-bottom: var(--landing-space-space-tenunits);
  justify-content: center;
  color: white;
  background: url("~@/assets/landing-hero-banner.jpg") left center;
  background-size: cover;
}

.landing-hero-text {
  width: 65%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.landing-heading {
  text-align: center;
  margin-bottom: var(--landing-space-space-fiveunits);
}

.landing-text {
  color: grey;
  text-align: center;
  margin-bottom: var(--landing-space-space-fiveunits);
}

/* .landing-button {
  color: var(--landing-color-gray-black);
  padding: 5px 10px;
  border-color: var(--landing-color-gray-black);
  border-width: 1px;
  border-radius: 4px;
  background-color: var(--landing-color-gray-white);
}

.landing-cta-btn1 {
  color: var(--landing-color-gray-white);
  text-align: center;
  padding-top: var(--landing-space-space-doubleunit);
  padding-left: var(--landing-space-space-tenunits);
  border-radius: 30px;
  padding-right: var(--landing-space-space-tenunits);
  padding-bottom: var(--landing-space-space-doubleunit);
  background-color: var(--landing-color-gray-black);
} */

.landing-btn-container {
  display: flex;
  flex-direction: row;
}

.grey-title {
  color: rgb(49, 59, 69);
  text-shadow: 0px 1px 30px white;
}

</style>