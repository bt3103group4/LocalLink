<template>
    <NavBar/>
    <body>
    <Logo/>
    <SettingsButton/>
    <EditProfile/>
</body>
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
body{
    width:100%;
}
</style>
