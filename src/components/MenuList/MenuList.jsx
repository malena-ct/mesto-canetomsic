import React from 'react'
import ListItem from '../ListItem/ListItem'


export default function MenuList() {

    
    
    
    return (
    <>
        <div className="nav-toggler">
            <img src="/img/icons/burger.svg" alt="Abrir menu" />
        </div>
        <ul className="navbar-nav" >
            <ListItem item="Libros"/>
            <ListItem item="Recitales"/>
            <ListItem item="Teatro"/>
            <ListItem item="Ferias"/>
            <ListItem item="Cine"/>
        </ul>
    </>
    )
}
