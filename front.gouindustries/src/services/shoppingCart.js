import Cookies from "js-cookie";
import { getApiUrl } from "./apiConfig";
import axios from 'axios';

// Función para obtener el carrito desde las cookies
function getCartFromCookies() {
    const cartCookie = Cookies.get("shopping_cart");
    return cartCookie ? JSON.parse(cartCookie) : [];
}

// Función para guardar el carrito en las cookies
function saveCartToCookies(cart) {
    Cookies.set("shopping_cart", JSON.stringify(cart), { expires: 7 }); // 7 días
}

// Función para agregar un producto al carrito
export const addToCart = async ({ amountToAdd, productToAdd, setProductFeedback }) => {
    const addUrl = getApiUrl('shoppingList');

    const cart = getCartFromCookies();
    const cartObject = { product: productToAdd, amount: amountToAdd };

    // Añadir el producto al carrito
    cart.push(cartObject);
    saveCartToCookies(cart); // Guardar el carrito actualizado

    try {
        await axios.post(addUrl, cartObject, { withCredentials: true });
        setProductFeedback({
            show: true,
            status: true,
            infoText: "AÑADIENDO AL CARRITO"
        });
        window.dispatchEvent(new Event('storage'));
    } catch (error) {
        setProductFeedback({
            show: true,
            status: false,
            infoText: "NO SE PUDO AÑADIR AL CARRITO"
        });
        console.error("Error al añadir al carrito:", error);
    }
}

// Función para obtener la lista de productos
export const getShoppingList = async ({ setProductList }) => {
    const listUrl = getApiUrl("shoppingList");

    try {
        const response = await axios.get(listUrl, { withCredentials: true });
        setProductList(response.data);
    } catch (error) {
        console.error("Error al obtener la lista de compras:", error);
    }
}

// Función para eliminar un artículo del carrito
export const deleteShoppingItem = async ({ itemId }) => {
    const deleteUrl = getApiUrl(`shoppingList/clean/${itemId}`);
    return await axios.delete(deleteUrl);
}

// Función para generar una venta
export const generateSale = async ({ setProductList }) => {
    const saleUrl = getApiUrl('sale/create');

    try {
        await axios.post(saleUrl, null, { withCredentials: true });
        await getShoppingList({ setProductList }); // Actualiza la lista después de la venta
    } catch (error) {
        console.error("Error al generar la venta:", error);
    }
}

// Función para obtener la lista de ventas
export const getSaleList = async ({ setSaleList }) => {
    const listUrl = getApiUrl("sale/client");

    try {
        const response = await axios.get(listUrl);
        setSaleList(response.data);
    } catch (error) {
        console.error("Error al obtener la lista de ventas:", error);
    }
}
