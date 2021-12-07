import React from 'react'
import styles from "../NavBar/NavBar.module.css"

const ItemDetail=({ items})=> {

    return (
        <div>
            <div key={items.id}></div>
            <h1>Detalles Item {items.id}</h1>
            <img src={items.foto} alt="Producto" className={styles.imgProduct} />
            <h3 className="nameProduct">{items.name}, $ {items.price}</h3>
            <h3 className="nameDetail">{items.detail}</h3>
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