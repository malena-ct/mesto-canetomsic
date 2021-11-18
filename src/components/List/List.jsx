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

    //listado provisorio de productos
    const listadoDeProductos = [
        {
        id: 1, 
        title: 'Chita - 26 noviembre 2021', 
        description: 'Chita hace su primer concierto en la ciudad de Buenos Aires desde fines de 2019 con este show en Ciudad Cultural Konex.', 
        price: 1300, 
        pictureUrl:'/img/products/prod-1.jpeg'
        },
        {
        id: 2, 
        title: 'Sweat', 
        description: 'Esta publicación ofrece una contextualización en profundidad de las obras reunidas en la exposición desde una variedad de perspectivas que tienen en cuenta la polifonía y convivencia de esos mundos artísticos.', 
        price: 4730, 
        pictureUrl:'/img/products/prod-2.jpeg'
        },
        {
        id: 3, 
        title: 'Hidalgo', 
        description: 'Susana, una agente inmobiliaria frustrada e insatisfecha, debe mostrar un moderno y costoso departamento a una pareja de extranjeros. Encuentra a Víctor, un adolescente desgarbado e introvertido, durmiendo semidesnudo entre cajas de verdura y bolsas de residuos. Deprimido y desmotivado, el muchacho debe terminar un trabajo práctico sobre el poeta revolucionario Bartolomé Hidalgo si no quiere repetir el último año del secundario. Susana y Víctor pronto descubrirán que a veces el encuentro menos pensado puede hacer que se rompan todas las cadenas.', 
        price: 600, 
        pictureUrl:'/img/products/prod-3.jpeg'
        }
    ]

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
                        productImg={prod.pictureUrl} 
                        productName={prod.title} 
                        productDescription={prod.description} 
                        productPrice={prod.price}/>
                    )
            }
            
        </div>
    )
}
