import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'


export default function CartWidget({height}) {
    //contexto
    const { listaCarrito } = useCartContext()

    return (
        <>
            {
                listaCarrito.length === 0 ?
                <></>
                :
                <Link className="cart__link" to="/Cart">
                    <span className="cart__icon-total-amount">{listaCarrito.reduce((productosAcumulados,producto) => productosAcumulados + producto.cantidad, 0)}</span>
                    <img className="cart__icon-img" src="/img/icons/cart.svg" alt="Carrito" height={height} width="auto"/>
                </Link>
            }
        </>
    )
}
