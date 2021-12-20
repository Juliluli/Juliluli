import React, {useContext} from "react";
import styles from "../NavBar/NavBar.module.css";
import { ContextApp1 } from "../ItemDetail/ItemDetail";

function ItemCount() {

  const {inicial, value, stockafterAdd, onAdd, addOne, subtractOne,reset} = useContext(ContextApp1)

  return (
    <div>
      <h2>Add {value} item</h2>
      <button disabled={value > stockafterAdd} onClick={addOne} className={styles.button1}>
        +
      </button>
      
      <button disabled={value < inicial} onClick={subtractOne} className={styles.button1}>
        -
      </button>
      <div className={styles.button2div}>
        <button onClick={reset} className={styles.button2}>
          reset
        </button>
      </div>
      {/* <p className={styles.cartItems}>
        Item(s) available: <b>{stockafterAdd}</b>
      </p> */}
      <button disabled={value == 0} onClick={()=>onAdd(value)} className={styles.button3}>
          {/* en realidad se podria simplemente escribir onClick={onAdd} */}
        Agregar {value} al carrito
      </button>
      {/* <button disabled={value == 0} onClick={ClearCart} className={styles.button3}>
        Borrar {value} del carrito
      </button> */}
      {/* <div className={styles.counter}>
                <CounterInput value={initial} min={0} max={stock} onChange={ (value) => { console.log(value) } } />
            </div> */}
    </div>
  );
}

export default ItemCount;
