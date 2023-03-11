import './Mid.css';
import React, { useEffect, useState } from 'react';
import Clothdisplay from '../Clothdisplay/Clothdisplay';


function Mid() {
    const [productdetails, setProductinfo] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
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

    );
}
export default Mid;