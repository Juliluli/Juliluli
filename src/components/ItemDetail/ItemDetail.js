import React, {useContext,createContext} from "react";
import styles from "../NavBar/NavBar.module.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ContextApp } from "../../App";
import { ContextApp2 } from "../ItemDetailContainer/ItemDetailContainer";
import { CartContext } from "../../context/cartContext";

export const ContextApp1=createContext([])

const ItemDetail = () => {

  // const {cartInitial,setCartInitial, cartItems,setCartItems} =useContext(ContextApp)
  const {detalle} =useContext(ContextApp2)
  const {cartList, addItem} =useContext(CartContext)

  const inicial = 1;
  const [value, setValue] = useState(inicial);
  const [stockafterAdd, setStockafterAdd] = useState(detalle.stock);
  const [gotoCart, setgotoCart] = useState(false);

  const addOne = () => {
    value < stockafterAdd ? setValue((prev) => prev + 1) : alert("compra maxima");
  };

  const subtractOne = () => {
    value >= inicial ? setValue((prev) => prev - 1) : alert("compra minima");
  };

  function onAdd() {
    // console.log(value)
    // setCartInitial(cartInitial + value * detalle.price);
    // setCartItems(cartItems + value);
    // setStockafterAdd(stockafterAdd - value);
    
      addItem({...detalle, cantidad:value});
      alert(`Exelente, agregaste ${value} a tu carrito.`);
      setValue(inicial);
      setgotoCart(true);
     
  }
  //console.log(cartList)

  // function ClearCart() {
  //   if (cartItems >= value) {
  //     setCartInitial(cartInitial - value * detalle.price);
  //     setCartItems(cartItems - value);
  //     setStockafterAdd(stockafterAdd + value);
  //     setValue(inicial);
  //   } else {
  //     alert("no se puede borrar esta cantidad del carrito");
  //     setValue(inicial);
  //   }
  // }

  const reset = () => {
    setValue(inicial);
  };

  return (
    <div>
      <ContextApp1.Provider value={{inicial, value, setValue, stockafterAdd, setStockafterAdd,
        onAdd, addOne, subtractOne,reset}}>

      <div key={detalle.id}>
        <h1>Detalles Item {detalle.id}</h1>
        <img src={detalle.foto} alt="Producto" className={styles.imgProduct} />
        <h3 className="nameProduct">
          {detalle.name}, $ {detalle.price}
        </h3>
        <h3 className="nameDetail">{detalle.detail}</h3>

        {!gotoCart ? <ItemCount/> 
        : 
        <Link to={"/cart"} className={styles.linktoCart}>Ir al carrito</Link>
        }
        <Link to={"/"} className={styles.linktoCart} >Volver al home</Link>
      </div>
      </ContextApp1.Provider>
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
