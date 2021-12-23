import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
//import NavBar1 from './components/NavBar/NavBar1';
//https://gitlab.com/federico-osandon/comision19780/-/tree/main/src/components
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { useState, createContext } from "react";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import styles from "./components/NavBar/NavBar.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cart from "./components/Cart/Cart";
import CartContextProvider, { CartContext } from "./context/cartContext";

export const ContextApp=createContext([])

function App() {
  const [cartInitial, setCartInitial] = useState(0);
  const [cartItems, setCartItems] = useState(0);

  return (
    <CartContextProvider>
    <BrowserRouter>
      <center>
        <ContextApp.Provider value={{cartInitial, setCartInitial,cartItems, setCartItems}}>

        <NavBar contador={cartInitial} cartItems={cartItems} />
        {/* Hola, soy app de e-commerce. */}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ItemListContainer
                className={styles.p_position}
                greetings="Hola, soy ItemListContainer que vengo de app!"
              />
            }
          />
          <Route
            exact
            path="/category/:id"
            element={
              <ItemListContainer
                className={styles.p_position}
                greetings="Hola, soy ItemListContainer que vengo de app!"
              />
            }
          />
          <Route
            exact
            path="/item/:id"
            element={
              <ItemDetailContainer/>
            }
          />
          <Route exact path="/cart" element={<Cart className={styles.p_position}/>} />
          {/* <Redirect element={<Error404 />} /> */}
        </Routes>

        </ContextApp.Provider>
      </center>
    </BrowserRouter>

    </CartContextProvider>


  );
}

export default App;
