import React, {useState} from 'react'



const InputCount = ( onConfirm, maxQuantity) => {};
const ButtomCount = (onConfirm, maxQuantity) => {};

const ItemCount = (props) => {
  const [stock, setStock] = useState(props.stock)
  const [unidades, setUnidades] = useState(0)
  
  const handleStock = {
    sumaStock:()=>{
      if(stock === 0){
        alert('¡NO HAY MAS STOCK DISPONIBLE DE ESTE PRODUCTO!')
      } else {
        setUnidades (unidades+1)
        setStock (stock - 1)
      }
    },
    restaStock:()=>{
      if(unidades === 0){
        alert('¡NO SE PUEDE COMPRAR CANTIDADES NEGATIVAS!')
      } else {
        setUnidades (unidades -1)
        setStock (stock + 1)
      }
    }

  }


  return (
  <div>
  <button onClick={handleStock.sumaStock} disabled={stock === '0'}>AGREGAR</button>
  <p>{unidades}</p>
  <button onClick={handleStock.restaStock} disabled={stock === '0'}>QUITAR</button>
  <p>STOCK DISPONIBLE: {stock} </p>
  <button onClick ={ Agregar }>AGREGAR AL CARRITO</button>
  </div>
  )


}

export default ItemCount;