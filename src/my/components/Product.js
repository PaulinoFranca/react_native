import React from 'react'

const Product = ({product}) => (
    <li onClick={onClick}>
        {product.title} - {product.price}
    </li>
);

export default Product