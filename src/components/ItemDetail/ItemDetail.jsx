import React from 'react'

const ItemDetail = ({item}) => {

    return (
        <div className="product-item__detail">
            <p>id: {item.id}</p>
            <p>title: {item.title}</p>
            <p>description: {item.description}</p>
            <p>price: {item.price}</p>
            <p>url: {item.pictureURL}</p>
            <p>category: {item.category}</p>
        </div>
    )
}

export default ItemDetail