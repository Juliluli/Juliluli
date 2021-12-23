import React, { useState, useEffect ,createContext} from "react";
import { getFetch } from "../../helpers/getFetch";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

export const ContextApp3=createContext([])
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
    if (id) {
      getFetch
        .then((resp) =>
          setProductos(resp.filter((prod) => prod.category === id))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      getFetch
        .then((resp) => setProductos(resp))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [id]);

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
