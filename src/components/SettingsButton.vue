<template>
    <div class= "dropdown">
          <button class="settingsBtn"></button>
            <div class="dropdown-content">
                <a href="#">Account</a> <br>
                <a href="#">Help</a> <br>
                <a href="#">Logout</a>
              </div>
          </div>

    <div class="settingsIcon"></div>
</template>

<style scoped>

.settingsBtn{
    border:none;
    width: 40px;
    height: 48px;
    background: rgba(63,163,184,1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 175px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  padding: 10px;
  font-family: Ubuntu;
  right:0;
  text-align: right;
}
.dropdown {
  position: absolute;
  top:46px;
  left: 1315px;
  display: inline-block;
}
.dropdown-content a {
  color: black;
  text-decoration: none;
  display: block;
}
.dropdown-content a:hover {
  background-color: #ddd;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown:hover .settingsBtn {
  background-color: rgba(0,0,0,0.3);
}
.settingsIcon {
  width: 17px;
  height: 17px;
  background: url("~@/images/v225_116.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 61px;
  left: 1325px;
  overflow: hidden;
}
</style>