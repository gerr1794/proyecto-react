import React, {useState} from 'react';
import Item from './Item';
const ItemList = () => {
const[listaItems, setListaItems] = useState([])
const productos = [
  {
    id:'1',
    titulo: 'Jaggermeister 750ml',
    precio: '$2500'
  },
  {
    id:'2',
    titulo: 'Jack Daniels 750 ml',
    precio: '$4500'
  },
  {
    id:'3',
    titulo: 'Johnnie Walker Black Label 750ml',
    precio: '$3500'
  },
];

const ejemploPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(productos)
  }, 5000)
})

ejemploPromise
 .then((data) => {
   setListaItems(data)
 })
 .catch((error) => {
   console.log(error)
 })

 return (
  <>
  <div>
   {
     listaItems.map(productos => {
       <Item key={productos.id} titulo={productos.titulo} precio={productos.precio} />
       })
    }
  </div>
  </>
 )
  }
  export default ItemList;