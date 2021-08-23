import React from 'react';
import ItemCount from './ItemCount';


function ItemDetail({ titulo, precio, imagen, stock }) {
  return (
    <div className="card">
      <img src={imagen} alt={titulo} width="150" height="150" />
      <h2>{titulo}</h2>
      <h3>{precio}</h3>
      <ItemCount stock={stock} />
    </div>
  );
}
export default ItemDetail;