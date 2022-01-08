import React, {useContext, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import styles from "../NavBar/NavBar.module.css";
import Table from "react-bootstrap/Table";
import { getFirestoreApp } from "../../config/getFirestoreApp";
import { docs, documentId, getDoc, getDocs, query, where, data } from "firebase/firestore";
import {  addDoc, collection, doc, getFirestore, Timestamp, updateDoc, writeBatch } from "firebase/firestore"



function Cart() {
  // const {cartInitial,setCartInitial, cartItems,setCartItems} =useContext(ContextApp)
  const [idOrder, setIdOrder] = useState('')
  //const [isOrder, setIsOrder] = useState([])
  const [dataForm, setDataForm] = useState({
    name:'', email:'', phone:''
  })

  const {cartList, removeItem, clearCarrito, precioTotal} = useContext(CartContext)


  const handleChange = (e) => {
    //return e.target.name
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
  })
}

  const generarOrden = (e) =>{
    e.preventDefault()
    // Nuevo objecto
    const orden = {}
    orden.date = Timestamp.fromDate(new Date())
    orden.buyer = dataForm //{nombre: 'Lisa', tel: '1234567890', email: 'l@gmail.com'}
    orden.total = precioTotal();
    orden.items = cartList.map(cartItem => {
      const id = cartItem.id;
      const nombre = cartItem.name;
      const precio = cartItem.price * cartItem.cantidad;
      const cantidad = cartItem.cantidad
      
      return {id, nombre, precio, cantidad}   
  })

    //generar la Orden
    const db = getFirestore()
    const ordenColeccion = collection(db, 'orders')
    addDoc(ordenColeccion, orden)
    .then(resp => setIdOrder(resp.id))
    .catch(err => console.log(err))
    .finally(()=> {
        clearCarrito()
        setDataForm({
            name:"", email:"", phone:""
        })
    })


    //modificar update
    // const docModificar = doc(db, 'items', '4QQcKTAfy2tVekWXzcog')
    // const docModificar1 = doc(db, 'items', 'IQ0lueZ9FXvVb33aZVd8')
    // updateDoc(docModificar, {
    //   stock: 19
    // })
    // .then(resp => console.log('modificado'))
    // .catch(err => console.log(err))
    

    // Escritura por lotes
    // const batch = writeBatch(db)
    // batch.update(docModificar, {
    //   stock: 19
    // })
    // batch.update(docModificar1, {
    //   stock: 2
    // })
    // batch.commit()

  //console.log(orden)


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const batch = writeBatch(db)
const outOfStock= [];

orden.items.forEach((prod) => {
  getDoc(doc(db, 'Items', prod.id)).then((docSnap) => {
    if (docSnap.data().stock >= prod.cantidad) {
      //console.log(docSnap.data().stock)
      //console.log(typeof docSnap.id)
      //console.log(docSnap.id)
      //console.log(prod.cantidad)
      const stockupdate= docSnap.data().stock - prod.cantidad;
      batch.update(doc(db, 'Items', docSnap.id), {
        stock: stockupdate
      });
      batch.commit();
    } else {
      outOfStock.push({ id: docSnap.id, ...docSnap.data()});
    }
  });
})

//console.log(orden.items)
//console.log(outOfStock)

  // const colleccionNoti = collection(db, 'Items')
  // const queryActualizarStock = query(
  //   colleccionNoti, where( documentId() , 'in', cartList.map(it => it.id))          
  // )
  // const batch = writeBatch(db)

  // getDocs(queryActualizarStock)  
  // .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
  //   stock: resp.data().stock - cartList.find(item => item.id === resp.id).cantidad
  //  }) ))

  // batch.commit()


  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, " => ", doc.data())
  // });
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// const itemsToUpdate = db.collection('Items').where(
//     documentId() , 'in', cartList.map(i=> i.id)//[id1, id2....]
// )
// const batch = db.batch();
// itemsToUpdate.get()

// .then( collection=>{
//     collection.docs.forEach(docSnapshot => {
//         batch.update(docSnapshot.ref, {
//             stock: docSnapshot.data().stock - cartList.find(item => item.id === docSnapshot.id).cantidad
//         })
//     })

//     batch.commit().then(res =>{
//         console.log('se actualizo')
//     })
// })


  }
  // function onRemove() {
  //   removeItem({...cartList});
  // }

  const itemsInCart = cartList.reduce((total, item)=>total+(item.cantidad),0)
  //console.log(itemsInCart)
  
  if (cartList.reduce((total, item)=>total+(item.cantidad),0)!==0) {

    return (
      <>
      <h1>Cart</h1>
      {idOrder.length !== 0 && idOrder}
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
      <h2>Precio total: {cartList.reduce((total, item)=>total+(item.price*item.cantidad),0)} $</h2>
      <h2>Cantidad total: {cartList.reduce((total, item)=>total+(item.cantidad),0)}</h2>
      <form 
          onSubmit={generarOrden}
          onChange={handleChange}
          >
            <input 
                type='text' name='name' placeholder='name' 
                //value={formData.name}
                /><br />
            <input 
                type='text' name='phone' placeholder='phone' 
                //value={formData.phone}
                /><br />
            <input 
                type='email' name='email' placeholder='email' 
                //value={formData.email}
                /><br />
           
            <button>Generar Orden</button>
      </form>
      <button onClick={clearCarrito}>Vaciar Carrito</button>
      </>
      );
  }

  else {
    return (
      
      <>

      {idOrder!=='' && <h1>Gracias por su compra. El id de su orden es : {idOrder}</h1>}
      {/* {idOrder!==''&& <h1>El id de su orden es :</h1>}
      {idOrder!==''&& <h1><br>{idOrder}</br></h1>} */}
      <br></br>
    <h2>No hay items en el carrito</h2>

    <Link to={"/"} className={styles.linktoCart} >Volver al home</Link>
    </>
    );
  }

}

export default Cart;
