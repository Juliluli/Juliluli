import React, {useContext} from "react";
import { CartContext } from "../../context/cartContext";
import styles from "../NavBar/NavBar.module.css";

function Cart() {
  // const {cartInitial,setCartInitial, cartItems,setCartItems} =useContext(ContextApp)
  const {cartList, clearCarrito} = useContext(CartContext)
  return (
    <>
    <h1>Cart</h1>
    {cartList.map(prod=><li className={styles.li}>{prod.name}, Cantidad: {prod.cantidad}, Precio Tot: {prod.cantidad*prod.price} $</li>)}
    {/* <h2>Pay {cartInitial} $ for {cartItems} items.</h2> */}
    <button onClick={clearCarrito}>Vaciar Carrito</button>
    </>
    );
}

export default Cart;
