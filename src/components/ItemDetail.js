import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from './CartContext'
​
​
function ItemDetail({ titulo, precio, imagen, stock }) {
  // estado interno para mostrar el ItemCount O el Link, operador ternario
  const { addItem } = useContext(CartContext)
​
  const agregar = (unidades) => {
    addItem({
      producto: {
        titulo,
        precio,
        imagen,
        stock
      },
      cantidad: unidades
    })
  }
​
  return (
    <div className="card">
      <img src={imagen} alt={titulo} width="150" height="150" />
      <h2>{titulo}</h2>
      <h3>{precio}</h3>
      
      <ItemCount stock={stock} onAdd={agregar} />
      <Link to="/cart">Terminar compra</Link>
    </div>
  );
}
​
export default ItemDetail;