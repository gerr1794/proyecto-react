import React from 'react';


function Item({ id, titulo, precio }) {
  return (
    <div className="card">
      <div className="id">{id}</div>
      <div className="name">{titulo}</div>
      <div className="surname">{precio}</div>
    </div>
  );
}

function ItemListContainer1() {
  const productos = [
    {
      id: '1',
      titulo: 'Jaggermeister 750ml',
      precio: '$2500'
    },
    {
      id: '2',
      titulo: 'Jack Daniels 750ml',
      precio: '$4500'
    },
    {
      id: '3',
      titulo: 'Johnnie Walker Black label 750ml',
      precio: '$3500'
    },
  ];


  const ItemList = productos.map(productos => (
    <Item key={productos.id} titulo={productos.titulo} precio={productos.precio} />
  ));

  return (
    <>
      <div className="container">{ItemList}</div>
    </>
  );
}

export default ItemListContainer1;