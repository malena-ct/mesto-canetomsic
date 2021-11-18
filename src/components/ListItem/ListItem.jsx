import React from 'react'

export default function ListItem({link,item}) {
    return (
        <li className='nav-item'>
            <a className="nav-link" href={link}><p> {item}</p></a>
        </li>
    )
}
