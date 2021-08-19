import React from 'react';


function ItemDetail({ img, titulo, precio }) {
  return (
    <div className="card">
      <img src="https://img.lalr.co/cms/2021/07/14151957/Jagermeister-AL.jpg" width="150" height="150" />
      <div className="img">{img} </div>
      <div className="titulo">{titulo}</div>
      <div className="precio">{precio}</div>
    </div>
  );
}
export default ItemDetail;