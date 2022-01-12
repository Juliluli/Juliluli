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
      <button disabled={value === 0} onClick={()=>onAdd(value)} className={styles.button3}>
        Agregar {value} al carrito
      </button>
    </div>
  );
}

export default ItemCount;
