import React from 'react'

import { useCartContext } from '../../context/CartContext'



export default function Cart() {

    let styles = {
        listStyle: 'none'
    }

    const {listaCarrito, removeItem, clear} = useCartContext()

    return (

        <div className="container cart__container" style={styles}>
            <h1>Carrito</h1>
            <div className="cart__products-container">
            {
                listaCarrito.length === 0 ? 
                <h2>Tu carrito está vacío</h2>
                :
                listaCarrito.map(productoEnCarrito => 
                <div className='cart__product-wrapper' key={productoEnCarrito.producto.id}>
                    <div className="cart__img-wrapper">
                        <img src={productoEnCarrito.producto.pictureUrl} alt={productoEnCarrito.producto.title} />
                    </div>
                    <div className="cart__product-data">
                        <h3>{productoEnCarrito.producto.title}</h3>
                        <p>Cantidad: {productoEnCarrito.cantidad}</p>
                        <span>Total: ${productoEnCarrito.producto.price*productoEnCarrito.cantidad}</span>
                        <button onClick={() => removeItem(productoEnCarrito.producto.id)} className="product-detail__add">Quitar del carrito</button>
                    </div>
                </div>
                )
            }
            </div>

        </div>

    )

}