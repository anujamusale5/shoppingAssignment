import './Clothdisplay.css';
import React from 'react';
import { Link, useNavigate } from "react-router-dom";
function Clothdisplay(props) {

  return (
    

    <div>
      <div class="card card-main">
        <h5>{props.data.title}</h5>
        <hr />
        <img src={props.data.image} class="card-img-top primg" alt="..." />
        <div class="card-body">
          {/* <h6 class="card-title">{props.data.description}</h6> */}
          <h3><span>&#8377;{props.data.price}</span></h3>
          <p class="card-text"></p>
          <Link to={'/showcart/' + props.data.id}  class="btn btn-block btn-success" >ShowDetails</Link>
        </div>
      </div>
    </div>

  )
};
export default Clothdisplay;