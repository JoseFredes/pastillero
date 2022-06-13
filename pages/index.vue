<template>
  <div class="mt-6">
    <div>
      <v-row justify="center">
        <v-sheet >
          <h1 class="text-h3 text-center">💊</h1>
          <h3 class="text-center pt-2 font-weight-bold">Revisa Tus compras</h3>
          <br />
          <h3 class="text-center font-weight-regular">Agrega al carro si necesitas reponer</h3>
        </v-sheet>
      </v-row>
    </div>
    <div>
      <v-sheet
        color="#F5F5F5"
        class="mt-4 text-h5 pl-4 pt-2 pb-2 text-left font-weight-medium"
        height="2.8rem"
      >
        Te queda
      </v-sheet>
    </div>
    <div>
      <product-card :products="products"></product-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import {  Purchases , itemsPurchased, userProduct} from '../utils/types'
import { userPurchases } from '../utils/apiClient/fetchUserPurchases'
import { obtainProductById } from '../utils/obtainProductById'
import ProductCard from '~/components/productCard.vue'


@Component({ components: { ProductCard } })
export default class Index extends Vue {
  products: userProduct[] = []
  purchases: Purchases[] = []
  itemsPurchased: itemsPurchased[] = []
  productPurchased: itemsPurchased[] = []
  mounted() {
    this.fetchPurchases()
  }

  async fetchPurchases() {
    this.purchases = await userPurchases()
    this.obtainUserProducts()
  }

  obtainUserProducts() {
    let items = {}
    this.purchases.forEach((purchase) => {
      purchase.details.forEach((detail) => {
        items = {
          date: purchase.received_date,
          productId: detail.product_id,
          quantity: detail.quantity,
        }
        this.itemsPurchased.push(items as itemsPurchased)
      })
    })
    this.itemsPurchased.sort((a, b) => {
      if (a.date < b.date) return 1
      else if (a.date === b.date) return 0
      return -1
    })
      const lastDate = this.itemsPurchased[0].date
      this.getProducts(lastDate)
  }

  getProducts(lastDate: Date){
       const lastIdsPurchased: Number[] = []
      this.itemsPurchased.forEach((item) => {
        if (item.date === lastDate) {
          this.productPurchased.push(item)
          lastIdsPurchased.push(item.productId)
        }
        if (!lastIdsPurchased.includes(item.productId)) {
          lastIdsPurchased.push(item.productId)
          this.productPurchased.push(item)
        }
      })

     this.productPurchased.forEach(async product => {
        const itemProduct  = await obtainProductById(product.productId)
        const productPurchased : userProduct = {
          product: itemProduct,
          date : product.date
        }
        this.products.push(productPurchased)
      })

    return this.products
  }

}
</script>
