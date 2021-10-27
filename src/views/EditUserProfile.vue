<template>
    <Layout/>
    <Logo/>
    <EditProfile/>

    <button class="backNav" @click="$router.push('/TouristProfile')"> back (change btn to icon)</button>

</template>

<script>
import Layout from '@/components/Layout.vue'
import EditProfile from '@/components/EditProfile.vue'
import Logo from '@/components/Logo.vue'

export default {
    name: "EditUserProfile",
    components: {Layout, EditProfile, Logo},

}
</script>

<style scoped>
.backNav{
    position: absolute;
    top: 150px;
    left:20px;

}
</style>
