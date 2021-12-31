import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import { useCartContext } from '../../context/CartContext'



export default function Cart() {

    let styles = {
        listStyle: 'none'
    }

    const {listaCarrito, removeItem, clear, price} = useCartContext()

    return (

        <div className="container cart__container" style={styles}>
            <h1>Carrito</h1>
            <div className="cart__products-container">
            {
                listaCarrito.length === 0 ? 
                <div className="cart__empty-wrapper">
                    <h2>Tu carrito está vacío</h2>
                    <NavLink className="main-btn" to="/">Volver al Inicio</NavLink>
                </div>

                :
                <>
                {listaCarrito.map(productoEnCarrito => 
                <div className='cart__product-wrapper' key={productoEnCarrito.producto.id}>
                    <div className="cart__img-wrapper">
                        <img src={productoEnCarrito.producto.pictureurl} alt={productoEnCarrito.producto.title} />
                    </div>
                    <div className="cart__product-data">
                        <Link className="cart__product-link" to={`/item/${productoEnCarrito.producto.id}`}> <h3>{productoEnCarrito.producto.title}</h3></Link>
                        <p>Cantidad: {productoEnCarrito.cantidad}</p>
                        <span>Total: ${productoEnCarrito.producto.price*productoEnCarrito.cantidad}</span>
                        <button onClick={() => removeItem(productoEnCarrito.producto.id)} className="main-btn">Quitar del carrito</button>
                    </div>
                </div>
                )}
                <h3 className="cart__total-price">Total: ${price()}</h3>
                <Link className="main-btn" to="/Checkout">Terminar de comprar</Link>
                <button onClick={() => clear()} className="main-btn">Vaciar carrito</button>
                
                </>
            }
            </div>

        </div>

    )

}