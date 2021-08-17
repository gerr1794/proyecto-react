import React from 'react';

import React, {useState} from 'react';
const ItemDetail = () => {
const[DetailItems, setDetailItems] = useState([])
const productosDetalle = [

  {
    imagen:'https://www.google.com.ar/url?sa=i&url=https%3A%2F%2Fcocteleriacreativa.com%2Fcocteles%2Fjagermeister-shot&psig=AOvVaw2Dk0KxwyjUQviWMEdHdBln&ust=1629248070418000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKjpwJbstvICFQAAAAAdAAAAABAD',
    titulo: 'Jaggermeister 750ml',
    precio: '$2500'
  },
];

const DetallePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(productosDetalle)
  }, 2000)
})

DetallePromise
 .then((data) => {
   setDetailItems(data)
 })
 .catch((error) => {
   console.log(error)
 })

 return (
  <>
  <div>
  {
    DetailItems.map(productosDetalle => {
      return (
      <Item key={productos.imagen} titulo={productos.titulo} precio={productos.precio} />
    )})
  }
  </div>
  </>
);

}

export default ItemDetail;