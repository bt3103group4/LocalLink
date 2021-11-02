<template>
    <NavBar/>
    <body>

    <Logo/>
    <SettingsButton/>
    <EditProfile/>

    <button class="backNav" @click="$router.push('/TouristProfile')"></button>
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
.backNav{
    position: absolute;
    top: 90px;
    left:30px;
    background: url("~@/images/backicon.png");
    width: 45px;
    height:45px;
    background-size: 100% 100%;
    border:none;
}
</style>
