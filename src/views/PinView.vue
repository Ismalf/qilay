<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import InputOtp from 'primevue/inputotp'
import Button from 'primevue/button'
</script>

<template>
  <main>
    <InputOtp v-model="value" />

    <Button label="Login" @click="submit" />
  </main>
</template>
