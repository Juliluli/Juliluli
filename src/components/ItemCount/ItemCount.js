import React, {useState} from 'react'
import styles from "../NavBar/NavBar.module.css"
//import CounterInput from 'react-bootstrap-counter';

//addOne, subtractOne,initial,stock
function ItemCount({ inicial, max, value, setValue, setCartInitial}) {

    const addOne = () => {
        value<max ? setValue(prev=>prev + 1) : alert('compra maxima');}
    
    const subtractOne = () => {
        value>inicial ? setValue(prev=>prev - 1) : alert('compra minima');}

    function Alerta() {
        alert('Exelente, agregaste a tu carrito.')
        setCartInitial(value)
    }

    return (
        <div>
            <h2>{value}</h2>
            <button onClick={addOne} className={styles.button1}>+</button>
            <button onClick={subtractOne} className={styles.button1}>-</button>
            {/* <div className={styles.counter}>
                <CounterInput value={initial} min={0} max={stock} onChange={ (value) => { console.log(value) } } />
            </div> */}
            
            <p className={styles.cartItems}>Item(s) available: <b>{max}</b></p>
            <button onClick={Alerta} className={styles.button}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount

// function ItemCount({ stock, initial,  onAdd }) {
//     // Desarrollar lógica
//    }
   
