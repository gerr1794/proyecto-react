// import React from 'react';

// import { useState, useEffect } from 'react';

// export default function ItemCount({ stock, initial, onAdd }) {
//   const [count, setCount] = useState(initial);

//   const increase = () => {
//     if (stock > count) {
//       setCount(prevState => prevState + 1);
//     }
//   };

//   const decrease = () => {
//     if (count > 0) {
//       setCount(prevState => prevState - 1);
//     }
//   };

//   const agregarAlCarrito = () => {
//     //onAdd(count);
//   };

//   return (
//     <>
//       <div className="itemCountContainer">
//         <button
//           className="button is-warning is-rounded addUp"
//           disabled={count < 1}
//           onClick={() => decrease()}
//         >
//           QUITAR
//         </button>
//         <span>....{count}....</span>
//         <button
//           disabled={count >= stock}
//           className="button is-warning is-rounded takeOut"
//           onClick={() => increase()}
//         >
//           AGREGAR
//         </button>
//       </div>
//       <button
//         onClick={() => agregarAlCarrito()}
//         disabled={count < 1}
//       >
//         AGREGAR AL CARRITO
//       </button>
//     </>
//   );
// }

import React, {useState} from 'react'

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
  <button>AGREGAR AL CARRITO</button>
  </div>
  )


}

export default ItemCount;