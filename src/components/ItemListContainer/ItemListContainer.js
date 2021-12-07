import React, {useState, useEffect} from 'react'
import { getFetch } from '../../helpers/getFetch';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';


const ItemListContainer = ({greetings,cartInitial,setCartInitial,cartItems, setCartItems}) => {
    const [productos, setProductos]=useState([])
    const [loading, setLoading]=useState(true)
     
useEffect(() => {
        getFetch
        .then(resp => setProductos(resp))
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false)) 
}, [])
    
   
    return (
        <div>
            <p>{greetings}</p>
            
            {loading ? <h2>Cargando...</h2> : <ItemList items={productos} 
            cartInitial={cartInitial} setCartInitial={setCartInitial} 
            cartItems={cartItems} setCartItems={setCartItems}
            precio={productos.price}/>}
            {/* <ItemList items={items}/> */}
            {/* {productos.map(producto=><li key={producto.id}>{producto.name}</li>)} */}
            
        </div>
        
    )
}

export default ItemListContainer


