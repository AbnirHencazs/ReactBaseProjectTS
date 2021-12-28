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
                            value={shoppingCart[p.id]?.count || 0}
                            onChange={ onProductCountChange }>
                            <ProductImage className="custom-image"/>
                            <ProductTitle className="text-white"/>
                            <ProductButtons className="custom-buttons"/>
                        </ProductCard>
                    ))
                }
            </div>

            <div className="shopping-cart">
                {
                    Object.values(shoppingCart).map((p) => (
                        <ProductCard 
                            key={p.id}
                            product={p}
                            className="bg-dark"
                            style={{
                                width: '100px'
                            }}
                            value={p.count}
                            onChange={ onProductCountChange }>
                            <ProductImage className="custom-image"/>
                            <ProductButtons className="custom-buttons"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}/>
                        </ProductCard>
                    )) 
                }
            </div>
        </div>
    )
}