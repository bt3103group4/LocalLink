<template>
    <NavBar/>
    <Logo/>
    <SettingsButton/>
    <body>
        
    </body>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Logo from '@/components/Logo.vue'
import SettingsButton from '@/components/SettingsButton.vue'

export default ({
    name: "TipsCovid",
    components: {NavBar,Logo,SettingsButton}
})
</script>

<style scoped>
body{
    width:100%;
}
</style>
