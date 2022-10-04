<template>
 <div
  class="w-10/12 m-auto h-[10vh] border border-red-600 flex items-center justify-between"
 >
  <nav class="border h-full">
   <ul class="flex items-center h-full">
    <li class="mr-14">
     <router-link to="/"
      ><h1 class="text-4xl font-bold">sneakers</h1></router-link
     >
    </li>
    <li class="mr-14">
     <router-link to="/about"
      ><h2 class="text-gray-400 hover:text-black">Collections</h2></router-link
     >
    </li>
    <li class="mr-14">
     <router-link to="/about"
      ><h2 class="text-gray-400 hover:text-black">Men</h2></router-link
     >
    </li>
    <li class="mr-14">
     <router-link to="/about">
      <h2 class="h-full border border-green-500 text-gray-400 hover:text-black">
       Women
      </h2>
     </router-link>
    </li>
    <li class="mr-14">
     <router-link to="/about"
      ><h2 class="text-gray-400 hover:text-black">About</h2>
     </router-link>
    </li>
    <li class="mr-14">
     <router-link to="/about"
      ><h2 class="text-gray-400 hover:text-black">Contacts</h2>
     </router-link>
    </li>
   </ul>
  </nav>
  <div class="h-full flex">
   <!-- cart -->
   <nav class="h-full border">
    <ul class="flex items-center h-full">
     <li>
      <button @click="showCart">
       <Icon class="text-2xl" icon="clarity:shopping-cart-line" />
       <!-- cart Widget -->
       <CartWidget
        v-auto-animate
        class="absolute right-40 top-28"
        v-show="cart"
       />
      </button>
     </li>
     <!-- profile image -->
     <li class="ml-14">
      <router-link to=""
       ><img
        class="w-14 border h-14 rounded-full hover:border-orange-600 hover:border-2"
        src="../assets/images/image-avatar.png"
        alt=""
      /></router-link>
     </li>
    </ul>
   </nav>
  </div>
 </div>
</template>

<script setup>
 import { Icon } from "@iconify/vue"
 import { ref } from "vue"
 import CartWidget from "./cartWidget.vue"

 const cart = ref(false)
 const showCart = () => {
  cart.value = !cart.value
 }
</script>

<style lang="scss" scoped></style>
