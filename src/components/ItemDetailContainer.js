// import React from 'react';
// import ItemDetail from './ItemDetail';

// const ItemDetailContainer = ({titulo}) => {
//     return (
//         <>
//         <h1>{titulo}</h1>
//         <ItemDetail />
//         </>
//     )
// }
// export default ItemDetailContainer;

import React, {useState} from 'react';
import ItemDetail from './ItemDetail';
const ItemDetailContainer = () => {
const[detailItems, setDetailItems] = useState([])
const detailProductos = [

  {
    img:'https://www.google.com.ar/url?sa=i&url=https%3A%2F%2Fcocteleriacreativa.com%2Fcocteles%2Fjagermeister-shot&psig=AOvVaw2VbFN9e-3ePvR0NkQG0xUC&ust=1629341600265000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNDsieXIufICFQAAAAAdAAAAABAE',
    titulo: 'Jaggermeister 750ml',
    precio: '$2500'
  },
  {
    img:'https://www.google.com.ar/url?sa=i&url=https%3A%2F%2Fwww.turbosquid.com%2Fes%2F3d-models%2F3d-model-jack-daniels-whiskey-bottle-1225493&psig=AOvVaw10GrVAmln_pr1DuFQGTFAo&ust=1629341598828000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNDjiebIufICFQAAAAAdAAAAABAF',
    titulo: 'Jack Daniels 750 ml',
    precio: '$4500'
  },
  {
    img:'https://www.google.com.ar/url?sa=i&url=https%3A%2F%2Farticulo.mercadolibre.com.ar%2FMLA-855467906-whisky-johnnie-walker-black-label-x-1-litro-_JM&psig=AOvVaw2dulSOxvJigVLiXRidK3Ha&ust=1629341608442000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPDn1NDIufICFQAAAAAdAAAAABAM',
    titulo: 'Johnnie Walker Black Label 750ml',
    precio: '$3500'
  },
];

const detailPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(detailProductos)
  }, 2000)
})

detailPromise
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
    detailItems.map(detailProductos => {
      return (
      <ItemDetail key={productos.img} titulo={productos.titulo} precio={productos.precio} />
    )})
  }
  </div>
  </>
);

}

export default ItemDetailContainer;
