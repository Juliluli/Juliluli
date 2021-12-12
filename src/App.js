import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
//import NavBar1 from './components/NavBar/NavBar1';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useState } from 'react';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  const [cartInitial, setCartInitial]=useState(0)
  const [cartItems, setCartItems]=useState(0)

  return (
    <center>
        <NavBar contador={cartInitial} cartItems={cartItems}/>
        Hola, soy app de e-commerce.
        <ItemListContainer 
        greetings="Hola, soy ItemListContainer que vengo de app!"/>
        <ItemDetailContainer cartInitial={cartInitial} setCartInitial={setCartInitial} cartItems={cartItems} setCartItems={setCartItems}/>
    </center>
  );
}

export default App;