import './Main.css';
// import Login from '../components/Login/Login';
import { useDispatch,useSelector } from "react-redux";
//import { noofproducts } from "../redux/action/cart_actions";
import { Router,Link } from 'react-router-dom';
function Main() {
     //const quantityitem = useSelector(state => state.numberCart);
    //console.log(quantity);
     const dispatch = useDispatch();
    // dispatch(noofproducts(quantity ));
     //console.log(quantityitem)
    //  const numbercart = useSelector(state => state.numberCart)
     return (
      
        <div>
            <div class="main-box">
                <div class="text"><span class="textcontent">SHOP</span>LANE</div>
                <div class="signupbox">
                    <div class="login-box">
                        <img width='50px' height='50px' src='https://www.pngfind.com/pngs/m/63-631239_login-png-login-icon-png-transparent-png.png'></img>
                        <span class="signup">
                            <a href="/login">Login</a>/<a href="/signup">Sign up</a></span></div>
                    <div><img src="https://img.icons8.com/material-outlined/2x/shopping-cart.png"></img>
                    <span class="badge text-bg-color"></span></div>
                </div>
            </div>

            <hr />

            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link" href="/Homemain">All</a>
                </li>
                <Link to={'/electronicitem'}  >
                    <li class="nav-item">
                    <a class="nav-link" href="#">Electronics</a>
                </li> 
                </Link>
                <Link to={'/Jeweleryitem'}  >
                
                <li class="nav-item">
                    <a class="nav-link" href="#">Jewelery</a>
                </li>
                </Link>
                <li class="nav-item">
                    <a class="nav-link" href="#">Men's clothing</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Women's clothing</a>
                </li>
            </ul>
        </div>
    );
   
}
export default Main;