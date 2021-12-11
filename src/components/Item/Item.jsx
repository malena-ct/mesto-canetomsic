import React from 'react'
import {Link} from 'react-router-dom'

export default function Item({item,key, itemID}) {
    
    return (
        <div key={key} className="product-item__card">
                
        <figure className="product-item__img-wrapper">
            <img className="product-item__img" src={item.pictureurl} alt={item.title + ' - ' + item.description} />
        </figure>

        <div className="product-item__info-wrapper">
            <h3 className="product-item__name">{item.title}</h3>
            <p className="product-item__description">{item.description}</p>
            <span className="product-item__price">{'$'+item.price}</span>
            <Link className="product-item__link" to={`/item/${itemID}`}>
                Ver detalles
            </Link>
        </div>
        
    </div>
    )
}
