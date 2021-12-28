import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { useShoppingCart } from "../hooks/useShoppingCart"
import { products } from "../data/products"
import '../styles/custom-styles.css'

export const ShoppingPage = () => {
    const { shoppingCart, onProductCountChange } = useShoppingCart() 

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