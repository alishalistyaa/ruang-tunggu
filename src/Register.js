//Needs
// import { LogoNodejs } from 'react-ionicons'
import { Link } from 'react-router-dom';


const Register = () => {
    return ( 
        <div class="login-box">
        <h1>Daftar</h1>

        <div class="textbox">
            <input type="text" placeholder="alamat email" name="" value=""/>
        </div>

        <div class="textbox">
            <input type="password" placeholder="buat password" name="" value=""/>
        </div>

        <div class="textbox">
            <input type="password" placeholder="konfirmasi password" name="" value=""/>
        </div>

            <Link to="/explore">
            <button type="button" class="login-button">
                <span class="button__text"> Selanjutnya</span>
                <span class="button__icon">
                    {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
                </span>
            </button>
            </Link>
    </div>
    
     );
}

export default Register;