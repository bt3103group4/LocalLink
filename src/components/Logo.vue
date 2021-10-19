<template>
    <button class="logo" @click="homepage()"></button>
</template>

<script>
export default {
    name: "Logo",

    // data() {
    //     return {
    //         user: false,
    //     }
    // },

    // mounted() {
    //     const auth = getAuth();
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             this.user = user;
    //         }
    //     })
    // },

    methods: {
        homepage() {
            // have to check the name
            this.$router.push({name: 'Listing'}) 
        }
    }
}
</script>

<style>
.logo {
  width: 100px;
  height: 101px;
  background: url("~@/assets/logo.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 22px;
  left: 28px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  overflow: hidden;
}
</style>