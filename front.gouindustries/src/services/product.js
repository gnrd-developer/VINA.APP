import {getApiUrl} from './apiConfig'
import axios from 'axios'

export const getProductsBySubCategory = async (sub) => {
    const productBySubUrl = getApiUrl(`product/subcategory/${sub}`)
    const response = await axios.get(productBySubUrl)
    return response.data
}


export const getProductById = async (id) => {
    const productUrl = getApiUrl(`product/${id}`)
    const response = await axios.get(productUrl)
    return response.data
}

export const getRelatedProducts = async ({category, id}) => {
    const relatedProduct = getApiUrl(`product/related/${category}/${id}`)
    const response = await axios.get(relatedProduct)
    return response.data
}