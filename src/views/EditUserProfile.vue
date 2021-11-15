<template>
    <NavBar/>
    <body>
    <Logo/>
    <EditProfile/>
    <Back/>
</body>
</template>

<script>
import EditProfile from '@/components/EditProfile.vue'
import NavBar from '@/components/NavBar.vue'
import Back from '@/components/Back.vue'
import Logo from '@/components/Logo.vue'

export default {
    name: "EditUserProfile",
    components: {NavBar, EditProfile, Logo,Back},

}
</script>

<style scoped>
body{
    width:100%;
}
</style>
