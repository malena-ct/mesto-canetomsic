import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CartWidget({height}) {
    return (
        <NavLink to="/Cart">
            <img src="/img/icons/cart.svg" alt="Carrito" height={height} width="auto"/>
        </NavLink>
    )
}
