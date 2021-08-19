import React from 'react';


function ItemDetail({ img, titulo, precio }) {
  return (
    <div className="card">
      <div className="img">{img} </div>
      <div className="titulo">{titulo}</div>
      <div className="precio">{precio}</div>
    </div>
  );
}
export default ItemDetail;