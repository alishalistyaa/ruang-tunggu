// Import Needs
import { Link } from 'react-router-dom';
import './App.css';

// Images
import logo from "./images/logo-RT-with-text.svg"
import homeicon from "./images/home-icon.svg";

// Landing Page
const Landingpage = () => {
    // Let this be the first page
    let ele = document.querySelector(':root');
    // Dulu ada problem, di patch biar backgroundnya tetep putih
    function toggle() {
        let cs = getComputedStyle(ele);
        let item = document.querySelector('div');
        if(cs.getPropertyValue('--backgroundcolor') !== 'white') {
            item.style.setProperty('--backgroundcolor', 'white')}}

            // Return Landing Page
    return ( 
        <div className="Landingpage">
            {toggle()}
            <img src={logo} id="logo-landingpage" alt="Logo RuangTunggu"/>
            <div className="links">
                <Link to = "/login-register" className='button-halaman-utama'>
                <img src={homeicon} id='button-gambar-home'/>
                </Link>
            </div>
        </div>
     );
}
export default Landingpage;
