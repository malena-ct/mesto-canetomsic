import React from 'react'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../Logo/Logo'

export default function NavBar({item}) {
    return (
        <nav className="navbar">
            <Logo height="25" />
            <BurgerMenu />
            <CartWidget height="20"/>
        </nav>
    )
}
