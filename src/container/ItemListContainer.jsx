import React from 'react'
import Item from '../components/Item/Item';
import { useEffect, useState } from 'react';
import { ListadoProductos } from '../productos/ListadoProductos';



const ItemListContainer = () => {

    let styles = {
        color: '#0000ff',
        fontSize: '32px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '90px'
    }

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const getFetch = new Promise((aceptado, rechazado) => {
            setTimeout(() => {
                aceptado(ListadoProductos)
            }, 2000);
    
        })

        getFetch.then((productoEncontrado) => {
            setProductos(productoEncontrado)
        })
        .catch((error) => {
            console.log('Error')
        })
        .finally(() => setLoading(false))
    }, [])
    

    return(
        <div className="container" style={styles}>
            
            <div className="product-list--highlighted"> 

            {
                loading ? <h2 className="loader-text">Cargando...</h2> : productos.map(prod => <Item item={prod} key={prod.key} />)
                
            }

            </div>

            
        </div>
    )
}

export default ItemListContainer