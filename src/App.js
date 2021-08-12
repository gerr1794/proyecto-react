import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';
import ItemCount from './components/ItemCount';
import ItemListContainer1 from './components/Item';

export default function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting= "¿Como estas?" />
      <CartWidget />
      <ItemCount stock="10" initial="1" />
      <ItemListContainer1 />
    </div>
  );
}

