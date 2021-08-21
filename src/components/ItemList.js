import data from '../../src/data/data';
import Item from './Item';
import React, {useState, useEffect} from 'react'

const ItemList = () => {
  
  const [productos, setProductos] = useState ([])
  const [cargando, setCargando] = useState(true)

  useEffect(()=>{
    const productos = () => {
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          resolve(data)
        },4000)
      })
    }
    productos().then((items)=>{
      setProductos(items)
      setCargando(false)
    })
  },[])

  return(
    <>
    { cargando ? <h2>ESPERE UN MOMENTO MIENTRAS SE CARGAN LOS PRODUCTOS!</h2> :
    productos.map((producto) =>
      <Item key={producto.id} titulo={producto.titulo} precio={producto.precio} stock={producto.stock} imagen={producto.imagen} categoria={producto.categoria} id={producto.id} />

    )
    }
    </>
  )
}

export default ItemList;