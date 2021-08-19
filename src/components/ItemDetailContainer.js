// import React, {useState} from 'react';
// import ItemDetail from './ItemDetail';
// const ItemDetailContainer = () => {
// const[detailItems, setDetailItems] = useState([])
// const detailProductos = [

//   {
//     img:'https://www.google.com.ar/url?sa=i&url=https%3A%2F%2Fcocteleriacreativa.com%2Fcocteles%2Fjagermeister-shot&psig=AOvVaw2VbFN9e-3ePvR0NkQG0xUC&ust=1629341600265000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNDsieXIufICFQAAAAAdAAAAABAE',
//     tituloDetail: 'Jaggermeister 750ml',
//     precioDetail: '$2500'
//   },
//   {
//     img:'https://www.google.com.ar/url?sa=i&url=https%3A%2F%2Fwww.turbosquid.com%2Fes%2F3d-models%2F3d-model-jack-daniels-whiskey-bottle-1225493&psig=AOvVaw10GrVAmln_pr1DuFQGTFAo&ust=1629341598828000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNDjiebIufICFQAAAAAdAAAAABAF',
//     tituloDetail: 'Jack Daniels 750 ml',
//     precioDetail: '$4500'
//   },
//   {
//     img:'https://www.google.com.ar/url?sa=i&url=https%3A%2F%2Farticulo.mercadolibre.com.ar%2FMLA-855467906-whisky-johnnie-walker-black-label-x-1-litro-_JM&psig=AOvVaw2dulSOxvJigVLiXRidK3Ha&ust=1629341608442000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPDn1NDIufICFQAAAAAdAAAAABAM',
//     tituloDetail: 'Johnnie Walker Black Label 750ml',
//     precioDetail: '$3500'
//   },
// ];

// const detailPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(detailProductos)
//   }, 2000)
// })

// detailPromise
//  .then((data) => {
//    setDetailItems(data)
//  })
//  .catch((error) => {
//    console.log(error)
//  })

// return (
//   <>
//   <div>
//   {
//     detailItems.map(detailProductos => {
//       return (
//       <ItemDetail key={detailProductos.img} tituloDetail={detailProductos.tituloDetail} precioDetail={detailProductos.precioDetail} />
//     )})
//   }
//   </div>
//   </>
// );
// }
// export default ItemDetailContainer;


import React, {useState} from 'react';
import ItemDetail from './ItemDetail';
const ItemDetailContainer = () => {
  const [detalle1Producto, setDetalle1Producto] = useState ({
    img: 'https://img.lalr.co/cms/2021/07/14151957/Jagermeister-AL.jpg',
    titulo: '',
    precio: ''
  })
  const producto =
  {
    img: '',
    titulo: 'Jaggermeister 750ml',
    precio: '$2800'
  };

  const getItem = new Promise ((resolve, reject) => {
    setTimeout(() => {
      console.log(producto)
      resolve(producto)
    }, 2000)
  })

  getItem
  .then((data) => {
    console.log(data)
    setDetalle1Producto(data)
  })
  .catch((error) => {
    console.log(error)
  })

  return (
    <>
      <div>
      <ItemDetail img={detalle1Producto.img} titulo={detalle1Producto.titulo} precio={detalle1Producto.precio}/>
      </div>
    </>
  )
}

export default ItemDetailContainer;