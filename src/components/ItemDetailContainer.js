import data from '../../src/data/data';
import ItemDetail from './ItemDetail';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  
  const [producto, setProducto] = useState ({});
  const [cargando, setCargando] = useState(true);

  const { id } = useParams()
 

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
  },[id])

  return(
    <>
    { cargando ? <h2>ESPERE UN MOMENTO MIENTRAS SE CARGA EL PRODUCTO!</h2> :
      <ItemDetail titulo={producto?.titulo} precio={producto?.precio} stock={producto?.stock} imagen={producto?.imagen} />

    }

    </>
  )
}

export default ItemDetailContainer;