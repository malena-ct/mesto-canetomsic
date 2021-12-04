import { useState, createContext, useContext } from 'react'

const CartContext = createContext([])
//el default value es un array vacío, donde se van a ir cargando los productos del carrito

export const  useCartContext = () => useContext(CartContext)
//el argumento que se le pasa a useContext tiene que ser el elemento del objeto
//en sí mismo, el que en este caso declaramos en const CartContext
//Un componente que llama a useContext siempre se volverá a renderizar cuando el valor del contexto cambie. (documentación react)


function CartContextProvider({children}) {

    const [listaCarrito, setListaCarrito] = useState([])
    //un useState para guardar el estado del carrito, iniciando en un array vacio
    //ya que inicialmente el carrito no tiene nada

    function addItem(itemElement, quantity) {

        const itemAAgregar = {
            producto: itemElement,
            cantidad: quantity
        }

        // const isInCart = (itemId) => {

        //     if(itemElement.id === itemId) {
        //         console.log('hola')
        //     }
            
        // }
        
        // listaCarrito.find(isInCart)

        // if (isInCart){
            setListaCarrito([...listaCarrito, itemAAgregar])
        // } else {
        //     console.log('ya esta en el carrito')
        // }

        
        console.log(listaCarrito)
    }

    const removeItem = (itemElement,itemId) => {
        // const productoSeleccionado = listaCarrito.find(element => element.id == itemId)
        // console.log(productoSeleccionado)
        // itemId = itemElement.id


        // listaCarrito.indexOf()

    }

    const clear = () => setListaCarrito([])


    return(
        <CartContext.Provider value={{listaCarrito, addItem, removeItem, clear }}>
        {children}
        </CartContext.Provider>
    )

    /*envolviendo el prop children en este elemento, entonces el contexto se le va a aplicar
    a todo lo que esté "por dentro" del elemento, es decir a sus children */
}

export default CartContextProvider

