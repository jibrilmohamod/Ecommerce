<template>
 <div class="h-[90vh] border border-green-600">
  <div class="w-9/12 border border-red-500 h-full m-auto flex">
   <!-- product images -->
   <div class="h-full w-1/2 border border-fuchsia-600 pt-32">
    <img
     src="../assets/images/image-product-1.jpg"
     alt=""
     class="rounded-xl w-5/6 mx-auto"
    />
    <div class="w-5/6 border border-yellow-400 mx-auto flex mt-10">
     <img
      src="../assets/images/image-product-1-thumbnail.jpg"
      alt=""
      class="rounded-xl w-1/6 mx-auto"
     />
     <img
      src="../assets/images/image-product-2-thumbnail.jpg"
      alt=""
      class="rounded-xl w-1/6 mx-auto"
     />
     <img
      src="../assets/images/image-product-3-thumbnail.jpg"
      alt=""
      class="rounded-xl w-1/6 mx-auto"
     />
     <img
      src="../assets/images/image-product-4-thumbnail.jpg"
      alt=""
      class="rounded-xl w-1/6 mx-auto"
     />
    </div>
   </div>
   <!-- product info -->
   <div class="h-full w-1/2 border-green-800 border-2">
    <div class="w-3/4 m-auto flex flex-col justify-center h-full gap-6">
     <h3 class="text-amber-500 font-semibold tracking-wider">
      SNEAKER COMPANY
     </h3>
     <h1 class="text-5xl font-bold mb-5">Fall Limited Edition Sneakers</h1>
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
     <div class="flex items-center mt-10">
      <div class="flex items-center gap-2">
       <button class="border border-gray-400 rounded-md w-10 h-10">
        <Icon icon="clarity:minus-line" />
       </button>
       <h2 class="text-2xl font-bold">1</h2>
       <button class="border border-gray-400 rounded-md w-10 h-10">
        <Icon icon="clarity:plus-line" />
       </button>
      </div>
      <button
       class="bg-amber-500 text-white font-bold px-10 py-3 rounded-md ml-10"
      >
       Add to Cart
      </button>
     </div>
    </div>
   </div>
  </div>
 </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
