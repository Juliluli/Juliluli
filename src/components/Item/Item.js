import React from "react";
import styles from "../NavBar/NavBar.module.css";
import { Link } from "react-router-dom";

const Item = ({ item }) => {

  return (
    <div className="cartProduct">
      <img src={item.foto} alt="Producto" className={styles.imgProducto} />
      <h3 className="nameProduct">{item.name}</h3>
      <h2 className="priceProduct">$ {item.price}</h2>
      <Link to={`/item/${item.id}`}>
        <button className={styles.button}>Detalle</button>
      </Link>
    </div>
  );
};

export default Item;
