import React, { useState, useEffect } from "react";
import { getFetch } from "../../helpers/getFetch";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

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

  console.log(id);

  return (
    <div>
      <p>{greetings}</p>

      {loading ? <h2>Cargando...</h2> : <ItemList items={productos} />}
      {/* <ItemList items={items}/> */}
      {/* {productos.map(producto=><li key={producto.id}>{producto.name}</li>)} */}
    </div>
  );
};

export default ItemListContainer;
