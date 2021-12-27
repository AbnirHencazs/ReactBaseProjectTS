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
export const ShoppingPage = () => {
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
                        <ProductCard product={p} className="bg-dark" key={p.id}>
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