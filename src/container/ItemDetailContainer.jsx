import React from 'react'
import { useEffect, useState } from 'react';
import { ListadoProductos } from '../productos/ListadoProductos';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [itemProducto, setItemProducto]= useState({});
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const promiseItemProducto = new Promise((resolved, rejected) => {
            setTimeout(() => {
                resolved(ListadoProductos.find(producto => producto.id == id))
            }, 100);
            
        })

        promiseItemProducto.then((productoEncontrado) => {
            setItemProducto(productoEncontrado)
        })
        .catch((error) => {
            console.log('Producto no encontrado')
        })
        .finally(() => setLoading(false))
    }, [id])

    

    return (
        <div className="container">
           { loading ? <h2 className="loader-text">Cargando...</h2> : <ItemDetail item={itemProducto}/>}
        </div>
    )
}

export default ItemDetailContainer
