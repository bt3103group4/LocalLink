<template>
  <router-view/>
</template>

<script>
import {onBeforeMount} from 'vue';
import {useRouter, useRoute} from 'vue-router';
import firebase from 'firebase';

export default {
  setup () {
    const router = useRouter();
    const route = useRoute();
  
    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if(!user) {
          router.replace('/');
        } else if (route.path == "/" || route.path == "/register") {
          router.replace('/TouristProfile');
        }
     
      })
  
    }
  )
}

}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100vh;
}

</style>