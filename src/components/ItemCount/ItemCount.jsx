import React from 'react'

function ItemCount({countNumber,item,addFunction, itemCounter,setItemCounter}) {


    const addCounter = () => setItemCounter(itemCounter + 1)


    let styles = {
        paddingTop: '30px'
    }

    return (
        <div style={styles}>
            {countNumber=itemCounter}
            <button onClick={addCounter}>+</button>

            <button onClick={() => addFunction(item,countNumber)}>Agregar</button>
        </div>
    )
}

export default ItemCount
