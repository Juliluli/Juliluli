import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
//import NavBar1 from './components/NavBar/NavBar1';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useState } from 'react';

function App() {

  const [cartInitial, setCartInitial]=useState(0)

  return (
    <center>
        <NavBar contador={cartInitial}/>
        Hola, soy app de e-commerce.
        <ItemListContainer cartInitial={cartInitial} setCartInitial={setCartInitial} greetings="Hola, soy ItemListContainer que vengo de app!"/>
    </center>
  );
}

export default App;