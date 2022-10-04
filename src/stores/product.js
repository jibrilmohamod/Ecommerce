import { ref } from "vue"
import { defineStore } from "pinia"

export const useProductStore = defineStore("product", () => {
 //get proudcts from api
 const products = ref([])
 const getProducts = async () => {
  const response = await fetch("https://api.escuelajs.co/api/v1/products")
  const data = await response.json()
  products.value = data
 }
 return { products, getProducts }
})
