import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'


const CheckoutBreakdown = () => {


    const {listaCarrito, clear, price} = useCartContext()

    return (
            <>
            {
                listaCarrito.length === 0 
                ?
                <div className="checkout__state-message">
                    <h1>El carrito está vacío</h1>
                    <Link className="main-btn" to="/">Explorar el sitio</Link>
                </div>
                :
                
                <div className='checkout-breakdown'>
                    <h1>Tu pedido</h1>
                    {listaCarrito.map(productoEnCarrito =>
                    <div className='cart__product-wrapper' key={productoEnCarrito.producto.id}>
                        <div className="cart__img-wrapper">
                            <img src={productoEnCarrito.producto.pictureurl} alt={productoEnCarrito.producto.title} />
                        </div>
                        <div className="cart__product-data">
                            <Link className="cart__product-link" to={`/item/${productoEnCarrito.producto.id}`}> <h3>{productoEnCarrito.producto.title}</h3></Link>
                            <p>Cantidad: {productoEnCarrito.cantidad}</p>
                            <span>Total: ${productoEnCarrito.producto.price*productoEnCarrito.cantidad}</span>
                        </div>
                    </div>
                    )}
                    <h3 className="cart__total-price">Total: ${price()}</h3>
                <button onClick={() => clear()} className="main-btn">Cancelar compra</button>
                </div>
            
            }
            </>

    )
}

export default CheckoutBreakdown
