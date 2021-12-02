import React from 'react'
import Item from '../components/Item/Item';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true)
        const getFetch = new Promise((aceptado, rechazado) => {
            setTimeout(() => {
                if(categoryId){
                    aceptado(ListadoProductos.filter(prod => prod.category == categoryId ))
                } else {
                    aceptado(ListadoProductos.slice(0,5))
                    //aceptado(ListadoProductos.slice(-5).reverse()) mostraría los últimos 5, en orden ascendente
                    //como para que tome los productos "más nuevos"
                }
            }, 2000);
    
        })

        getFetch.then((productoEncontrado) => {
            setProductos(productoEncontrado)
        })
        .catch((error) => {
            console.log('Error')
        })
        .finally(() => setLoading(false))
    }, [categoryId])
    

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