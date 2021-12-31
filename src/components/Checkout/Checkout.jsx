import React from 'react'
// import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useCartContext } from '../../context/CartContext'
import firebase from "firebase/app";
import "firebase/firestore";
import { dataBase} from '../../firebase/firebase';
import CheckoutBreakdown from '../CheckoutBreakdown/CheckoutBreakdown';
import CheckoutForm from '../CheckoutForm/CheckoutForm';






const Checkout = () => {


    const {listaCarrito, price, clear} = useCartContext()

    const [idOrder, setIdOrder] = useState('')

    const [nombreComprador, setNombreComprador] = useState()
    const [apellidoComprador, setApellidoComprador] = useState()
    const [telefonoComprador, setTelefonoComprador] = useState()
    const [pedidoRealizado, setpedidoRealizado] = useState(false)
    const [mensajePedido, setMensajePedido] = useState('')

    const [user, setUser] = useState(null);

    useEffect(() => {
      firebase.auth().onAuthStateChanged(user => {
        setUser(user);
      })
    }, [])




    const generarOrden = (e)=> {
        e.preventDefault()
        const orden = {}
        orden.date = firebase.firestore.Timestamp.fromDate(new Date());

        orden.buyer = {
            nombre: nombreComprador, 
            apellido: apellidoComprador, 
            telefono: telefonoComprador,
            email: user.email
        }

        orden.total =  price()

        orden.items = listaCarrito.map(item => {
            const id = item.producto.id
            const nombre = item.producto.title
            const precio = item.producto.price

            return {id, nombre, precio}
        })

        dataBase.collection('pedidos').add(orden)
        .then(resp => setIdOrder(resp.id))
        .catch(
            setMensajePedido('El pedido no pudo procesarse. Intentá nuevamente más tarde')
        )
        .finally(
            () => {
                setpedidoRealizado(true)
                clear()
                setMensajePedido('El pedido fue realizado con éxito')
            }

        )
        

    }

    let styles = {
        display: "flex",
    }


    return (
        <>
            {
                pedidoRealizado === false ?
                <div className='checkout__container' style={styles} >
                    <div className="checkout__breakdown-wrapper">
                        <CheckoutBreakdown/>
                    </div>
                    <div className="checkout__user-details-wrapper">
                        <CheckoutForm
                        tomarOrden={generarOrden}
                        tomarNombreComprador={e => setNombreComprador(e.target.value)} 
                        tomarApellidoComprador={e => setApellidoComprador(e.target.value)} 
                        telefono={telefonoComprador}
                        tomarTelefonoComprador={setTelefonoComprador}
                        usuarioAutenticado={user}
                    /> 
                    </div>
                </div>
                :
                <>
                <h1>{mensajePedido}</h1>
                <p>Te enviaremos un e-mail a {user.email} con todos los datos para que realices el pago.</p>
                <h2>ID del pedido: {idOrder}</h2>
                </>
            
            }

        </>
    )
}

export default Checkout
