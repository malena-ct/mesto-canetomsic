import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail/ItemDetail';
import { dataBase } from '../firebase/firebase';
import Spinner from '../components/Spinner/Spinner';


const ItemDetailContainer = () => {

    const [itemProducto, setItemProducto]= useState({});
    const [loading, setLoading] = useState(true);
    const [productoExistente, setProductoExistente] = useState(true);    


    const { id } = useParams();

    useEffect(() => {
        setLoading(true)

        const itemCollection = dataBase.collection('productos')
        const item = itemCollection.doc(id)

        item.get()
        .then( doc => 
            {
                if (!doc.exists){
                    setProductoExistente(false)
                } else {
                    setItemProducto({id:doc.id, ...doc.data()})
                }
               
                
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        )
        .finally(
            setLoading(false)
        )
    }, [id])

    

    return (
        <div className={loading ? 'container loading' : 'container'}>
           { loading 
           ? 
           <Spinner/> 
           : 
           <ItemDetail productoExiste={productoExistente} item={itemProducto}/>}
        </div>
    )
}

export default ItemDetailContainer
