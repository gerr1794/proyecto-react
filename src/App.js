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


export default function App() {
  return (
    <BrowserRouter>
    <div>
      <NavBar />
      <Switch>
      <Route path="/" exact>
        <ItemListContainer />
      </Route>

      <Route path="/:categoria/:id" exact>
        <ItemDetailContainer titulo='Nuestros Productos' subtitulo='asd' />
      </Route>




      <ItemDetailContainer />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

