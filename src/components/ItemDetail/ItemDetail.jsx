import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({item}) => {

    const { listaCarrito, addItem } = useCartContext()

    function onAdd(cant){
        setCount(cant)
        addItem({item: item, cantidad: cant})
    }

    return (
        <div className="product-detail__detail">
            <Link className="product-detail__category" to={`/category/${item.category}`}>Categoría: {item.category}</Link>
                <div className="product-detail__data">
                    <figure className="product-detail__img-wrapper">
                        <img src={item.pictureUrl} alt={item.description} title={item.description} />
                    </figure>
                    <div className="product-detail__info-wrapper">
                        <h2 className="product-detail__title">{item.title}</h2>
                        <p className="product-detail__description">{item.description}</p>
                        <span className="product-detail__price">${item.price}</span>
                        <ItemCount />
                        <button className="product-detail__add">Agregar al carrito</button>
                    </div>
                </div>
        </div>
    )
}

export default ItemDetail