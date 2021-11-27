import React from 'react'
import List from '../components/List/List'
import { useEffect, useState } from 'react';
import { ListadoProductos } from '../productos/ListadoProductos';
import { useParams } from 'react-router-dom';



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

    const [itemProducto, setItemProducto]= useState({});
    const [loading, setLoading] = useState(true);

    const { itemIdParams } = useParams();

    useEffect(() => {
        const promiseItemProducto = new Promise((resolved, rejected) => {
            resolved(ListadoProductos.find(producto => producto.id == itemIdParams))
        })

        promiseItemProducto.then((productoEncontrado) => {
            setItemProducto(productoEncontrado)
        })
        .catch((error) => {
            console.log('Producto no encontrado')
        })
        .finally(() => setLoading(false))
    }, [itemIdParams])


    return(
        <div className="container" style={styles}>
            <List />
        </div>
    )
}

export default ItemListContainer