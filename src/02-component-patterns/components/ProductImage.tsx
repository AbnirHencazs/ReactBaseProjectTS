import { ProductContext } from "./ProductCard"
import { CSSProperties, useContext } from "react"
import NoImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'
interface ProductImageProps{
    img?: string
    className?: string
    style?: CSSProperties
}
export const ProductImage = ({ img, className, style }: ProductImageProps) => {
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
        <img className={`${ styles.productImg } ${ className }`} style={style} src={ imgToShow } alt="Product image" />
    )
}