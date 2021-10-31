<template>
<div class="login">
  <div class="logo-and-title">
      <FormLogo/>
    <div class="centered-container">
        <h1>Welcome Back Tour Guides!</h1>
    </div>
    </div>
</div>
</template>
import FormLogo from '@/components/FormLogo.vue'
    components: { FormLogo },
.logo-and-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

