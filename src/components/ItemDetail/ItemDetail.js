import React from 'react'
import styles from "../NavBar/NavBar.module.css"

const ItemDetail=({ items})=> {

    return (
        <div className="cartProduct">
            {items.map(item=><div key={item.id}>
            <img src={item.foto} alt="Producto" className={styles.imgProduct} />
            <h3 className="nameProduct">{item.name}, $ {item.price}</h3>
            <h3 className="nameDetail">{item.detail}</h3>
            </div>
            )}
        </div>
    )
}


export default ItemDetail