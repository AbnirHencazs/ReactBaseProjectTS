import { useState } from "react"
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { Product } from "../interfaces/interfaces"
import '../styles/custom-styles.css'
const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

const product2 = {
    id: '2',
    title: 'Coffe Mug - Meme',
    img: './coffee-mug2.png'
}
const products: Product[] = [ product, product2 ]

interface ProductInCart extends Product {
    count: number
}

export const ShoppingPage = () => {
    //useState va a manejar un objeto y dentro tenemos cualquier cantidad de llaves de tipo string, y los valores de ese objeto implementan ProductInCard
    const [ shoppingCart, setShoppingCart ] = useState< { [key: string]: ProductInCart } >({})
    
    const onProductCountChange = ({ count, product } : { count: number, product: Product }) => {
        console.log('cambió!', count, product)
    }

    return(
        <div>
            <h1>Shopping store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {
                    products.map((p) => (
                        <ProductCard
                            product={p}
                            className="bg-dark"
                            key={p.id}
                            onChange={ onProductCountChange }>
                            <ProductImage className="custom-image"/>
                            <ProductTitle className="text-white"/>
                            <ProductButtons className="custom-buttons"/>
                        </ProductCard>
                    ))
                }
            </div>

            <div className="shopping-cart">
                <ProductCard product={product2} className="bg-dark"
                    style={{
                        width: '100px'
                    }}>
                    <ProductImage className="custom-image"/>
                    <ProductButtons className="custom-buttons"/>
                </ProductCard>
                <ProductCard product={product} className="bg-dark"
                    style={{
                        width: '100px'
                    }}>
                    <ProductImage className="custom-image"/>
                    <ProductButtons className="custom-buttons"/>
                </ProductCard>
            </div>
        </div>
    )
}