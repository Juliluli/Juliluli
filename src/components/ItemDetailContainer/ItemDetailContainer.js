import React, { useState, useEffect } from "react";
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import ItemDetail from "../ItemDetail/ItemDetail";
import styles from "../NavBar/NavBar.module.css";
import { useParams } from "react-router-dom";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: blue;
`;

function ItemDetailContainer() {
  const [detalle, setDetalle] = useState([]);
  const [loader, setLoader] = useState(true);
  const { id } = useParams();

useEffect(() => {
  const db=getFirestore();
   const ref1=doc(db,'Items', id);
   getDoc(ref1)
   .then(docRef=>{setDetalle({id: docRef.id, ...docRef.data()})})
   .catch(err=>console.log(err))
   .finally(()=>setLoader(false))
}, [id]);

   console.log(detalle)
   console.log(id)


  return (
    <div>

      {loader ? <><h2>Cargando...</h2>
      <ClipLoader css={override} size={150} color={"#123abc"} speedMultiplier={1.5} /></>
      : (
        <div className={styles.divDetail}>
          <h1>Detalles</h1>
          <ItemDetail detalle={detalle}/>
        </div>
      )}

    </div>
  );
}
export default ItemDetailContainer;
