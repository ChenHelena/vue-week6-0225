<template>
  這是全部產品
  <table class="table">
    <tr v-for="product in products" :key="product.id">
      <td>{{ product.title }}</td>
      <td><img :src="product.imageUrl" width="200" alt=""></td>
      <td>
        <RouterLink :to="`/product/${product.id}`" class="btn btn-outline-secondary me-3 align-middle">產品細節</RouterLink>
        <button type="button" class="btn btn-outline-primary" @click="addToCart(product.id)">加入購物車</button>
      </td>
    </tr>
  </table>
</template>

<script>
import { RouterLink } from 'vue-router'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      products: []
    }
  },
  components: {
    RouterLink
  },
  methods: {
    getProducts () {
      this.$http.get(`${VITE_APP_URL}api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products
        })
    },
    addToCart (id) {
      const data = {
        product_id: id,
        qty: 1
      }
      this.$http.post(`${VITE_APP_URL}api/${VITE_APP_PATH}/cart`, { data })
        .then((res) => {
          console.log(res)
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
