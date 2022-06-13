<template>
  <div>
    <div v-for="product in products" :key="product.id">
      <v-card elevation="1" class="mt-4 mb-3">
        <v-row>
          <v-col cols="4" xs="2">
            <v-img class="ma-2"
              :src="product.product.imagesUrl"
              max-height="110"
              min-width="110"
              contain
            ></v-img>
          </v-col>
          <v-col cols="6" xs="4">
            <v-card-title>{{ product.product.name }}</v-card-title>
            <v-card-subtitle>{{
              product.product.concentration
            }}</v-card-subtitle>
            <v-card-text class="text-decoration-underline blue--text" > {{ daysLeftToBuy(product.date) }}</v-card-text>
          </v-col>
          <v-col cols="2" class="mt-12 pr-6">
            <v-row
              ><v-btn icon><v-icon>mdi-cart-plus</v-icon></v-btn></v-row
            >
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { Product } from '../utils/types'

@Component
export default class ProductCard extends Vue {
  @Prop({ required: true }) readonly products!: Product[]
    finishedPills: boolean = false
  
  daysLeftToBuy(date: Date) {
    const dateToday = new Date()
    const dayToday = dateToday.getTime()
    const inputDateDay = new Date(date).getTime()
    const pillsQuantity = 30
    const dayConverter = (1000 * 60 * 60 * 24)
    const restDays = Math.abs(dayToday - inputDateDay)
    const formatedRest = Math.round(restDays / dayConverter)
    const LeftoverAmount = pillsQuantity - formatedRest

    if( LeftoverAmount > 0){
        return `Quedan ${LeftoverAmount} pastillas para ${LeftoverAmount} días`
    }else {
        return ` Se te acabron las pastillas hace ${Math.abs(LeftoverAmount)} días`
    }
  }
}
</script>
