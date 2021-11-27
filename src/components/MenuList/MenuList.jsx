import React from 'react'
import ListItem from '../ListItem/ListItem'

export default function MenuList() {
    return (
        <ul className="navbar-nav">
            <ListItem item="Libros"/>
            <ListItem item="Recitales"/>
            <ListItem item="Teatro"/>
            <ListItem item="Ferias"/>
            <ListItem item="Cine"/>
        </ul>
    )
}