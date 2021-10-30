<template>
    <NavBar/>
    <Logo/>
    <SettingsButton/>
    <EditProfile/>

    <button class="backNav" @click="$router.push('/TouristProfile')"> back (change btn to icon)</button>

</template>

<script>
import EditProfile from '@/components/EditProfile.vue'
import SettingsButton from '@/components/SettingsButton.vue'
import NavBar from '@/components/NavBar.vue'
import Logo from '@/components/Logo.vue'

export default {
    name: "EditUserProfile",
    components: {SettingsButton,NavBar, EditProfile, Logo},

}
</script>

<style scoped>
.backNav{
    position: absolute;
    top: 150px;
    left:20px;

}
</style>
