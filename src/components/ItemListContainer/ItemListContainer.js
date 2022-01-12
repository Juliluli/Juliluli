import React, { useState, useEffect } from "react";
import {collection, getFirestore,getDocs,query,where} from 'firebase/firestore'
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: blue;
`;

const ItemListContainer = ({ greetings }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  
  useEffect(() => {
    const db=getFirestore();
    if (id) {
    const queryCollection=query(collection(db,'Items'), where('category','==',id))
    getDocs(queryCollection)
    .then(resp=>setProductos(resp.docs.map(prod=>({id: prod.id, ...prod.data()}))))
    .catch(err=>console.log(err))
    .finally(()=>setLoading(false))
    } 
    else {
      const queryCollection=query(collection(db,'Items'))
      getDocs(queryCollection)
      .then(resp=>setProductos(resp.docs.map(prod=>({id: prod.id, ...prod.data()}))))
      .catch(err=>console.log(err))
      .finally(()=>setLoading(false))
    }
  }, [id]);


  return (
    <div>

      <p>{greetings}</p>

      {loading ? <><h2>Cargando...</h2>
       <ClipLoader css={override} size={150} color={"#123abc"} speedMultiplier={1.5} /></>
      : <ItemList productos={productos}/>}

    </div>
  );
};

export default ItemListContainer;
