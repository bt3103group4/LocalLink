<template>
  <div class="register">
    <div class="logo-and-title">
      <FormLogo/>
      <div class="centered-container">
        <h1 class="align-left">
          Join to unlock the <br />
          best of <span class="text-blue">Local Link (TG)</span>
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
          v-model="tourguide.firstname"
          required
        />
      </div>

      <div class="register-input-container">
        <span class="input-desc">Last Name</span>
        <input
          class="register-text-input"
          type="text"
          placeholder="Last Name"
          v-model="tourguide.lastname"
          required
        />
      </div>

      <div class="register-input-container">
        <span class="input-desc">User Name</span>
        <input
          class="register-text-input"
          type="text"
          placeholder="Enter a unique user name"
          v-model="tourguide.username"
          required
        />
      </div>

      <div class="register-input-container">
        <span class="input-desc">Email</span>
        <input
          class="register-text-input"
          type="text"
          placeholder="Enter your email address"
          v-model="tourguide.email"
          required
        />
      </div>

      <div class="register-input-container">
        <span class="input-desc">Password</span>
        <input
          class="register-text-input"
          type="password"
          placeholder="Enter your password"
          v-model="tourguide.password"
          required
        />
        <br />
      </div>

      <input class="register-submit" type="submit" value="Join as Tour Guide" />
      <p>
        Already have an account? <router-link class="nav-link" to="/logintourguide">Login instead</router-link>
      </p>
    </form>
  </div>
  
</template>

<script>
import FormLogo from '@/components/FormLogo.vue'
import firebase from "firebase";
import { ref } from "vue";
import { db } from "../main.js";

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
      tourguide: {
    
      },
    };
  },
  methods: {
    onFormSubmit(event) {
      event.preventDefault();
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.tourguide.email, this.tourguide.password)
        .then(() => {
          db.collection("tourguides").doc(this.tourguide.email)
            .set(this.tourguide)
            .then(() => {
              alert("User successfully created!");
              console.log(this.tourguide);
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
  margin-top: 60px;
  padding: 20px 20px;
}

@media only screen and (min-width: 728px) {
  .register {
    width: 40vw;
    border: 2px solid black;
    border-radius: 40px;
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
