import React from 'react'
import './ItemListContainer.css';

const ItemListContainer = ({greetings}) => {
    return (
        <div>
            <h1>{greetings}</h1>
        </div>
    )
}

export default ItemListContainer
