import React, { useState, useEffect,createContext } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getItemDetail } from "../../helpers/getItemDetail";
import styles from "../NavBar/NavBar.module.css";
import { useParams } from "react-router-dom";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: blue;
`;
export const ContextApp2=createContext([])

function ItemDetailContainer() {
  const [detalle, setDetalle] = useState([]);
  const [loader, setLoader] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getItemDetail
      .then((resp) => {
        setDetalle(resp.find((onlyOne) => onlyOne.id == id));
      })
      .catch((err) => console.log(err))
      .finally(() => setLoader(false));
  }, [id,detalle]);
  //.find(onlyOne=> onlyOne.id === 1)

  return (
    <div>
      <ContextApp2.Provider value={{detalle}}>
      {loader ? <><h2>Cargando...</h2>
      <ClipLoader css={override} size={150} color={"#123abc"} speedMultiplier={1.5} /></>
      : (
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
