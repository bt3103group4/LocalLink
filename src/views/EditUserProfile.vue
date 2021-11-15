<template>
    <NavBar/>
    <body>
    <Logo/>
    <EditProfile/>
    <Back/>
    <SettingsButton/>
</body>
</template>

<script>
import EditProfile from '@/components/EditProfile.vue'
import NavBar from '@/components/NavBar.vue'
import Back from '@/components/Back.vue'
import Logo from '@/components/Logo.vue'
import SettingsButton from '@/components/SettingsButton.vue'

export default {
    name: "EditUserProfile",
    components: {NavBar, EditProfile, Logo,Back, SettingsButton},

}
</script>

<style scoped>
body{
    width:100%;
}
</style>
