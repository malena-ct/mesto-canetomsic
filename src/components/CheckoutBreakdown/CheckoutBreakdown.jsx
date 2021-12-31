import React from 'react'
import { useCartContext } from '../../context/CartContext'





const CheckoutBreakdown = () => {


    const {listaCarrito, clear, price} = useCartContext()

    return (
        <div className='container'>
            {
                listaCarrito.length === 0 
                ?
                <h1>El carrito está vacío</h1>
                :
                <>
                {listaCarrito.map(productoEnCarrito =>
                <div className='cart__product-wrapper' key={productoEnCarrito.producto.id}>
                    <div className="cart__img-wrapper">
                        <img src={productoEnCarrito.producto.pictureurl} alt={productoEnCarrito.producto.title} />
                    </div>
                    <div className="cart__product-data">
                        <h3>{productoEnCarrito.producto.title}</h3>
                        <p>Cantidad: {productoEnCarrito.cantidad}</p>
                        <span>Total: ${productoEnCarrito.producto.price*productoEnCarrito.cantidad}</span>
                    </div>
                </div>
                )}
                <h3 className="cart__total-price">Total: ${price()}</h3>
                <button onClick={() => clear()} className="main-btn">Cancelar compra</button>
                </>
            
            }

        </div>
    )
}

export default CheckoutBreakdown
