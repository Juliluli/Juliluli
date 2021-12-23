import React, {useContext, useState} from "react";
import { CartContext } from "../../context/cartContext";
import styles from "../NavBar/NavBar.module.css";
import Table from "react-bootstrap/Table";

function Cart() {
  // const {cartInitial,setCartInitial, cartItems,setCartItems} =useContext(ContextApp)
  const {cartList, removeItem, clearCarrito} = useContext(CartContext)

  const [cartTot, setCartTot] = useState()

  // function onRemove() {
  //   removeItem({...cartList});
  // }

  return (
    <>
    <h1>Cart</h1>
    {/* {cartList.map(prod=><li className={styles.li}>{prod.name}, Cantidad: {prod.cantidad}, Precio Tot: {prod.cantidad*prod.price} $</li>)} */}
    {/* <h2>Pay {cartInitial} $ for {cartItems} items.</h2> */}
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>Image</th>
      <th>Pescado</th>
      <th>Cantidad</th>
      <th>Precio ($)</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
      {cartList.map(prod=><tr>
              <td><img src={prod.foto} alt="Producto" className={styles.imgCart} /></td>
              <td>{prod.name}</td>
              <td>{prod.cantidad}</td>
              <td>{prod.cantidad*prod.price}</td>
              <td onClick={()=>removeItem(prod.id)}><b>X</b></td>
            </tr>)}
  </tbody>
</Table>
    <h2>Precio total: {cartList.reduce((total, item)=>total+(item.price*item.cantidad),0)}</h2>
    <button onClick={clearCarrito}>Vaciar Carrito</button>
    </>
    );
}

export default Cart;
