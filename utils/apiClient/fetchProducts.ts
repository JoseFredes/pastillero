import { Product } from '../types';
export const  fetchProducts = async () => {
    const url ='https://private-anon-a51a0e0298-inventurestest.apiary-mock.com/products'
     const content = fetch(url).then( (response) => {
      if (response.status === 200) {
        return response.json()
      }
    }).catch( err => console.error(err))
    const items = (await content) as {payload: Product[]}
    const products  = items.payload
    return products
}

