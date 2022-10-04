<template>
 <div>
  <TheNav />
  
  <router-view></router-view>
 </div>
</template>

<script setup>
 import TheNav from "./components/TheNav.vue"
 import ProductCard from "./components/ProductCard.vue"
</script>

<style>
 * {
  font-family: "Kumbh Sans", sans-serif;
 }
</style>
