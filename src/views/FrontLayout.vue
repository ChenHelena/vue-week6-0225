<template>
  這是前台(FrontLayout)
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link> |
  <router-link to="/products">Products</router-link> |
  <router-link to="/cart">Cart</router-link> |
  <router-link to="/admin/products">後台產品列表</router-link> |
  <hr>
  <router-view></router-view>
</template>

<script lang="ts">
import { RouterView } from 'vue-router'

export default {
  components: {
    RouterView
  }
}
</script>
