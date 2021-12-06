import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';

const ItemListContainer = ({greetings, afterAdd, setafterAdd, inicial, value, setValue, setCartInitial}) => {
    return (
        <div>
            <p>{greetings}</p>
            <ItemCount inicial={inicial} value={value} setValue={setValue} setCartInitial={setCartInitial} afterAdd={afterAdd} setafterAdd={setafterAdd}/>
        </div>
        
    )
}

export default ItemListContainer


