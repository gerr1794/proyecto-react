import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ItemList from './components/ItemList';
import CartProvider from './components/CartContext';


export default function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <div>
      <NavBar />
      <Switch>

      <Route path="/" exact>
        <ItemListContainer />
      </Route>

      <Route path="/Item/:id" exact>
        <ItemDetailContainer titulo='Nuestros Productos' subtitulo='asd' />
      </Route>

      <Route path="/:categoria/" exact>
        <ItemList titulo='Nuestros Productos' subtitulo='asd' />
        <ItemListContainer titulo='Nuestros Productos' subtitulo='asd' />
      </Route>
      
      <ItemDetailContainer />
      </Switch>
    </div>
    </BrowserRouter>
    </CartProvider>
  );
}

