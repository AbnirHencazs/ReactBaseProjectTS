import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {

    const [ shoppingCart, setShoppingCart ] = useState<{ [key: string]: ProductInCart }>({})

    const onProductCountChange = ({count, product}: {count: number, product: Product}) => {
        setShoppingCart(prev => {
            if(!count){
                delete prev[product.id]
                return{
                    ...prev
                }
            }
            return {
                ...prev,
                //La llave va a ser computada, por eso usamos corchetes
                [product.id]: { ...product, count }
            }
        })
    }

    return{ shoppingCart, onProductCountChange}
}