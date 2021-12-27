import { ProductContext } from "./ProductCard"
import { useContext } from "react"
import NoImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'
interface ProductImageProps{
    img?: string
    className?: string
}
export const ProductImage = ({ img, className }: ProductImageProps) => {
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
        <img className={`${ styles.productImg } ${ className }`} src={ imgToShow } alt="Product image" />
    )
}