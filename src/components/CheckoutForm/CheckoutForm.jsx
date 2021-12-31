import React from 'react'
import { useCartContext } from '../../context/CartContext'
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
                <>
                <h2 className='checkout-form__title'>Ingresá tus datos para completar la compra</h2>
                <form onSubmit={tomarOrden} className='checkout-form__form'>
                <div className="checkout-form__form-group">
                    <label className="checkout-form__label" for="name">Nombre </label>
                    <input className="checkout-form__input" maxlength="50" required type="text" onChange={tomarNombreComprador} name="nombre"/>
                </div>
                <div className="checkout-form__form-group">
                    <label className="checkout-form__label" for="apellido">Apellido </label>
                    <input className="checkout-form__input" maxlength="50" required type="text" onChange={tomarApellidoComprador} name="apellido" />
                </div>
                <div className="checkout-form__form-group">
                    <label className="checkout-form__label" for="telefono">Telefono</label>
                
                    <PhoneInput className="checkout-form__input"
                    defaultCountry="AR"
                    placeholder="Ingresá tu número con código de área"
                    value={telefono}
                    onChange={tomarTelefonoComprador}
                    required/>
                </div>

                {
                    usuarioAutenticado !== null
                    ?
                    <>
                    <p className='checkout-form__auth-message'>Estás comprando como {usuarioAutenticado.email}. <br></br> ¿No sos vos? <span onClick={signOutWithGoogle}>Cerrá sesión</span></p>
                    <input type="submit" className="main-btn" value="Realizar compra"  />
                    </>
                    :
                    <>
                    <button className="main-btn" onClick={signInWithGoogle}>Iniciar sesión con Google</button>
                    <p className='checkout-form__small-print'>Autenticamos tu identidad con Google para que tu compra esté segura. No conservamos ningún dato excepto por la dirección de e-mail.</p>
                    </>
                }
                </form>
                </>
            }

        </div>
    )
}

export default Checkout
