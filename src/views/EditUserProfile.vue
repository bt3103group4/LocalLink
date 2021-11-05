<template>
    <NavBar/>
    <body>
    <Logo/>
    <SettingsButton/>
    <EditProfile/>
    <Back/>
</body>
</template>

<script>
import EditProfile from '@/components/EditProfile.vue'
import SettingsButton from '@/components/SettingsButton.vue'
import NavBar from '@/components/NavBar.vue'
import Back from '@/components/Back.vue'
import Logo from '@/components/Logo.vue'

export default {
    name: "EditUserProfile",
    components: {SettingsButton,NavBar, EditProfile, Logo,Back},

}
</script>

<style scoped>
body{
    width:100%;
}
</style>
