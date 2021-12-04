import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';

const ItemListContainer = ({greetings, max, inicial, value, setValue, setCartInitial}) => {
    return (
        <div>
            <p>{greetings}</p>
            <ItemCount max={max} inicial={inicial} value={value} setValue={setValue} setCartInitial={setCartInitial}/>
        </div>
        
    )
}

export default ItemListContainer


