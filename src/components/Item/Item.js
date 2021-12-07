import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import styles from "../NavBar/NavBar.module.css"

const Item=({ item,cartInitial,setCartInitial, cartItems, setCartItems,precio})=> {
    // Desarrolla la vista de un ítem donde item es de tipo
    // { id, title, price, pictureUrl }
   
    return (
        <div className="cartProduct">
            <img src={item.foto} alt="Producto" className={styles.imgProducto} />
            <h3 className="nameProduct">{item.name}</h3>
            <h2 className="priceProduct">$ {item.price}</h2>
            <ItemCount cartInitial={cartInitial} setCartInitial={setCartInitial} 
            cartItems={cartItems} setCartItems={setCartItems}
            stock={item.stock} precio={precio}/>
        </div>
    )
}


export default Item
