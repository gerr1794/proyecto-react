import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { cartContext } from './CartContext';

function ItemDetail({ id, titulo, precio, imagen, stock }) {
  const [comprar, setComprar] = useState(false)
  const {onAdd} = useContext (cartContext)

  const agregar = (props) => {
    setComprar(true)
    onAdd({id, titulo, precio}, props.unidades)
    console.log(`¡agregaste ${props.unidades} al carrito!`)
  }


return (
    <div className="card">
      <img src={imagen} alt={titulo} width="150" height="150" />
      <h2>{titulo}</h2>
      <h3>{precio}</h3>
      
      {!comprar ? <ItemCount stock={stock} onAdd={agregar} /> :
      <Link to="/cart"><button>Finalizar la compra</button></Link>}
      
    </div>
  );
}

export default ItemDetail;