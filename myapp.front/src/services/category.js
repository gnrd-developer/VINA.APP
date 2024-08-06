import {getApiUrl} from './apiConfig'
import axios from 'axios'

export const getAllCategories = ({ setCategoryList }) => {
    const categoryUrl = getApiUrl("category")
    axios.get(categoryUrl).then((response) => {
        setCategoryList(response.data)
    })
}