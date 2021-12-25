import React, { useState, useEffect ,createContext} from "react";
import { getFetch } from "../../helpers/getFetch";
import {collection, doc, getDoc, getFirestore,getDocs,query,where,limit} from 'firebase/firestore'
import { getFirestoreApp } from "../../config/getFirestoreApp";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { set } from "react-hook-form";

export const ContextApp3=createContext([])
const override = css`
  display: block;
  margin: 0 auto;
  border-color: blue;
`;

const ItemListContainer = ({ greetings }) => {
  const [productos, setProductos] = useState([]);
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  // useEffect(() => {
  //   if (id) {
  //     getFetch
  //       .then((resp) =>
  //         setProductos(resp.filter((prod) => prod.category === id)))
  //       .catch((err) => console.log(err))
  //       .finally(() => setLoading(false));
  //   } else {
  //     getFetch
  //       .then((resp) => setProductos(resp))
  //       .catch((err) => console.log(err))
  //       .finally(() => setLoading(false));
  //   }
  // }, [id]);
  
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

  console.log(productos)

  return (
    <div>
      <ContextApp3.Provider value={{productos}}>
      <p>{greetings}</p>

      {loading ? <><h2>Cargando...</h2>
       <ClipLoader css={override} size={150} color={"#123abc"} speedMultiplier={1.5} /></>
      : <ItemList />}
      {/* <ItemList items={items}/> */}
      {/* {productos.map(producto=><li key={producto.id}>{producto.name}</li>)} */}
      </ContextApp3.Provider>
    </div>
  );
};

export default ItemListContainer;
