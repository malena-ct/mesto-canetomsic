import { useState, createContext, useContext } from 'react'

const CartContext = createContext([])
//el default value es un array vacío, donde se van a ir cargando los productos del carrito

export const  useCartContext = () => useContext(CartContext)
//el argumento que se le pasa a useContext tiene que ser el elemento del objeto
//en sí mismo, el que en este caso declaramos en const CartContext
//Un componente que llama a useContext siempre se volverá a renderizar cuando el valor del contexto cambie. (documentación react)


function CartContextProvider({children}) {

    const [listaCarrito, setListaCarrito] = useState([])

    function addItem(itemElement, quantity) {

        const itemAAgregar = {
            producto: itemElement,
            cantidad: quantity
        }

        const isInCart = (itemId) => {
            if (listaCarrito.find(itemElement => itemElement.producto.id === itemId)){
                return itemId 
            } else {
                return false
            }
        }
        

        if(isInCart(itemElement.id) === false ) {
            setListaCarrito([...listaCarrito, itemAAgregar])
        } else {
            
            const productoRepetido = listaCarrito.findIndex(productoSensado => productoSensado.producto.id === itemAAgregar.producto.id);
            
            const newArray = Array.from(listaCarrito)

            listaCarrito[productoRepetido].cantidad += itemAAgregar.cantidad;
            
            setListaCarrito(newArray)

        }

    }

    const price = () => {
        return listaCarrito.reduce((productosAcumulados,producto) => productosAcumulados + (producto.producto.price*producto.cantidad), 0)
    }


    const removeItem = (itemId) => {

        const productosRestantes = listaCarrito.filter(itemElement => itemElement.producto.id !== itemId)
        setListaCarrito(productosRestantes)
    }

    const clear = () => setListaCarrito([])


    return(
        <CartContext.Provider value={{listaCarrito, addItem, removeItem, clear, price}}>
        {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider

