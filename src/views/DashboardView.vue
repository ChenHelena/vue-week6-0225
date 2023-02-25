<template>
  這是後台(DashboardView)
  <router-link to="/admin/products">後台產品列表</router-link> |
  <router-link to="/admin/orders">後台訂單列表</router-link> |
  <router-link to="/">回前台首頁</router-link> |
  <a href="#" @click.prevent="logout">登出</a>
  <hr>
<router-view></router-view>
</template>

<script lang="ts">

import { RouterView } from 'vue-router'
const { VITE_APP_URL } = import.meta.env

export default {
  components: {
    RouterView
  },
  methods: {
    logout () {
      document.cookie = `helenaToken=; expires=${new Date()}`
      this.$router.push('/login')
    },
    checkAdmin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)helenaToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = token
      const url = `${VITE_APP_URL}api/user/check`
      this.$http.post(url)
        .then((res) => {
          if (!res.data.success) {
            this.$router.push('/login')
          }
        })
    }
  },
  mounted () {
    this.checkAdmin()
  }
}
</script>
