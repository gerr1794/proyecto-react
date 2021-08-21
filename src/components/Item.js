import React from 'react';
import ItemCount from './ItemCount';
import {Link} from 'react-router-dom'


function Item({ id, titulo, precio, stock, imagen, categoria }) {
  return (
    <div className="card">
    <Link to={`/${categoria}/${id}`}>
    <img src={imagen} alt={titulo} width="215" height="275" />
      <h3>{id}</h3>
      <h3>{titulo}</h3>
      <h4>{precio}</h4>
      <ItemCount stock={stock} initial='1' />
    </Link>
    </div>
  );
}
export default Item;