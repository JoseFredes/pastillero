import { Purchases } from '../types';
export const  userPurchases = async () => {
    const url ='https://private-anon-a51a0e0298-inventurestest.apiary-mock.com/purchases'
     const content = fetch(url).then( (response) => {
      if (response.status === 200) {
        return response.json()
      }
    }).catch( err => console.error(err))
    const items = (await content) as {payload : Purchases[]}
    const purchases  = items.payload
    return purchases
}