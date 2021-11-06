
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
        <input class="login-submit" type="submit" value="Login as Tourist">
        <span class="login-footer-text"> Don't have an account yet? <router-link class="nav-link" to="/registertourist">Register as a Tourist</router-link></span>
        <span class="login-footer-text"> Want to take earn money as a Tour Guide? <router-link class="nav-link" to="/registertourguide">Register as a Tour Guide.</router-link></span>
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
        // const navigator = this;
        const router = useRouter()
        // const route = useRoute()

        const Login = function() {
            firebase
                .auth()
                .signInWithEmailAndPassword(email.value, password.value)
                .then(data => console.log(data))
                .then(() => router.push('/touristprofile')) 
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

.login-footer-text{
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
  box-sizing: border-box ;
  border-radius: 50px;
  color:white;
  background-color: black
}

.login{
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