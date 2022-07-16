import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  './Styles.css';
import App from "./App";
import Pokemon from './Components/infoPoke';
import Sidebar from './Components/Siderbar';
import Info from './Components/infostudent';
import "./Components/i18next";
import Poke from './Apppoke';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='App'>
    <Sidebar/>
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/pokemons/:id' element={<Pokemon/>} />
          <Route path='/pokemon' element={<Poke/>} />
          <Route path='/170892' element={<Info/>} />
        </Routes>
      </BrowserRouter>
    </div>
  </div>
);
