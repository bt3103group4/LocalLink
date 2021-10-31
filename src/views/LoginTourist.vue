
<template>
<div class="login">
  <div class="logo-and-title">
      <FormLogo/>
      <div class="centered-container">
        <h1>Welcome Back Tourists!</h1>
      </div>
    </div>
    <form @submit.prevent="Login" class="centered-container">
        <div class="login-input-container">
          <span class="input-desc">Email</span>
          <input class="login-text-input" type="text" placeholder="Enter your email address" v-model="email" />
        </div>
        <div class="login-input-container">
          <span class="input-desc">Password</span>
          <input class="login-text-input" type="password" placeholder="Enter your password" v-model="password" />
        <br>
        </div>
        <input class="login-submit" type="submit" value="Login">
        <p>Don't have an account yet? <router-link to="/registertourist">Register Here</router-link></p>
    </form>
</div>
</template>
<script>
import {ref} from 'vue';
import firebase from 'firebase';
import FormLogo from '@/components/FormLogo.vue'
import { useRouter } from 'vue-router'

export default {
  components: { FormLogo },
    setup: function() {
        const email = ref("");
        const password = ref("");

        const Login = () => {
            firebase
                .auth()
                .signInWithEmailAndPassword(email.value, password.value)
                .then(data => console.log(data))
                .catch(err => alert(err.message));
        }
        return {
            Login,
            email,
            password
        }
    }
   
        

}
</script>


<style>

.login-text-input {
  width: 100%;
  padding: 12px 20px;
  margin-bottom: 8px;
  box-sizing: border-box;
  border-radius: HT 10px;
}

.login-submit {
  width: 50%;
  padding: 12px 20px;
  margin-bottom: 8px;
  box-sizing: border-box ;
  border-radius: 50px;
  color:white;
  background-color: black
}

.login{
  width: 100vw;
}

@media only screen and (min-width: 728px) {
  .login {
    width: 30vw;
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