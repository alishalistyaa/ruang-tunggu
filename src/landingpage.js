import logo from "./images/logo-RT-with-text.svg"
import homeicon from "./images/home-icon.svg";

const Landingpage = () => {
    return ( 
        <div className="Landingpage">
        <img src={logo} id="logo-landingpage" alt="Logo RuangTunggu"/>
        {/* <Link to = "./00.1-login-register.html" class="button">
            <img src={homeicon}/>
        </Link> */}
        </div>
     );
}
 
export default Landingpage;