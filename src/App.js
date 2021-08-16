import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemList from './components/ItemList';

export default function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting= "¿Como estas?" />
      <ItemCount stock="10" initial="1" />

    </div>
  );
}

