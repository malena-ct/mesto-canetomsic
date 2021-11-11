import React from 'react'

let styles = {
    color: '#0000ff',
    fontSize: '32px',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(100vh - 100px)'
}

const ItemListContainer = ({greeting}) => {

    return(
        <div style={styles}>
            <h2>{greeting}</h2>
        </div>
    )
}

export default ItemListContainer