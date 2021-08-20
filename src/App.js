import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
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
        <ItemListContainer greeting= "¿Como estas?" />
      </Route>

      <Route path="/productos" exact>
        <ItemListContainer greeting= "¿Como estas?" />
      </Route>




      <ItemListContainer greeting= "¿Como estas?" />
      <ItemCount stock="10" initial="1" />
      <ItemDetailContainer />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

