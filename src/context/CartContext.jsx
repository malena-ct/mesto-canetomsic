import { useState, createContext, useContext } from 'react'

const CartContext = createContext([])
//el default value es un array vacío, donde se van a ir cargando los productos del carrito

export const  useCartContext = () => useContext(CartContext) 
//el argumento que se le pasa a useContext tiene que ser el elemento del objeto
//en sí mismo, el que en este caso declaramos en const CartContext 
//Un componente que llama a useContext siempre se volverá a renderizar cuando el valor del contexto cambie. (documentación react)


function CartContextProvider({children}) {
    
    const [listaCarrito, setListaCarrito] = useState([])
    //un useState para guardar el estado, iniciando en un array vacio ya que inicialmente
    // el carrito no tiene nada

    const addItem = (item, quantity) => {
        // setListaCarrito([...listaCarrito, item])
        console.log(item)
        console.log(quantity)
    }

    const removeItem = (itemId) => {}

    const clear = () => setListaCarrito([])

    // const isInCart = (id) => {
    //     if (listaCarrito.find(item => item.id == id)) {
    //         return(true)
    //     } else {
    //         return(false)
    //     }
    // }
    return(
        <CartContext.Provider value={{listaCarrito, addItem, removeItem, clear }}>
        {children}
        </CartContext.Provider>
    )

    /*envolviendo el prop children en este elemento, entonces el contexto se le va a aplicar
    a todo lo que esté "por dentro" del elemento, es decir a sus children */
}

export default CartContextProvider

