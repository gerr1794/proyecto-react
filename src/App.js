import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

export default function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting= "¿Como estas?" />
    </div>
  );
}

