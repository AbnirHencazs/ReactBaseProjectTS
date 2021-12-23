import styles from '../styles/styles.module.css'
import NoImage from '../assets/no-image.jpg'
import { useProduct } from '../hooks/useProduct'
export const ProductCard = () => {
    const { counter, increaseBy } = useProduct()
    return(
        <div className={styles.productCard}>
            <img className={styles.productImg} src="./coffee-mug.png" alt="Coffe mug" />
            {/* <img className={styles.productImg} src={NoImage} alt="Coffe mug" /> */}

            <span className={ styles.productDescription }>Coffee mug</span>
            <div className={ styles.buttonsContainer }>
                <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>-</button>
                <div className={styles.countLabel}> {counter} </div>
                <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>+</button>
            </div>
        </div>
    )
}