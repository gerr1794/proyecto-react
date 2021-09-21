import Item from './Item';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Categ, ItemsTot } from '../firebase/firebaseConfig';

const ItemList = () => {

  const [productos, setProductos] = useState ([])
  const [cargando, setCargando] = useState(true)

  const { categoria } = useParams()

  useEffect(()=>{
    const productos = () => {
      if(categoria != null){
        const items= Categ();
        items.then((data)=>{
          const Aux = []
          data.forEach(Item => {
            Aux.push({id:Item.id,
            titulo:Item.data().titulo,
            precio:Item.data().precio,
            imagen:Item.data().imagen,
            stock:Item.data().stock

          })
          })
          setProductos(Aux)
          setCargando(fasle)
        
      }
      
        )}
      } else {
        const items= ItemsTot();
        items.then((data)=>{
          const Aux = []
          data.forEach(Item => {
            Aux.push({id:Item.id,
            titulo:Item.data().titulo,
            precio:Item.data().precio,
            imagen:Item.data().imagen,
            stock:Item.data().stock

          })
          })
          setProductos(Aux)
          setCargando(fasle)
        
      }
      
        )}
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