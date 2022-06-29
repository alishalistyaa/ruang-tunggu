// Needs
import { LogoNodejs } from 'react-ionicons'
import Icon from 'react-native-ionicons';

// Files

const Login = () => {
    return ( 
        <div class="login-box">
        <h1>Masuk</h1>

        <div class="textbox">
            <input type="text" placeholder="alamat email" name="" defaultValue=""/>
        </div>

        <div class="textbox">
            <input type="password" placeholder="password" name="" defaultValue=""/>
        </div>

        <button onclick="window.location.href='./01-explore.html'" type="button" class="login-button">
            <span class="button__text"> Selanjutnya</span>
            <span class="button__icon">
                <Icon name="arrow-forward-outline"/>
            </span>
        </button>

    </div>

    
     );
}

export default Login;