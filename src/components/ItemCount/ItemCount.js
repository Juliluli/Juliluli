import React from 'react'
import styles from "../NavBar/NavBar.module.css"
import { useState } from 'react';
//import CounterInput from 'react-bootstrap-counter';

//addOne, subtractOne,initial,stock
function ItemCount({cartInitial, setCartInitial , stock}) {

    const inicial=1
    const [value, setValue]=useState(inicial)
    const [afterAdd, setafterAdd]=useState(stock)

    const addOne = () => {
        value<afterAdd ? setValue(prev=>prev + 1) : alert('compra maxima');}
    
    const subtractOne = () => {
        value>inicial ? setValue(prev=>prev - 1) : alert('compra minima');}

    const reset = () => {
        setValue(inicial)
        //setCartInitial(0) //cartvalue-stock of this
        //setafterAdd(stock) //
    } 

    function AddCart() {
        alert('Exelente, agregaste a tu carrito.')
        setCartInitial(value)
        setafterAdd(afterAdd-value)
    }

    return (
        <div>
            <h2>Add {value} item</h2>
            <button onClick={addOne} className={styles.button1}>+</button>
            <button onClick={subtractOne} className={styles.button1}>-</button>
            <button onClick={reset} className={styles.button2}>reset</button>            
            <p className={styles.cartItems}>Item(s) available: <b>{afterAdd}</b></p>
            <button onClick={AddCart} className={styles.button}>Agregar al carrito</button>
            {/* <div className={styles.counter}>
                <CounterInput value={initial} min={0} max={stock} onChange={ (value) => { console.log(value) } } />
            </div> */}
        </div>
    )
}

export default ItemCount
   
