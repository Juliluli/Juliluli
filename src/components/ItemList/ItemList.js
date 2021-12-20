import React, {useContext} from "react";
import { ContextApp } from "../../App";
import Item from "../Item/Item";
import { ContextApp3 } from "../ItemListContainer/ItemListContainer";

function ItemList() {
  // El componente va a recibir una prop `items` y va a mapear estos `items` al componente `<Item … />`
  const {} =useContext(ContextApp)
  const {productos} =useContext(ContextApp3)
  return (
    <div className="itemList">
      {/* {items.map(producto=><li key={producto.id}>{producto.name}</li>)} */}
      {productos.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemList;
