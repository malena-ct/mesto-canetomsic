import React from 'react'
import CartWidget from './CartWidget'
import Logo from './Logo'
import MenuList from './MenuList'

export default function NavBar({item}) {
    return (
        <nav className="navbar">
            <Logo height="25" />
            <MenuList />
            <CartWidget height="20"/>
        </nav>
    )
}
