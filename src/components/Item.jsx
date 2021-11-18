import React from 'react'

export default function Item({productId, productName, productDescription, productImg, productPrice}) {
    
    return (
        <div className="product-card" id={productId}>
            <img src={productImg} alt={productName + ' - ' + productDescription} />
            <h3>{productName}</h3>
            <p>{productDescription}</p>
            <span>{productPrice}</span>
        </div>
    )
}
