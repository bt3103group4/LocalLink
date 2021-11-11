<template>
  <NavBar />
  <Logo />
  <SettingsButton />
  <h1>Search page here</h1>
  <input type="string" placeholder="Search" />
</template>

<script>
import SettingsButton from "@/components/SettingsButton.vue";
import NavBar from "@/components/NavBar.vue";
import Logo from "@/components/Logo.vue";

export default {
  name: "Search",
  components: { SettingsButton, Logo, NavBar },
};
</script>

<style>
</style>