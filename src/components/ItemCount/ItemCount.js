import React from "react";
import styles from "../NavBar/NavBar.module.css";
import { useState } from "react";
//import CounterInput from 'react-bootstrap-counter';

//addOne, subtractOne,initial,stock
function ItemCount({
  cartInitial,
  setCartInitial,
  cartItems,
  setCartItems,
  stock,
  precio,
  onAdd,
  inicial,
  value,
  setValue,
  stockafterAdd,
  setStockafterAdd
}) {


  const addOne = () => {
    value < stockafterAdd ? setValue((prev) => prev + 1) : alert("compra maxima");
  };

  const subtractOne = () => {
    value >= inicial ? setValue((prev) => prev - 1) : alert("compra minima");
  };

  const reset = () => {
    setValue(inicial);
    //setCartInitial(0) //cartvalue-stock of this
    //setafterAdd(stock) //
  };


  function ClearCart() {
    if (cartItems >= value) {
      setCartInitial(cartInitial - value * precio);
      setCartItems(cartItems - value);
      setStockafterAdd(stockafterAdd + value);
      setValue(inicial);
    } else {
      alert("no se puede borrar esta cantidad del carrito");
      setValue(inicial);
    }
  }

  return (
    <div>
      <h2>Add {value} item</h2>
      <button onClick={addOne} className={styles.button1}>
        +
      </button>
      <button onClick={subtractOne} className={styles.button1}>
        -
      </button>
      <div className={styles.button2div}>
        <button onClick={reset} className={styles.button2}>
          reset
        </button>
      </div>
      <p className={styles.cartItems}>
        Item(s) available: <b>{stockafterAdd}</b>
      </p>
      <button disabled={value == 0} onClick={()=>onAdd(value)} className={styles.button3}>
          {/* en realidad se podria simplemente escribir onClick={onAdd} */}
        Agregar {value} al carrito
      </button>
      <button disabled={value == 0} onClick={ClearCart} className={styles.button3}>
        Borrar {value} del carrito
      </button>
      {/* <div className={styles.counter}>
                <CounterInput value={initial} min={0} max={stock} onChange={ (value) => { console.log(value) } } />
            </div> */}
    </div>
  );
}

export default ItemCount;
