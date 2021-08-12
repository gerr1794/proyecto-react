import React from 'react';

import { useState, useEffect } from 'react';

export default function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const increase = () => {
    if (stock > count) {
      setCount(prevState => prevState + 1);
    }
  };

  const decrease = () => {
    if (count > 0) {
      setCount(prevState => prevState - 1);
    }
  };

  const agregarAlCarrito = () => {
    //onAdd(count);
  };

  return (
    <>
      <div className="itemCountContainer">
        <button
          className="button is-warning is-rounded addUp"
          disabled={count < 1}
          onClick={() => decrease()}
        >
          Quitar
        </button>
        <span>....{count}....</span>
        <button
          disabled={count >= stock}
          className="button is-warning is-rounded takeOut"
          onClick={() => increase()}
        >
          Agregar
        </button>
      </div>
      <button
        onClick={() => agregarAlCarrito()}
        disabled={count < 1}
      >
        Agregar al carrito
      </button>
    </>
  );
}