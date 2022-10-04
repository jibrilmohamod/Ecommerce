<template>
 <div>
  <TheNav />

  <router-view></router-view>
 </div>
</template>

<script setup>
 import TheNav from "./components/TheNav.vue"
</script>

<style>
 * {
  font-family: "Kumbh Sans", sans-serif;
 }
</style>
