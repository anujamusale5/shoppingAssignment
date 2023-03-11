import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../components/redux/action/cart_actions";
import { useState, useEffect } from "react";
import Main from '../components/Main/Main';
function Cartdetails() {
  let { id } = useParams()
  //const {image}=useSelector(state=>state.image)
  const carts = useSelector(state => state.Carts)
  const numbercart = useSelector(state => state.numberCart)
  console.log(numbercart)
  const [cart, setCart] = useState({});
  const dispatch = useDispatch();
  const onClickHandler = () => {
    //console.log(product)
    //dispatch(addToCart(product))
    // console.log(addToCart(cart))
    dispatch(addToCart(cart))

  }
  let total=0;
  let actualcost=0;
  return (

    <div>
      <Main />
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">ProductImage</th>
            <th scope="col">Title</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
           
          </tr>
        </thead>
        <tbody>{carts.map((item, index) =>
          <tr>
            <td><img src={item.image} width="100px" height="100px"></img></td>
            <td>{item.title}</td>
            <td>{item.quantity}</td>
            <td>{total=item.price * item.quantity}</td>
            <td class="d-none">{actualcost=actualcost+total} </td>
           
          </tr>
         
        )}
        <tr scope="col"> 
        <td></td>
        <td></td>
        <td class="font-weight-bold">Estimated Price</td>
        <td class="font-weight-bold">{actualcost}</td>
       
        </tr>
        </tbody>

      </table>
    </div>

  );
}
export default Cartdetails;