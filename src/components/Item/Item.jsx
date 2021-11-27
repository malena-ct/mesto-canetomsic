import React from 'react'
import {Link} from 'react-router-dom'

export default function Item({productId, productName, productDescription, productImg, productPrice}) {
    
    return (
        <div className="product-item__card">
            
            <figure className="product-item__img-wrapper">
                <img className="product-item__img" src={productImg} alt={productName + ' - ' + productDescription} />
            </figure>

            <div className="product-item__info-wrapper">
                <h3 className="product-item__name">{productName}</h3>
                <p className="product-item__description">{productDescription}</p>
                <span className="product-item__price">{'$'+productPrice}</span>
                <span className="product-item__link" >
                    <Link to={`/detalle/${productId}`}>
                        Ver más
                    </Link>
                </span>
            </div>
            
        </div>
    )
}
