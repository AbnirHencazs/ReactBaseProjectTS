import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { createContext, ReactElement } from 'react'
import { ProductContextProps, Product } from '../interfaces/interfaces'

export interface ProductCardProps{
    product: Product
    children?: ReactElement | ReactElement[],
    className?: string
}

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductCard = ({ children, product, className }: ProductCardProps) => {

    const { counter, increaseBy } = useProduct()

    return(
        <Provider value={{ counter, increaseBy, product }}>
            <div className={`${styles.productCard} ${className}`}>
                { children }
            </div>
        </Provider>
    )
}