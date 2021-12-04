import React from 'react'
import { useState } from 'react';

function ItemCount({countNumber}) {

    const [itemCounter, setItemCounter] = useState(1)

    const addCounter = () => setItemCounter(itemCounter + 1)
    const subsCounter = () => {
        if (itemCounter > 1){
            setItemCounter(itemCounter - 1)
        }
    }

    let styles = {
        paddingTop: '30px'
    }

    return (
        <div style={styles}>
            <button onClick={subsCounter}>-</button>
            {countNumber=itemCounter}
            <button onClick={addCounter}>+</button>
        </div>
    )
}

export default ItemCount
