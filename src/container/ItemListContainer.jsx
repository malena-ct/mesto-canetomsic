import React from 'react'
import Item from '../components/Item/Item';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dataBase } from '../firebase/firebase';
import Spinner from '../components/Spinner/Spinner';


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

        const itemCollection = dataBase.collection('productos').limit(10)

        const categoryCollection = categoryId ? itemCollection.where('category', '==', categoryId) : itemCollection;

        categoryCollection.get()
        .then(
            (querySnapshot) => {
                setProductos(querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        )
        .finally(
            () => setLoading(false)
        )

    }, [categoryId])
    

    return(
        <div className={loading ? 'container loading' : 'container'} style={styles}>
            
            
            {
                loading ? 
                <Spinner/> 
                : 
                <div className="product-list--highlighted"> 
                {productos.map(prod => <Item itemID={prod.id} item={prod} key={prod.data} ></Item>)}
                </div>
                
            }

            

            
        </div>
    )
}

export default ItemListContainer