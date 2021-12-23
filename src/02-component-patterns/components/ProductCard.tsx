import styles from '../styles/styles.module.css'
import NoImage from '../assets/no-image.jpg'
import { useProduct } from '../hooks/useProduct'

interface Props{
    product: Product
}
interface Product{
    id: string
    title: string
    img?: string
}

export const ProductCard = ({ product }: Props) => {

    const { counter, increaseBy } = useProduct()

    return(
        <div className={styles.productCard}>
            <img className={styles.productImg} src={ product.img ? product.img : NoImage } alt="Coffe mug" />
            {/* <img className={styles.productImg} src={NoImage} alt="Coffe mug" /> */}

            <span className={ styles.productDescription }>{product.title}</span>
            <div className={ styles.buttonsContainer }>
                <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>-</button>
                <div className={styles.countLabel}> {counter} </div>
                <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>+</button>
            </div>
        </div>
    )
}