import React from 'react'

export default function Logo({height}) {
    return (
        <a href="/home" className="navbar-brand">
            <img src="img/logo.svg" title="Mesto" alt="Mesto" height={height} width="auto" />
        </a>
    )
}
