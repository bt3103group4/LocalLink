<template>
<h1> This is the sign up page </h1>
  <form>
    <title for="name">Username</title>
    <input id="name" type="string" placeholder="username">
    <title for="password">Pass</title>
    <input id="password" type="password" placeholder="password">
    <input id="confirm_pass" type="password" placeholder="password">
    <input id="confirm_pass" type="password" placeholder="password">
    <input id="email" type="email" placeholder="email">
    <input id="email" type="email" placeholder="email">
    <button type="submit">Submit</button>
</form>

</template>

<script>
export default {
    name: "SignUp"
}
</script>

<style>

</style>