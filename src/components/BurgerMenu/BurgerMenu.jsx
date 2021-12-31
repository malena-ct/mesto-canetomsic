import React from 'react'
import MenuList from '../MenuList/MenuList'
import { useState } from 'react';


export const BurgerMenu = () => {

    const [menu, setMenu] = useState(false)


    return (
        <>
            <div className="nav-toggler" onClick={() => setMenu(menu => !menu)}>
                <img src="/img/icons/burger.svg" alt="Abrir menu" />
            </div>
            <MenuList estado={menu} setEstado={setMenu}/>
        </>
    )
}


export default BurgerMenu
