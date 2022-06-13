import { fetchProducts } from './apiClient/fetchProducts';
import { Product } from './types';
export const  obtainProductById = async (productId : number) :Promise<Product> => {
    const products: Product[] = await fetchProducts()
    const productResult = products.find(product => product.id === productId) 
    return productResult!
}
