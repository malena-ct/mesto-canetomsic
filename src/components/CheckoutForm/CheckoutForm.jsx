import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { useState } from 'react';
import "firebase/firestore";
import {signInWithGoogle, signOutWithGoogle } from '../../firebase/firebase';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'



const Checkout = ({tomarOrden, tomarNombreComprador, tomarApellidoComprador, tomarTelefonoComprador, telefono, usuarioAutenticado }) => {
    
    const {listaCarrito} = useCartContext()


    return (
        <div className='container' >
            {
                listaCarrito.length === 0
                ?
                <></>
                :
                <form onSubmit={tomarOrden} >
                <label for="name">Nombre</label>
                <input maxlength="50" required type="text" onChange={tomarNombreComprador} name="nombre"/>
                <label for="apellido">Apellido</label>
                <input maxlength="50" required type="text" onChange={tomarApellidoComprador} name="apellido" />
                <label for="telefono">Telefono</label>
                
                <PhoneInput
                defaultCountry="AR"
                placeholder="Ingresá tu número con código de área"
                value={telefono}
                onChange={tomarTelefonoComprador}
                required/>
                {
                    usuarioAutenticado !== null
                    ?
                    <>
                    <p>Estás comprando como {usuarioAutenticado.email} . ¿No sos vos? <span onClick={signOutWithGoogle}>Cerrá sesión</span></p>
                    <input type="submit"  />
                    </>
                    :
                    <button className="button" onClick={signInWithGoogle}><i className="fab fa-google"></i>Sign in with google</button>
                }
                </form>
            }

        </div>
    )
}

export default Checkout
