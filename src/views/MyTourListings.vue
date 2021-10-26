<template>
  <button @click="showTourForm = true">Create a new tour!</button>
  <div v-if="showTourForm">
    <input placeholder="Tour Name" />
    <input placeholder="Duration" />
    <input placeholder="Cost" />
    <button @click="showTourForm = false">Save</button>
  </div>
</template>

<script>
export default {
    name: "MyTourListings",
    data() {
        return {
            showTourForm: false,
        }
    }
}
</script>

<style>
</style>