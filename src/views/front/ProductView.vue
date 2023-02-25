<template>
  這是單一產品
  <h4>{{ product.title }}</h4>
  <img :src="product.imageUrl" width="300" alt="">
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      product: {}
    }
  },
  methods: {
    getProduct () {
      const { id } = this.$route.params
      this.$http.get(`${VITE_APP_URL}api/${VITE_APP_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product
          console.log(res.data.product)
        })
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
