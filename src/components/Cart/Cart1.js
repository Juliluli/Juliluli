import {  addDoc, collection, doc, getDocs, getFirestore, Timestamp, updateDoc, writeBatch } from "firebase/firestore"
import { useContext, useState } from "react"
import { CartContext } from "../../context/cartContext"



function Cart() {
    const [idOrder, setIdOrder] = useState('')
    const [dataForm, setDataForm] = useState({
        name:"", email:"", phone:""
    })
    const {cartList, removeItem, clearCarrito, precioTotal} = useContext(CartContext)



    const handleChange = (e) => {
        // console.log(e.target.name)
        // console.log(e.target.value)
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }
    console.log(dataForm)


    const generarOrden = (e) =>{
        e.preventDefault()  
        
        
        // Nuevo objeto de orders    
        let orden = {}
        orden.date = Timestamp.fromDate(new Date())
        //firebase.firestore.Timestamp.fromDate(new Date()); 

        orden.buyer = dataForm
        orden.total = precioTotal();

        orden.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.name;
            const precio = cartItem.price * cartItem.cantidad;
            
            return {id, nombre, precio}   
        })

        // Generar la orden 
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

        // modificar update
        // const docModifcar = doc(db, 'items', 'HwIOrcsrOowvI3SwvnC1')
        // const docModifcar1 = doc(db, 'items', 'KoQl02tM8vf2JEURhQk3')
        // updateDoc(docModifcar, {
        //     stock: 99
        // })
        // .then(resp => console.log('modificado'))

        // Escritura por lotes
        // const batch = writeBatch(db)
        // batch.update(docModifcar, {
        //     stock: 90
        // })
        // batch.update(docModifcar1, {
        //     stock: 99
        // })
        // batch.commit()
        // console.log(orden)


        const cleccionNoti = collection(db, 'Items')
        const queryActulizarStock = query(
            cleccionNoti, where( documentId() , 'in', cartList.map(it => it.id))          
        )

        const batch = writeBatch(db)

       
        //console.log(queryActulizar)
        getDocs(queryActulizarStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
            stock: resp.data().stock - cartList.find(item => item.id === resp.id).cantidad
        }) ))

        batch.commit()


    }

if (cartList.reduce((total, item)=>total+(item.cantidad),0)!==0) {

    return (
        <div>
            {idOrder.length !== 0 && idOrder}
            {  cartList.map(prod=> <li>{prod.name}   {prod.cantidad}</li>) }
            <form 
                onSubmit={generarOrden} 
                onChange={handleChange} 
            >
                <input 
                    type='text' 
                    name='name' 
                    placeholder='name' 
                    value={dataForm.name}
                /><br />
                <input 
                    type='text' 
                    name='phone'
                    placeholder='tel' 
                    value={dataForm.phone}
                /><br/>
                <input 
                    type='email' 
                    name='email'
                    placeholder='email' 
                    value={dataForm.email}
                /><br/>
                <button>Generar Orden</button>
            </form>
            <button onClick={clearCarrito} >Vaciar Carrito</button>

        </div>
    )
}

export default Cart
