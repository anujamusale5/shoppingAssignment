import './Homemain.css';
import Main from '../components/Main/Main';
import Mid from '../components/middle/Mid';
import Login from '../components/Login/Login';
import Clothdisplay from '../components/Clothdisplay/Clothdisplay';

//import Jeweleryitem from '../components/Jewelery/Jeweleryitem';
//import { useParams } from 'react-router-dom';
function Home()
{
  
    return(
        <div><Main/>
        <hr/> 
         <Mid/>
         {/* <Jeweleryitem/> */}
        <hr/>
       
       
       </div>

      
    );
}
export default Home;