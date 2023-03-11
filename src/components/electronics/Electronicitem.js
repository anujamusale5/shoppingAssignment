import './Electronicitem.css';
import React, { useEffect, useState } from 'react';
import Clothdisplay from '../Clothdisplay/Clothdisplay';
import { useParams } from 'react-router-dom';
//import Main from '../components/Main/Main';
import Main from '../Main/Main';
function Electronicitem() {
    let {category}=useParams;
    console.log(category)
    const [productdetails, setProductinfo] = useState([]);
    useEffect(() => {
fetch('https://fakestoreapi.com/products/category/electronics')
.then(
    (res) => {
        return res.json()
    }
).then(
    (jsonResponse) => {
         setProductinfo(jsonResponse);
    }
);
}, []);
return (
    <div>
        <Main/>
        <hr/>
<div class="container mt-3">
    <div class="row">
    {
        productdetails.map( (product) =>( 
        <div class="col-md-3">
        <Clothdisplay data={product} />
        </div>))
          
    }
  </div>
  </div>
    </div>
    );
}
export default Electronicitem;