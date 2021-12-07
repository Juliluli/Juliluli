import React from 'react'
import Item from '../Item/Item'

function ItemList({ items ,cartInitial,setCartInitial,cartItems, setCartItems}) {
    // El componente va a recibir una prop `items` y va a mapear estos `items` al componente `<Item … />`
    return (
        <div className="itemList">
            {/* {items.map(producto=><li key={producto.id}>{producto.name}</li>)} */}
            {items.map(item=><Item key={item.id} item={item} 
            cartInitial={cartInitial} setCartInitial={setCartInitial} 
            cartItems={cartItems} setCartItems={setCartItems}
            precio={item.price}/>)}
        </div>
    )
}

export default ItemList
