import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { createContext, CSSProperties, ReactElement } from 'react'
import { ProductContextProps, Product, onChangeArgs } from '../interfaces/interfaces'

export interface ProductCardProps{
    product: Product
    children?: ReactElement | ReactElement[],
    className?: string
    style?: CSSProperties
    onChange?: (args: onChangeArgs) => void
}

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductCard = ({ children, product, className, style, onChange }: ProductCardProps) => {

    const { counter, increaseBy } = useProduct( { onChange, product } )

    return(
        <Provider value={{ counter, increaseBy, product }}>
            <div 
                style={ style }
                className={`${styles.productCard} ${className}`}>
                { children }
            </div>
        </Provider>
    )
}