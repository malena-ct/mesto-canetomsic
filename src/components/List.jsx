import React from 'react'
import Item from './Item'

export default function List() {

    //listado provisorio de productos
    const listadoDeProductos = [
        {
        id: 1, 
        title: 'Chita - 26 noviembre 2021', 
        description: 'Chita hace su primer concierto en la ciudad de Buenos Aires desde fines de 2019 con este show en Ciudad Cultural Konex.', 
        price: 1300, 
        pictureUrl:'https://www.cckonex.org/wp-content/uploads/2021/10/CHITA-KONEX_900X900px.jpg'
        },
        {
        id: 2, 
        title: 'Sweat', 
        description: 'Esta publicación ofrece una contextualización en profundidad de las obras reunidas en la exposición desde una variedad de perspectivas que tienen en cuenta la polifonía y convivencia de esos mundos artísticos.', 
        price: 4730, 
        pictureUrl:'https://d2hi6w5g1vcm9d.cloudfront.net/publications/_learningGuide/126397/Sweat_website.jpg?mtime=20211019085337'
        }
    ]

    return (
        // en este componente va a estar el map, que va a mapear el json de productos
        // componentes <List>
        
        <div className="product-list">
            {       
                listadoDeProductos.map(prod => 
                        <Item 
                        key={prod.id}
                        productImg={prod.pictureUrl} 
                        productName={prod.title} 
                        productDescription={prod.description} 
                        productPrice={prod.price}/>
                    )
            }
            
        </div>
    )
}
