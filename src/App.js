import './App.css';
import NavBar1 from './components/NavBar/NavBar1';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useState } from 'react';

function App() {

    const inicial=1
    const max=15
    const [cartInitial, setCartInitial]=useState(0)
    const [value, setValue]=useState(inicial)


  return (
    <center>
        <NavBar contador={cartInitial}/>
        Hola, soy app de e-commerce.
        <ItemListContainer max={max} inicial={inicial} greetings="Hola, soy ItemListContainer que vengo de app!"
        value={value} setValue={setValue} setCartInitial={setCartInitial}/>
    </center>
  );
}

export default App;

{/* <header className="App-header">
        <NavBar1 />
        <ItemListContainer greetings="Hola, soy el componente contenedor!" className="itemlistcontainer"/>
    </header> */}