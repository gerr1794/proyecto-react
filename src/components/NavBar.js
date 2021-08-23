import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <h1>C-PIKO!</h1>
      <Link to="/"><h2>INICIO</h2></Link>
      <Link to="/whiskys"><h2>WHISKYS</h2></Link>
      <Link to="/aperitivos"><h2>APERITIVOS</h2></Link>
      <Link to="/vodkas"><h2>VODKAS</h2></Link>
      <Link to="/gin"><h2>GIN</h2></Link>
      <Link to="/contacto"><h2>CONTACTO</h2></Link>
      <CartWidget />
    </>
  );
}

