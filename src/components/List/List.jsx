import React from 'react'
import { useState, useEffect } from 'react'
import Item from '../Item/Item'

export default function List() {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const getFetch = new Promise((aceptado, rechazado) => {
        setTimeout(() => {
            aceptado('Productos cargados correctamente')
        }, 2000);

    })

    useEffect(() => {
        getFetch
        .then( data => setProductos(data))
        .catch(err => console.log(err)) 
        .finally(() => setLoading(false))
    }, [])

    return (
        
        <div className="product-list--highlighted">
            {        
                loading ? <h2>Cargando...</h2> : listadoDeProductos.map(prod => 
                        <Item 
                        key={prod.id}
                        productId={prod.id}
                        productImg={prod.pictureUrl} 
                        productName={prod.title} 
                        productDescription={prod.description} 
                        productPrice={prod.price}/>
                    )
            }
            
        </div>
    )
}
