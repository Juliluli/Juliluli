import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import styles from "../NavBar/NavBar.module.css";
import Table from "react-bootstrap/Table";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  Timestamp,
  writeBatch,
} from "firebase/firestore";

function Cart() {
  const [idOrder, setIdOrder] = useState("");
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { cartList, removeItem, clearCarrito, precioTotal } =
    useContext(CartContext);

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  const generarOrden = (e) => {
    e.preventDefault();
    const orden = {};
    orden.date = Timestamp.fromDate(new Date());
    orden.buyer = dataForm; //{nombre: 'Lisa', tel: '1234567890', email: 'l@gmail.com'}
    orden.total = precioTotal();
    orden.items = cartList.map((cartItem) => {
      const id = cartItem.id;
      const nombre = cartItem.name;
      const precio = cartItem.price * cartItem.cantidad;
      const cantidad = cartItem.cantidad;

      return { id, nombre, precio, cantidad };
    });

    //generar la Orden
    const db = getFirestore();
    const ordenColeccion = collection(db, "orders");
    addDoc(ordenColeccion, orden)
      .then((resp) => setIdOrder(resp.id))
      .catch((err) => console.log(err))
      .finally(() => {
        clearCarrito();
        setDataForm({
          name: "",
          email: "",
          phone: "",
        });
      });

    const batch = writeBatch(db);

    orden.items.forEach((e) => {
      let docUpdate = doc(db, "Items", e.id);
      let currentStock = cartList.find((item) => item.id === e.id).stock;

      batch.update(docUpdate, {
        stock: currentStock - e.cantidad,
      });
    });
    batch.commit();
    // const outOfStock= [];
    // if (currentStock >= prod.cantidad) {} else {outOfStock.push({ id: e.id, ...e.data()});}
  };

  if (cartList.reduce((total, item) => total + item.cantidad, 0) !== 0) {
    return (
      <>
        <h1>Cart</h1>
        {idOrder.length !== 0 && idOrder}
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
            {cartList.map((prod) => (
              <tr>
                <td>
                  <img
                    src={prod.foto}
                    alt="Producto"
                    className={styles.imgCart}
                  />
                </td>
                <td>{prod.name}</td>
                <td>{prod.cantidad}</td>
                <td>{prod.cantidad * prod.price}</td>
                <td onClick={() => removeItem(prod.id)}>
                  <b>X</b>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <h2>
          Precio total:{" "}
          {cartList.reduce(
            (total, item) => total + item.price * item.cantidad,
            0
          )}{" "}
          $
        </h2>
        <h2>
          Cantidad total:{" "}
          {cartList.reduce((total, item) => total + item.cantidad, 0)}
        </h2>
        <form onSubmit={generarOrden} onChange={handleChange}>
          <input type="text" name="name" placeholder="name" />
          <br />
          <input type="text" name="phone" placeholder="phone" />
          <br />
          <input type="email" name="email" placeholder="email" />
          <br />

          <button>Generar Orden</button>
        </form>
        <button onClick={clearCarrito}>Vaciar Carrito</button>
      </>
    );
  } else {
    return (
      <>
        {idOrder !== "" && (
          <h1>Gracias por su compra. El id de su orden es : {idOrder}</h1>
        )}
        <br></br>
        <h2>No hay items en el carrito</h2>

        <Link to={"/"} className={styles.linktoCart}>
          Volver al home
        </Link>
      </>
    );
  }
}

export default Cart;