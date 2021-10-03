<template>
<Layout/>
  <h1>Tour Guide Profile here</h1>
   <button v-if="isUserAccount"  @click="$router.push('/editTourGuideProfile')"> Edit Profile </button>
</template>
<script>
import Layout from '@/components/Layout.vue'

export default {
    name: "TouristProfile",
    components: { Layout },
    methods: {
        getTourGuideProfile() {
            //TODO: Pull data from database
        },
        isUserAccount() {
            //TODO: Check this is users account if they want to edit info
        }
    }
}
</script>

<style>

</style>