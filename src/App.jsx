import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import asyncmock from "../../asyncmock";
import './App.css'


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route path= "/" element= { <ItemListContainer/>} />
      <Route path="/categoria/:idCategoria" element={ <ItemListContainer/>}/>
      <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App