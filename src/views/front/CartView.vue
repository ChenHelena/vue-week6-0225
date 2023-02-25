<template>
  這是購物車
  <table class="table align-middle">
    <thead>
      <tr>
        <th></th>
        <th>品名</th>
        <th style="width: 150px">數量/單位</th>
        <th class="text-end">單價</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="cart.carts">
        <tr v-for="item in cart.carts" :key="item.id">
          <td>
            <button type="button" class="btn btn-outline-danger btn-sm" @click="removeCartItem(item)" :disabled="item.id === loadingItem.id">
              <i class="fas fa-spinner fa-pulse"></i>
              x
            </button>
          </td>
          <td>
            {{ item.product.title }}
            <!-- <div class="text-success">
            已套用優惠券
          </div> -->
          </td>
          <td>
            <div class="input-group input-group-sm">
              <select name="" id="" class="form-select" v-model="item.qty" @change="updateCart(item)" :disabled="item.id === loadingItem.id">
                <option :value="i" v-for="i in 20" :key="i + '123'">
                  {{ i }}
                </option>
              </select>
            </div>
          </td>
          <td class="text-end">
            <!-- <small class="text-success">折扣價：</small> -->
            {{ item.total }}
          </td>
        </tr>
      </template>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3" class="text-end">總計</td>
        <td class="text-end">{{ cart.total }}</td>
      </tr>
      <tr>
        <td colspan="3" class="text-end text-success">折扣價</td>
        <td class="text-end text-success">{{ cart.final_total }}</td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      products: [],
      productId: '',
      cart: [],
      loadingItem: ''
    }
  },
  methods: {
    getCarts () {
      this.$http.get(`${VITE_APP_URL}api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          this.cart = res.data.data
          console.log('取得購物車', res.data.data)
        })
    },
    updateCart (item) { // 購物車id+產品id
      this.loadingItem = item.id
      const data = {
        product_id: item.product.id,
        qty: item.qty
      }
      console.log(data, item.id)
      this.$http.put(`${VITE_APP_URL}api/${VITE_APP_PATH}/cart/${item.id}`, { data })
        .then((res) => {
          console.log('更新購物車', res.data)
          this.getCarts()
          this.loadingItem = ''
        })
    },
    removeCartItem (item) {
      this.loadingItem = item.id
      this.$http.delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${item.id}`)
        .then((res) => {
          alert('刪除單一購物車成功')
          console.log('刪除單一購物車', res.data)
          this.getCarts()
          this.loadingItem = ''
        })
    },
    deleteAllCarts () {
      this.$http.delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/carts`)
        .then((res) => {
          alert('刪除全部購物車成功')
          console.log('刪除全部購物車', res.data)
          this.getCarts()
        })
    }
  },
  mounted () {
    this.getCarts()
  }
}
</script>
