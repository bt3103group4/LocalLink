<template>
    <NavBar/>
    <Logo/>
    <SettingsButton/>
    <h1>Leave Reviews here</h1>
</template>

<script>
import SettingsButton from '@/components/SettingsButton.vue'
import NavBar from '@/components/NavBar.vue'
import Logo from '@/components/Logo.vue'

export default {
    name: "Review",
    components: { SettingsButton,Logo,NavBar},
}
</script>

<style>

</style>