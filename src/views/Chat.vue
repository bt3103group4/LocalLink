<template>
    <NavBar/>
    <Logo/>
    <SettingsButton/>
    <h1> Chat goes here </h1>
</template>

<script>
import SettingsButton from '@/components/SettingsButton.vue'
import NavBar from '@/components/NavBar.vue'
import Logo from '@/components/Logo.vue'

export default {
    name: "Chat",
    components: { SettingsButton,NavBar,Logo },
}
</script>

<style
        SettingsButton>

</style>