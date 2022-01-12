import React from "react";
import Item from "../Item/Item";

function ItemList({productos}) {

  return (
    <div className="itemList">
      {productos.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemList;
