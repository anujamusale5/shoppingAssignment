import logo from './logo.svg';
import Home from './pages/Home' ;
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Homemain from './pages/Homemain';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Homesignup from './pages/Homesignup';
import Productdescpage from './pages/Productdescpage';
import Cartdetails from './pages/Cartdetails';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Jeweleryitem from './components/Jewelery/Jeweleryitem';
import Electronicitem from './components/electronics/Electronicitem';

function App() {
  return (
   <>
     <BrowserRouter> 
      <Routes>
      <Route path="/" element={<Homemain/>}></Route>
    <Route path="/Homemain" element={<Homemain/>}></Route>
    <Route path="/login" element={ <Home/>}></Route>
    <Route path="/Signup" element={<Homesignup/>}></Route>
    <Route path="/showcart/:id" element={<Productdescpage/>}></Route>
    <Route path="/Jeweleryitem/" element={<Jeweleryitem/>}></Route>
    <Route path="/electronicitem/" element={<Electronicitem/>}></Route>
    <Route path="/Cartdetails/:id" element={<Cartdetails/>}></Route>
      </Routes>
      </BrowserRouter>
    
   </>
  );
}

export default App;
