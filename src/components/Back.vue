<template>
    <button class="backNav" @click="$router.push('/TouristProfile')"></button>
</template>

<script>
export default {
   name: "Back"
}
</script>
<style scoped>
.backNav{
    position: absolute;
    top: 90px;
    left:30px;
    background: url("~@/images/backicon.png");
    width: 45px;
    height:45px;
    background-size: 100% 100%;
    border:none;
}
.backNav:hover{
    cursor: pointer;
}
</style>
