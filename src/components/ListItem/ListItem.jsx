import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ListItem({item}) {
    return (
        <li className='nav-item'>
            <NavLink activeclassname="active" className="nav-link" to={`/category/${item}`}>
                <p> {item}</p>
            </NavLink>
        </li>
    )
}
