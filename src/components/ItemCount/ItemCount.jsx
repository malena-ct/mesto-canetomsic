import React from 'react'

function ItemCount({countNumber,item,addFunction, itemCounter,setItemCounter}) {


    const addCounter = () => setItemCounter(itemCounter + 1)
    const subCounter = () => {
        if (itemCounter >= 1)setItemCounter(itemCounter - 1)
        }


    let styles = {
        paddingTop: '30px'
    }

    return (
        <div style={styles}>
            <button onClick={subCounter}>-</button>
            {countNumber=itemCounter}
            <button onClick={addCounter}>+</button>

            <button className="product-detail__add" onClick={() => addFunction(item,countNumber)}>Agregar</button>
        </div>
    )
}

export default ItemCount
