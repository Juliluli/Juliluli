import React, { useState, useEffect,createContext } from "react";
import { getItemDetail } from "../../helpers/getItemDetail";
import {collection, doc, getDoc, getFirestore,getDocs,query,where,limit} from 'firebase/firestore'
import { getFirestoreApp } from "../../config/getFirestoreApp";
//import { firestore } from 'firebase';
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
  
  // useEffect(() => {
  //    getItemDetail
  //      .then((resp) => {
  //        setDetalle(resp.find((onlyOne) => onlyOne.id == id));  })
  //      .catch((err) => console.log(err))
  //      .finally(() => setLoader(false));
  //  }, [id,detalle]);
  //  //.find(onlyOne=> onlyOne.id === 1)

// useEffect(() => {
//   const db=getFirestore();
//  // const ref=doc(db,'Items','4QQcKTAfy2tVekWXzcog');
//   const ref=query(collection(db,'Items'), where('id','==',id))
//   getDoc(ref)
//   .then(docRef=>{setDetalle({id: docRef.id, ...docRef.data()})});
//       // id ===undefined
//       // ? setDetalle(products)
//       // : setDetalle(products.filter((i)=>i.id===`${id}`));
//       .then(resp=> setDetalle(resp.docs.reduce(prod=>({id: prod.id, ...prod.data()})   ))   )
//       .catch(err=>console.log(err))
//       .finally(()=>setLoader(false))
// }, [id]);

useEffect(() => {
  const db=getFirestore();
   //const ref=query(collection(db,'Items'), where('id','==',id))
   const ref1=doc(db,'Items', id);
   getDoc(ref1)
   .then(docRef=>{setDetalle({id: docRef.id, ...docRef.data()})})
  //  .then(console.log(ref))
  //  .then(console.log(ref1))
   .catch(err=>console.log(err))
   .finally(()=>setLoader(false))
}, [id]);

  // useEffect(() => {
  //    const db=getFirestore();
  //     const queryCollection=query(collection(db,'Items'), where('id','==',id))
  //     getDocs(queryCollection)
  //     .then(resp=> setDetalle(resp.docs.reduce(prod=>({id: prod.id, ...prod.data()})   ))   )
  //     .catch(err=>console.log(err))
  //     .finally(()=>setLoader(false))
  //  }, [id]);

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
