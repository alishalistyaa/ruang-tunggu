import logo from "./images/logo-RT-with-text.svg"

const landingpage = () => {
    return ( 
        <div className="landingpage">
        <img src={logo} id="logo-landingpage" alt="Logo RuangTunggu"/>
        <link to ="./00.1-login-register.html" class="button">
            <img src={require('./images/home-icon.svg')}/>
        </link>
        </div>
     );
}
 
export default landingpage;