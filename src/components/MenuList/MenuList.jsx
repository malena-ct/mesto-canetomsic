import React from 'react'
import ListItem from '../ListItem/ListItem'

export default function MenuList() {
    return (
        <ul className="navbar-nav">
            <ListItem link="/libros.html" item="Libros"/>
            <ListItem link="/recitales.html" item="Recitales"/>
            <ListItem link="/cine.html" item="Cine"/>
            <ListItem link="/ferias.html" item="Ferias"/>
        </ul>
    )
}
