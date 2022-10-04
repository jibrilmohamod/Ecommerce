<template>
 <div class="h-[90vh]">
  <div class="w-9/12 -red-500 h-full m-auto flex">
   <!-- product images -->
   <div class="h-full w-1/2 -fuchsia-600 pt-32">
    <carousel :items-to-show="1.5">
     <slide v-for="slide in 5" :key="slide">
      {{ slide }}
     </slide>

     <template #addons>
      <navigation />
      <pagination />
     </template>
    </carousel>
   </div>
   <!-- product info -->
   <div class="h-full w-1/2 -green-800 -2">
    <div class="w-3/4 m-auto flex flex-col justify-center h-full gap-6">
     <h3 class="text-amber-500 font-semibold tracking-wider">
      SNEAKER COMPANY
     </h3>
     <h1 class="text-5xl font-bold mb-5"></h1>
     <p class="text-gray-400 leading-loose">
      These low-profile sneakers are your perfect casual wear companion.
      Featuring a durable rubber outer sole, they’ll withstand everything the
      weather can offer.
     </p>
     <div>
      <div class="flex items-center mt-10">
       <h2 class="text-3xl font-bold">$125.00</h2>
       <h2 class="text-amber-500 ml-10 px-2 bg-orange-100 rounded-md font-bold">
        50%
       </h2>
      </div>
      <h2 class="text-gray-400 mt-2 line-through">$250.00</h2>
     </div>
     <!-- add to cart and product counter -->
     <div class="flex items-center mt-10 justify-around">
      <div class="flex items-center gap-5 rounded-md bg-orange-50">
       <button
        class="rounded-md w-10 h-10 flex items-center justify-center"
        @click="minusCounter"
       >
        <Icon
         icon="ant-design:minus-outlined"
         class="text-orange-600 text-xl"
        />
       </button>
       <h2 class="font-bold w-10 border text-center">{{ counter }}</h2>
       <button
        class="rounded-md w-10 h-10 flex items-center justify-center"
        @click="addCounter"
       >
        <Icon icon="ant-design:plus-outlined" class="text-orange-600 text-xl" />
       </button>
      </div>
      <button
       class="bg-amber-500 text-white font-bold px-14 py-3 rounded-md flex gap-3 items-center"
      >
       <Icon class="text-2xl" icon="clarity:shopping-cart-line" />
       <p>Add to cart</p>
      </button>
     </div>
    </div>
   </div>
  </div>
 </div>
</template>

<script setup>
 import { Icon } from "@iconify/vue"
 import "vue3-carousel/dist/carousel.css"
 import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel"

 import { ref } from "vue"
 const counter = ref(0)
 const addCounter = () => {
  counter.value++
 }
 const minusCounter = () => {
  if (counter.value > 0) {
   counter.value--
  }
 }
 const image = ref("image-product-1.jpg")
</script>

<style lang="scss" scoped></style>
