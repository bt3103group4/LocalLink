<template>
    <Layout/>
    <h1>Edit Tourist Profile here</h1>
    <button @click="saveEdits()"> Save </button>
</template>

<script>
import Layout from '@/components/Layout.vue'

export default {
    name: "EditTouristProfile",
    components: { Layout },
    methods: {
        saveEdits() {
            //TODO: save new edits to firebase
        }
    }
}
</script>

<style>

</style>