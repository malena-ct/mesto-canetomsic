import React from 'react'
import Item from '../components/Item/Item';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { ListadoProductos } from '../productos/ListadoProductos';
import { dataBase } from '../firebase/firebase';


const ItemListContainer = () => {

    let styles = {
        color: '#0000ff',
        fontSize: '32px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '90px'
    }

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true)
        const itemCollection = dataBase.collection('productos')


        if(categoryId){
            const categoryCollection = itemCollection.where('category', '==', categoryId).limit(10)
            categoryCollection.get()
            .then(
                (querySnapshot) => {
                    setProductos(querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
                }
            )
            .catch(
                (error) => {
                    console.log('error searching items', error);
                }
            )
            .finally(
                () => setLoading(false)
            )
        } else {
            itemCollection.get()
            .then(
                (querySnapshot) => {
                    setProductos(querySnapshot.docs.map(doc => doc.data()))
                }
            )
            .catch(
                (error) => {
                    console.log('error searching items', error);
                }
            )
            .finally(
                () => setLoading(false)
            )
        }

    }, [categoryId])
    

    return(
        <div className="container" style={styles}>
            
            <div className="product-list--highlighted"> 

            {
                loading ? <h2 className="loader-text">Cargando...</h2> : productos.map(prod => <Item itemID={prod.id} item={prod} key={prod.data} >{console.log(prod)} </Item>)
                
            }

            </div>

            
        </div>
    )
}

export default ItemListContainer