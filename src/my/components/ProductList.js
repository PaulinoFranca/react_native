import React from 'react'
import Product from './Product'

const ProductList = ({products, onItemClick}) => (
    <ul>
        {
            products.map((product, index) => (
                <Product key={index} product={product}/>
            ))
        }
    </ul>
);

export default ProductList