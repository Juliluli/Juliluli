import React from 'react'
import ItemCount from '../ItemCount/ItemCount'


const Item=({ item,cartInitial,setCartInitial})=> {
    // Desarrolla la vista de un ítem donde item es de tipo
    // { id, title, price, pictureUrl }
   
    return (
        <div clasName="cartProduct">
            <img src={item.foto} alt="Producto" className="imgProduct" />
            <h3 className="nameProduct">{item.name}</h3>
            <h2 className="priceProduct">$ {item.price}</h2>
            <ItemCount cartInitial={cartInitial} setCartInitial={setCartInitial} stock={item.stock}/>
        </div>
    )
}


export default Item
