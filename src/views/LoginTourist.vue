<template>
  <img class="background" src="@/images/bali-beach.jpg" />
  <div class="login">
    <div class="logo-and-title">
      <FormLogo />
      <div class="centered-container">
        <h1>Welcome Back Tourists!</h1>
      </div>
    </div>
    <form @submit.prevent="Login" class="centered-container">
      <div class="login-input-container">
        <span class="input-desc">Email</span>
        <input
          class="login-text-input"
          type="text"
          placeholder="Enter your email address"
          v-model="email"
        />
      </div>
      <div class="login-input-container">
        <span class="input-desc">Password</span>
        <input
          class="login-text-input"
          type="password"
          placeholder="Enter your password"
          v-model="password"
        />
        <br />
      </div>
      <input class="login-submit" type="submit" value="Login as Tourist" />
      <span class="login-footer-text">
        Don't have an account yet?
        <router-link class="router-link" to="/registertourist"
          >Register as a Tourist</router-link
        ></span
      >
      <span class="login-footer-text">
        Want to sign up as a Tour Guide?
        <router-link class="router-link" to="/registertourguide"
          >Register as a Tour Guide.</router-link
        ></span
      >
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import firebase from "firebase";
import FormLogo from "@/components/FormLogo.vue";
import { useRouter } from "vue-router";
import { getCurrentInstance } from "vue";
import { db } from "../main.js";

export default {
  components: { FormLogo },
  setup: function () {
    const email = ref("");
    const password = ref("");
    // const navigator = this;
    const router = useRouter();
    const store =
      getCurrentInstance().appContext.config.globalProperties.$store;
    // const route = useRoute()

    const Login = function () {
      db.collection("users")
        .doc(String(email.value))
        .get()
        .then((doc) => {
          if (doc.exists) {
            const data = doc.data();
            if (data["type"] != "tourist") {
              throw Error(
                `User ${email.value} is not a Tourist. Please log in as a Tour Guide.`
              );
            }
          } else {
            throw Error(
              `User ${email.value} does not exist. Please create an account.`
            );
          }
        })
        .then(() => {
          firebase
            .auth()
            .signInWithEmailAndPassword(email.value, password.value)
            .then((data) => console.log(data))
            .then(() => store.commit("setLoggedIn", "tourist"))
            .then(() => console.log(store.state))
            .then(() => router.push("/listingsnature"))
            .catch((err) => alert(err.message));
        })
        .catch((err) => alert(err.message));
    };
    return {
      Login,
      email,
      password,
    };
  },
};
</script>


<style scoped>
.background {
  object-fit: cover;
  opacity: 0.85;
  z-index: 1;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-size: contain;
}

.login {
  z-index: 5;
  position: absolute;
  background-color: white;
  top: 100px;
}

.router-link {
  color: #40a3b9;
}

.router-link:hover {
  color: #337e8f;
}

.logo-and-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.logo-and-title > * {
  margin: 8px;
}

.login-footer-text {
  font-size: 14px;
}

.login-text-input {
  width: 100%;
  padding: 12px 20px;
  margin-bottom: 8px;
  box-sizing: border-box;
  border-radius: 12px;
  border: 1px solid black;
}

.login-submit {
  width: 50%;
  padding: 12px 20px;
  margin-bottom: 12px;
  box-sizing: border-box;
  border-radius: 50px;
  color: white;
  background-color: black;
}
.login-submit:hover {
  cursor: pointer;
}
.login {
  width: 100vw;
  margin-top: 60px;
  padding: 20px 20px;
}

@media only screen and (min-width: 728px) {
  .login {
    width: 35vw;
    border: 2px solid black;
    border-radius: 40px;
  }

  .login-input-container {
    width: 100%;
  }
}

.align-left {
  text-align: left;
}

.centered-container {
  display: flex;
  flex-direction: column;
  /* justify-content:flex-start; */
  align-items: center;
}

.login-input-container {
  width: 80%;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>