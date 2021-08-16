import React from 'react';
import CartWidget from './CartWidget';

export default function NavBar() {
  return (
    <>
      <h1>C-Piko!</h1>
      <h2>Inicio</h2>
      <h2>Productos</h2>
      <h2>Promociones</h2>
      <h2>Contacto</h2>
      <CartWidget />
    </>
  );
}

