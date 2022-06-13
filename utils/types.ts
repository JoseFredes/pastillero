export interface Product {
  id: number
  name: string
  description: string | null
  price: Number
  concentration: String | null
  package: string | null
  composition: string
  posology: string | null
  display: string | null
  contraindications: string | null
  indications: string | null
  containerQuantity: string
  container: string
  availability: {
    status: string
  }
  imagesUrl: string
  format: string
  activePrinciple: string
  laboratory: string
}

export interface Purchases {
  // eslint-disable-next-line camelcase
  purchase_id: number
  details: [
    {
      // eslint-disable-next-line camelcase
      product_id: number
      quantity: number
    }
  ]
  // eslint-disable-next-line camelcase
  received_date: Date
}

export interface itemsPurchased {
  date: Date
  productId: number
  quantity: number
}



export interface userProduct {
  product : Product,
  date: Date
}
