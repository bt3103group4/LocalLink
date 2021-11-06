<template>
  <div class="register">
    <div class="logo-and-title">
    <FormLogo/>
      <div class="centered-container">
        <h1 class="align-left">
          Join to unlock the<br />
          best of<span class="text-blue"> Local Link</span>
        </h1>
      </div>
    </div>
    <form @submit="onFormSubmit" class="centered-container">
      <div class="register-input-container">
        <span class="input-desc">First Name</span>
        <input
          class="register-text-input"
          type="text"
          placeholder="First Name"
          v-model="user.firstname"
          required
        />
      </div>

      <div class="register-input-container">
        <span class="input-desc">Last Name</span>
        <input
          class="register-text-input"
          type="text"
          placeholder="Last Name"
          v-model="user.lastname"
          required
        />
      </div>

      <div class="register-input-container">
        <span class="input-desc">User Name</span>
        <input
          class="register-text-input"
          type="text"
          placeholder="Enter a unique user name"
          v-model="user.username"
          required
        />
      </div>

      <div class="register-input-container">
        <span class="input-desc">Email</span>
        <input
          class="register-text-input"
          type="text"
          placeholder="Enter your email address"
          v-model="user.email"
          required
        />
      </div>

      <div class="register-input-container">
        <span class="input-desc">Password</span>
        <input
          class="register-text-input"
          type="password"
          placeholder="Enter your password"
          v-model="user.password"
          required
        />
        <br />
      </div>

      <input class="register-submit" type="submit" value="Join as Tourist" />
      <p>
        Already have an account? <router-link class="nav-link" to="/logintourist">Login instead</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
import { ref } from "vue";
import { db } from "../main.js";
import FormLogo from '@/components/FormLogo.vue'

export default {
  components: { FormLogo },
  setup() {
    const firstname = ref("");
    const lastname = ref("");
    const username = ref("");
    const email = ref("");
    const password = ref("");
    // const user = ref("")

    const Register = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((user) => {
          alert(user);
        })
        .catch((err) => alert(err.message));
    };
    return {
      Register,
      firstname,
      lastname,
      username,
      email,
      password,
    };
  },
  data() {
    return {
      user: {
    
      },
    };
  },
  methods: {
    onFormSubmit(event) {
      event.preventDefault();
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
          db.collection("users").doc(this.user.email)
            .set(this.user)
            .then(() => {
              alert("User successfully created!");
              console.log(this.user);
              console.log(this.Register);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((err) => alert(err.message));
    },
  },
};
</script>

<style scoped>

.nav-link {
  color: #40a3b9;
}

.nav-link:hover {
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

.register-text-input {
  width: 100%;
  padding: 12px 20px;
  margin-bottom: 8px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid black;
}

.register-submit {
  width: 50%;
  padding: 12px 20px;
  margin-bottom: 8px;
  box-sizing: border-box;
  border-radius: 50px;
  color: white;
  background-color: black;
}

.register {
  width: 100vw;
  padding: 20px 0px;
}

@media only screen and (min-width: 728px) {
  .register {
    width: 30vw;
    border: 2px solid black;
    border-radius: 40px;
    margin-top: 60px;
  }

  .register-input-container {
    width: 60% !important;
  }
}

.text-blue {
  color: #40a3b9;
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

.register-input-container {
  width: 80%;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
