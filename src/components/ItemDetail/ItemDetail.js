import React from "react";
import styles from "../NavBar/NavBar.module.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";

const ItemDetail = ({
  item,
  cartInitial,
  setCartInitial,
  cartItems,
  setCartItems
}) => {

  const inicial = 1;
  const [value, setValue] = useState(inicial);
  const [stockafterAdd, setStockafterAdd] = useState(item.stock);
  const [gotoCart, setgotoCart] = useState(false);

  // onAdd(valuetoadd) {
  //   //...
  // }

  function onAdd(value) {
    alert(`Exelente, agregaste ${value} a tu carrito.`);
    setCartInitial(cartInitial + value * item.price);
    setCartItems(cartItems + value);
    setStockafterAdd(stockafterAdd - value);
    setValue(inicial);
    setgotoCart(true);
  }


  return (
    <div>
      <div key={item.id}>
        <h1>Detalles Item {item.id}</h1>
        <img src={item.foto} alt="Producto" className={styles.imgProduct} />
        <h3 className="nameProduct">
          {item.name}, $ {item.price}
        </h3>
        <h3 className="nameDetail">{item.detail}</h3>

        {!gotoCart ? <ItemCount
          cartInitial={cartInitial}
          setCartInitial={setCartInitial}
          cartItems={cartItems}
          setCartItems={setCartItems}
          stock={item.stock}
          precio={item.price}
          onAdd={onAdd}
          inicial={inicial}
          value={value}
          setValue={setValue}
          stockafterAdd={stockafterAdd}
          setStockafterAdd={setStockafterAdd}
        /> : <Link to={"/cart"} className={styles.linktoCart}>Ir al carrito</Link>
      }
        <Link to={"/"} className={styles.linktoCart}>Volver al home</Link>
      </div>
    </div>
  );
};

export default ItemDetail;

// {items.map(item=><div key={item.id}>
//     <img src={item.foto} alt="Producto" className={styles.imgProduct} />
//     <h3 className="nameProduct">{item.name}, $ {item.price}</h3>
//     <h3 className="nameDetail">{item.detail}</h3>
//     </div>
//     )}
