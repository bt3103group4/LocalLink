<template>
    <Layout/>
    <h1>Edit Tour Guide Profile here</h1>
    <button @click="saveEdits()"> Save </button>
</template>

<script>
import Layout from '@/components/Layout.vue'

export default {
    name: "EditTourGuideProfile",
    components: {Layout},
    methods: {
        saveEdits() {
            //TODO: save new edits to firebase
        }
    }
}
</script>

<style>

</style>