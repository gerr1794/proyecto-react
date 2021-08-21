// import React, {useState} from 'react';
// import ItemDetail from './ItemDetail';
// const ItemDetailContainer = () => {
//   const [detalle1Producto, setDetalle1Producto] = useState ({
//     imagen: 'https://img.lalr.co/cms/2021/07/14151957/Jagermeister-AL.jpg',
//     titulo: '',
//     precio: ''
//   })
//   const producto =
//   {
//     imagen: '',
//     titulo: 'Jaggermeister 750ml',
//     precio: '$2800'
//   };

//   const getItem = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//       console.log(producto)
//       resolve(producto)
//     }, 2000)
//   })

//   getItem
//   .then((data) => {
//     console.log(data)
//     setDetalle1Producto(data)
//   })
//   .catch((error) => {
//     console.log(error)
//   })

//   return (
//     <>
//       <div>
//       <ItemDetail imagen={detalle1Producto.imagen} titulo={detalle1Producto.titulo} precio={detalle1Producto.precio}/>
//       </div>
//     </>
//   )
// }

// export default ItemDetailContainer;

import data from '../../src/data/data';
import ItemDetail from './ItemDetail';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  
  const [producto, setProducto] = useState ([])
  const [cargando, setCargando] = useState(true)

  const {categoria, id} = useParams()
 

    useEffect(()=>{
    const productos = () => {
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          resolve(data)
        },2000)
      })
    }
    productos().then((items)=>{
      const producto = items.find(producto => producto.id === id)
      setProducto(producto)
      setCargando(false)
    })
  },[])

  return(
    <>
    { cargando ? <h2>ESPERE UN MOMENTO MIENTRAS SE CARGA EL PRODUCTO!</h2> :
      <ItemDetail titulo={producto.titulo} precio={producto.precio} stock={producto.stock} imagen={producto.imagen} />
    }

    </>
  )
}

export default ItemDetailContainer;