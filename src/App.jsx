import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainar/ItemDetailContainer";
import ItemDetailContainar from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route path= "/" element= { <Catalogo/>} />
      <Route path="/categoria/:idCategoria" element={ <Catalogo/>}/>
      <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App

