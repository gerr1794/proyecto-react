import data from '../../src/data/data';
import Item from './Item';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const ItemList = () => {
  
  const [productos, setProductos] = useState ([])
  const [cargando, setCargando] = useState(true)

  const { categoria } = useParams()

  useEffect(()=>{
    const productos = () => {
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          resolve(data)
        },4000)
      })
    }
    productos().then((items)=>{
      if(categoria != null){
        const productosFiltrados = items.filter((producto) => producto.categoria === categoria)
        setProductos(productosFiltrados)
        setCargando(false)
      } else {
        setProductos(items)
        setCargando(false)
      }
      
    })
  },[categoria])

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