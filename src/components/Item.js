import React from 'react';


function Item({ id, titulo, precio }) {
  return (
    <div className="card">
      <div className="id">{id}</div>
      <div className="titulo">{titulo}</div>
      <div className="precio">{precio}</div>
    </div>
  );
}
 export default Item;