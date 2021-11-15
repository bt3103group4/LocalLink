<template>
    <button class="backNav" @click="$router.go(-1)"></button>
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
    left:25px;
    background: url("~@/images/back-button.png");
    width: 30px;
    height:30px;
    background-size: 100% 100%;
    border:none;
    z-index: 10;
    opacity: 50%;
}
.backNav:hover{
    cursor: pointer;
}
</style>
