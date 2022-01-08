import React from "react";
import Item from "../Item/Item";

function ItemList({productos}) {
  // El componente va a recibir una prop `items` y va a mapear estos `items` al componente `<Item … />`

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
