<template>
<h1>Login Page</h1>
<form>
    <title for="name">Username</title>
    <input id="name" type="string" placeholder="username">
    <title for="password">Pass</title>
    <input id="password" type="password" placeholder="password">
    <button type="submit">Submit</button>
</form>
<router-link to="/signup"> New user? Sign Up here! </router-link>
</template>

<script>
export default {
    name: "Login"
}
</script>

<style>

</style>