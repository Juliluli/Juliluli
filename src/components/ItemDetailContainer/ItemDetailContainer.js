import React, { useState, useEffect,createContext } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getItemDetail } from "../../helpers/getItemDetail";
import styles from "../NavBar/NavBar.module.css";
import { useParams } from "react-router-dom";

export const ContextApp2=createContext([])

function ItemDetailContainer() {
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

  return (
    <div>
      <ContextApp2.Provider value={{detalle}}>
      {/* JSX que devuelva un ItemDetail (punto 2)  */}
      {loader ? (
        <h2>Cargando...</h2>
      ) : (
        <div className={styles.divDetail}>
          <h1>Detalles</h1>
          <ItemDetail />
        </div>
      )}
      </ContextApp2.Provider>
    </div>
  );
}
export default ItemDetailContainer;
