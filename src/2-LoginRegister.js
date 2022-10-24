// Needs
import { Link } from 'react-router-dom';

// Images
import logo from "./images/logo-RT-with-text.svg";
import pemisahAtau from "./images/pemisah-atau.svg";
import background from './images/bg-login.svg';

// Pilihan Login atau Register
const LoginRegister = () => {
    return ( 
    <div className="login-register">
        <img src={logo} id="logo-landingpage" alt="Logo RuangTunggu"/>

        <div className="pilihan-box">
            <Link to = "/login">
                <button type="button" class="pilihan-button">
                    <span className="button__text"> MASUK </span>
                </button>
            </Link>

            <img src={pemisahAtau} id="pemisah-atau"/>
            
            <Link to = "/register">
                <button type="button" class="pilihan-button">
                    <span className="button__text">DAFTAR</span>
                </button>
            </Link>
        </div>
    </div>
     );
}
 
 
export default LoginRegister;