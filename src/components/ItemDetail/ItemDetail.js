import React from 'react'
import styles from "../NavBar/NavBar.module.css"
import ItemCount from '../ItemCount/ItemCount'
import {Link } from 'react-router-dom'

const ItemDetail=({ item, cartInitial, setCartInitial , cartItems, setCartItems})=> {

    return (
        <div>
            <div key={item.id}>
            <h1>Detalles Item {item.id}</h1>
            <img src={item.foto} alt="Producto" className={styles.imgProduct} />
            <h3 className="nameProduct">{item.name}, $ {item.price}</h3>
            <h3 className="nameDetail">{item.detail}</h3>
            <ItemCount cartInitial={cartInitial} setCartInitial={setCartInitial} 
            cartItems={cartItems} setCartItems={setCartItems}
            stock={item.stock} precio={item.price}/> 
            </div>
        </div>
            )
}

export default ItemDetail

// {items.map(item=><div key={item.id}>
//     <img src={item.foto} alt="Producto" className={styles.imgProduct} />
//     <h3 className="nameProduct">{item.name}, $ {item.price}</h3>
//     <h3 className="nameDetail">{item.detail}</h3>
//     </div>
//     )}