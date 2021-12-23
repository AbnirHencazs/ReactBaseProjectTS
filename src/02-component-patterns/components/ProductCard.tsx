import styles from '../styles/styles.module.css'
import NoImage from '../assets/no-image.jpg'
import { useProduct } from '../hooks/useProduct'
import { createContext, ReactElement, useContext } from 'react'

interface Props{
    product: Product
    children?: ReactElement | ReactElement[]
}
interface Product{
    id: string
    title: string
    img?: string
}
interface ProductContextProps{
    counter: number
    increaseBy: (value: number) => void
    product: Product
}

const ProductContext = createContext({} as ProductContextProps)

const { Provider } = ProductContext

export const ProductImage = ({ img = '' }) => {
    const { product } = useContext(ProductContext)
    let imgToShow: string
    if(img){
        imgToShow = img
    }else if(product.img){
        imgToShow = product.img
    }else{
        imgToShow = NoImage
    }
    return(
        <img className={styles.productImg} src={ imgToShow } alt="Product image" />
    )
}

export const ProductTitle = ({ title } : { title?: string }) => {
    const { product } = useContext(ProductContext)
    return(
        <span className={ styles.productDescription }>{title ? title : product.title}</span>
    )
}

export const ProductButtons = () => {
    const { counter, increaseBy } = useContext(ProductContext)
    return(
        <div className={ styles.buttonsContainer }>
            <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>-</button>
            <div className={styles.countLabel}> {counter} </div>
            <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>+</button>
        </div>
    )
}

export const ProductCard = ({ children, product }: Props) => {

    const { counter, increaseBy } = useProduct()

    return(
        <Provider value={{ counter, increaseBy, product }}>
            <div className={styles.productCard}>
                {/* <ProductImage img={product.img}/>
                <ProductTitle title={ product.title }/>
                <ProductButtons counter={counter} increaseBy={increaseBy}/> */}
                { children }
            </div>
        </Provider>
    )
}