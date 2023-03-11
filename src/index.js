import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter,Route,Routes } from 'react-router-dom';
// import Homemain from './pages/Homemain';
// import Login from './components/Login/Login';
// import Home from './pages/Home';
// import Signup from './components/Signup/Signup';
// import Homesignup from './pages/Homesignup';
// import Cartdetails from './pages/Cartdetails';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import store from './components/redux/store';

import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> 
    <Routes>
    <Route path="/" element={<Homemain/>}></Route>
    <Route path="/Homemain" element={<Homemain/>}></Route>
    <Route path="/login" element={ <Home/>}></Route>
    <Route path="/Signup" element={<Homesignup/>}></Route>
    <Route path="/showcart/:id" element={<Cartdetails/>}></Route>
  </Routes>
    </BrowserRouter> */}
    <Provider store={store}><App /></Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

