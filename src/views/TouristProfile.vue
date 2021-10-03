<template>
<Layout/>
  <h1>Tourist Profile here</h1>
  <button v-if="isUserAccount" @click="$router.push('/editTouristProfile')"> Edit Profile </button>
</template>

<script>
import Layout from '@/components/Layout.vue'

export default {
    name: "TouristProfile",
    components: { Layout },
    methods: {
        getTouristProfile() {
            //TODO: Pull data from database
        },
        isUserAccount() {
            //TODO: check if users account if they want to edit
        }
    }
}
</script>

<style>

</style>