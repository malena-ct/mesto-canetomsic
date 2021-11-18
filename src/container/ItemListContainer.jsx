import React from 'react'
import List from '../components/List/List'



const ItemListContainer = () => {

    let styles = {
        color: '#0000ff',
        fontSize: '32px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '90px'
        // hay forma de poder pasar el valor de por ejemplo el padding como un prop
        //del componente?
    }


    return(
        <div style={styles}>
            <List />
        </div>
    )
}

export default ItemListContainer