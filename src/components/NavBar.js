import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <h1>C-PIKO!</h1>
      <Link to="/"><h2>INICIO</h2></Link>
      <Link to="/productos"><h2>PRODUCTOS</h2></Link>
      <Link to="/promociones"><h2>PROMOS</h2></Link>
      <Link to="/contacto"><h2>CONTACTO</h2></Link>
      <CartWidget />
    </>
  );
}

