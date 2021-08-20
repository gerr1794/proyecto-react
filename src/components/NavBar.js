import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <h1>C-Piko!</h1>
      <Link to="/"><h2>Inicio</h2></Link>
      <Link to="/productos"><h2>Productos</h2></Link>
      <Link to="/promociones"><h2>Promociones</h2></Link>
      <Link to="/contacto"><h2>Contacto</h2></Link>
      <CartWidget />
    </>
  );
}

