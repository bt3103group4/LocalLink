<template>
  <!-- <NavBar /> -->
  <Logo />
  <!-- <DefaultFooter /> -->
  <div class="page-container">
    <div class="not-found-container">
        <div class="error-404">403</div>
        <div class="error-message">
        <span class="oops-message"> OOPS! </span>
        <span class="actual-message"> You don't have access to be here </span>
        </div>
        <button class="error-button" @click="landing()">Return to Home</button>
    </div>
  </div>
</template>

<script>
// import NavBar from "@/components/NavBar.vue";
import Logo from "@/components/Logo.vue";
// import DefaultFooter from "@/components/DefaultFooter.vue";
import firebase from "firebase";
import { db } from "../main.js";


export default {
  components: { Logo },

  methods: {
    landing() {
      const self = this;
      const auth = firebase.auth();
      const user = auth.currentUser;

      if (!user) {
          self.$router.push("/");
      } else {
        let userEmail = auth.currentUser.email;
        self.email = userEmail
        if (userEmail) {
          db.collection("users").doc(String(userEmail))
          .get()
          .then(doc => {
            if (doc.exists){
              const data = doc.data()
              
              if (data["type"] == "tourist") {
                self.$router.push("/touristProfile");
              } else {
                  self.$router.push("/tourGuideProfile");
              }
            } else {
              console.log("no such document")
            }
          })
        }
      }
    },
  },
};
</script>

<style scoped>

.page-container {
    display: flex;
    height: 100%;
    align-items: center;
}

.error-404 {
  font-family: Ubuntu;
  font-size: 300px;
  /* display: flex; */
  color: #337e8f;
  margin: -60px;
}

.error-message {
  flex-direction: column;
  align-items: center;
  display: flex;
}

.oops-message {
  font-size: 70px;
  margin-bottom: -25px;
}

.actual-message {
  font-size: 50px;
}

.error-button {
  width: 50%;
  padding: 12px 20px;
  margin: 25px 0px;
  box-sizing: border-box;
  border-radius: 50px;
  color: white;
  background-color: #337e8f;
}

.not-found-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
