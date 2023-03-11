import './Home.css';
import Main from '../components/Main/Main';
import Mid from '../components/middle/Mid';
import Login from '../components/Login/Login';
function Home()
{
    return(
        <div><Main/>
        <hr/>
       
        <Login/>
       </div>

      
    );
}
export default Home;