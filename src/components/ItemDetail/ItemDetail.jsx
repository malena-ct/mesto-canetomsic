import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import { NavLink } from 'react-router-dom'


const ItemDetail = ({item, productoExiste}) => {
    //contexto
    const { addItem, removeItem } = useCartContext()

    //estado contador
    const [count, setCount] = useState(1)

    //intercambio de los componentes para agregar items o terminar la compra
    const [button, setButton] = useState('agregar')
    const terminarCompra = () => setButton('terminar') 
    const agregarACompra = () => setButton('agregar') 


    //
    function onAdd(item, cantidad){
        addItem(item, cantidad)
        terminarCompra()
    }


    function onRemove(item){
        removeItem(item.id)
        agregarACompra()
    }
    

    return (
        <div className="product-detail__detail">
            {
                productoExiste
                ?
                <>
                <Link className="product-detail__category" to={`/category/${item.category}`}>Categoría: {item.category}</Link>
                <div className="product-detail__data">
                    <figure className="product-detail__img-wrapper">
                        <img src={item.pictureurl} alt={item.description} title={item.description} />
                    </figure>
                    <div className="product-detail__info-wrapper">
                        <h2 className="product-detail__title">{item.title}</h2>
                        <p className="product-detail__description">{item.description}</p>
                        <span className="product-detail__price">${item.price}</span>
                        {
                            button === 'agregar' ?
                            <ItemCount item={item} itemCounter={count} setItemCounter={setCount} addFunction={onAdd} />
                            :
                            <><button className="main-btn"><Link to="/Cart">Ver Carrito</Link></button><button onClick={() => onRemove(item)} className="main-btn">Quitar del carrito</button></>
                            
                        }

                    </div>
                </div>
                </>
                :
                <>
                <h2>El producto no está disponible.</h2>
                <NavLink className="main-btn" to="/">Explorar el sitio</NavLink>
                </>
                
            }

        </div>
    )
}

export default ItemDetail