<template>
    <NavBar/>
    <Logo/>
    <SettingsButton/>
    <h1>Edit Tour Guide Profile here</h1>
    <button @click="saveEdits()"> Save </button>
</template>

<script>
import SettingsButton from '@/components/SettingsButton.vue'
import NavBar from '@/components/NavBar.vue'
import Logo from '@/components/Logo.vue'

export default {
    name: "EditTourGuideProfile",
    components: {SettingsButton,NavBar,Logo},
    methods: {
        saveEdits() {
            //TODO: save new edits to firebase
        }
    }
}
</script>

<style>

</style>