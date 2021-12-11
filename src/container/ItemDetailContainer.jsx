import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail/ItemDetail';
import { dataBase } from '../firebase/firebase';

const ItemDetailContainer = () => {

    const [itemProducto, setItemProducto]= useState({});
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        setLoading(true)
        const itemCollection = dataBase.collection('productos')
        const item = itemCollection.doc(id)

        console.log(item)
        item.get()
        .then( doc => 
            {
                if (!doc.exists){
                    console.log('no existe');return;
                }
                setItemProducto({id:doc.id, ...doc.data()})
            }
        )
        .catch(
            error => console.log(error)
        )
        .finally(
            setLoading(false)
        )
    }, [id])

    

    return (
        <div className="container">
           { loading ? <h2 className="loader-text">Cargando...</h2> : <ItemDetail item={itemProducto}/>}
        </div>
    )
}

export default ItemDetailContainer
