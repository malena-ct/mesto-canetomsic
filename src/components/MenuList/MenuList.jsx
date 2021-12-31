import React from 'react'
import ListItem from '../ListItem/ListItem'


export default function MenuList({estado, setEstado}) {

    
    const cerrarMenu = () => setEstado(false)
    
    return (
    <>
        <ul onClick={cerrarMenu} className={estado === false ? 'navbar-nav' : 'navbar-nav open'}   >
            <ListItem item="Libros"/>
            <ListItem item="Recitales"/>
            <ListItem item="Teatro"/>
            <ListItem item="Ferias"/>
            <ListItem item="Cine"/>
        </ul>
    </>
    )
}
