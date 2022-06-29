// Import Needs
import { Link } from 'react-router-dom';
import './App.css';

// Images
import logo from "./images/logo-RT-with-text.svg"
import homeicon from "./images/home-icon.svg";

// Landing Page
const Landingpage = () => {
    return ( 
        <div className="Landingpage">
            <img src={logo} id="logo-landingpage" alt="Logo RuangTunggu"/>
            <div className="links">
                <Link to = "/login-register" className='button'>
                <img src={homeicon}/>
                </Link>
            </div>
        </div>
     );
}
 
export default Landingpage;