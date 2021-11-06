<template>
    <span class="form-logo"></span>
</template>

<script>
export default {
    name: "FormLogo"
}
</script>

<style scoped>
.form-logo {
  width: 80px;
  height: 80px;
  background: url("~@/assets/logo.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  overflow: hidden;
}
</style>