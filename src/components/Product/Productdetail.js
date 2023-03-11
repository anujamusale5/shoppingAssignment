import './Productdetail.css';
import React from 'react';
import { useState, useEffect } from "react";
import { useParams,Link } from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";
import { addToCart } from "../redux/action/cart_actions";

function Productdetail() {

   
   let {id} = useParams()
//    const { numberCart } = useSelector(state => state);
//    console.log(numberCart);
    const [cart, setCart] = useState({});
    const dispatch = useDispatch();
  
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/'+ id)
            .then(
                (res) => {
                    return res.json()
                }
            ).then(
                (res) => {
                    setCart(res);
                    console.log(res)
                }
            );

    }, []);
    const onClickHandler = () => {
        //console.log(product)
        //dispatch(addToCart(product))
        console.log(addToCart(cart))
        dispatch(addToCart(cart))
        // console.log(quantity);
        
    }
  

    return (
        <div class="main">
            <div class="container">
                <div class="row">
                <div class="col col-lg-6">
                <img class="primg" src={cart.image} className="img-fluid"></img>
                </div>
                <div class="col col-lg-6">
                <h3>{cart.title}</h3>
                <div>{cart.description}</div>
           <h3><span>&#8377;{cart.price}</span></h3>
           {/* <button onClick={ onClickHandler } className="btn btn-primary">Add To Cart</button> */}
           <Link to={'/Cartdetails/' +id} onClick={ onClickHandler } class="btn btn-block btn-success" >Add To Cart</Link>
           </div>
          
                </div>
                
                </div>
            </div>
            
    );
}
export default Productdetail;