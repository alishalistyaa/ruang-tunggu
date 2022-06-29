//Needs
import { LogoNodejs } from 'react-ionicons'


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
            <button onclick="window.location.href='./01-explore.html'" type="button" class="login-button">
                <span class="button__text"> Selanjutnya</span>
                <span class="button__icon">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
            </button>
    </div>
    
     );
}

export default Register;