import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo({height}) {
    return (
        <Link className="navbar-brand" to="/">
            <img src="/img/logo.svg" title="Mesto" alt="Mesto" height={height} width="auto" />
        </Link>
    )
}
