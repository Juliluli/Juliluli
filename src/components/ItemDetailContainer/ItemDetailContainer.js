import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getItemDetail } from "../../helpers/getItemDetail";
import styles from "../NavBar/NavBar.module.css";
import { useParams } from "react-router-dom";

function ItemDetailContainer({
  cartInitial,
  setCartInitial,
  cartItems,
  setCartItems,
}) {
  // Implementar mock invocando a getItem() y utilizando el resolver then
  const [detalle, setDetalle] = useState([]);
  const [loader, setLoader] = useState(true);
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    getItemDetail
      .then((resp) => {
        setDetalle(resp.find((onlyOne) => onlyOne.id == id));
      })
      .catch((err) => console.log(err))
      .finally(() => setLoader(false));
  }, [id]);
  //.find(onlyOne=> onlyOne.id === 1)

  // useEffect(() => {
  //     getItemDetail
  //         .then(resp => setDetalles(resp))
  //         .catch(err=>console.log(err))
  //         .finally(()=>setLoader(false))
  // }, [])

  return (
    <div>
      {/* JSX que devuelva un ItemDetail (punto 2)  */}
      {loader ? (
        <h2>Cargando...</h2>
      ) : (
        <div className={styles.divDetail}>
          <h1>Detalles</h1>
          <ItemDetail
            item={detalle}
            cartInitial={cartInitial}
            setCartInitial={setCartInitial}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        </div>
      )}
    </div>
  );
}
export default ItemDetailContainer;
