//Needs
// import { LogoNodejs } from 'react-ionicons'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import { data } from 'jquery';

// Files
import background from './images/bg-login.svg';

const Register = () => {
    // Validation 
    const [passwordError, setPasswordErr] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [passwordInput, setPasswordInput]= useState({
        password:'',
        confirmPassword:''
    })

    // Handling Change and Validation
    const handlePasswordChange =(evnt)=>{
        const passwordInputValue = evnt.target.value.trim();
        const passwordInputFieldName = evnt.target.name;
        const NewPasswordInput = {...passwordInput,[passwordInputFieldName]:passwordInputValue}
        setPasswordInput(NewPasswordInput);
        
    }
    const handleValidation= (evnt)=>{
        const passwordInputValue = evnt.target.value.trim();
        const passwordInputFieldName = evnt.target.name;
    
        if(passwordInputFieldName==='password'){
            const uppercaseRegExp   = /(?=.*?[A-Z])/;
            const lowercaseRegExp   = /(?=.*?[a-z])/;
            const digitsRegExp      = /(?=.*?[0-9])/;
            const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
            const minLengthRegExp   = /.{8,}/;
            const passwordLength =      passwordInputValue.length;
            const uppercasePassword =   uppercaseRegExp.test(passwordInputValue);
            const lowercasePassword =   lowercaseRegExp.test(passwordInputValue);
            const digitsPassword =      digitsRegExp.test(passwordInputValue);
            const specialCharPassword = specialCharRegExp.test(passwordInputValue);
            const minLengthPassword =   minLengthRegExp.test(passwordInputValue);
            let errMsg ="";
            if(passwordLength===0){
                    errMsg="Password tidak boleh kosong!";
            }else if(!uppercasePassword){
                    errMsg="Minimal 1 huruf kapital";
            }else if(!lowercasePassword){
                    errMsg="Minimal 1 huruf non-kapital";
            }else if(!digitsPassword){
                    errMsg="Minimal satu angka";
            }else if(!specialCharPassword){
                    errMsg="Minimal satu karakter spesial";
            }else if(!minLengthPassword){
                    errMsg="Minimal terdiri atas 8 karakter";
            }else{
                errMsg="";
            }
            setPasswordErr(errMsg);
            }
            // for confirm password
            if(passwordInputFieldName=== "confirmPassword" || (passwordInputFieldName==="password" && passwordInput.confirmPassword.length>0) ){
                    
                if(passwordInput.confirmPassword!==passwordInput.password)
                {
                setConfirmPasswordError("Password tidak cocok!");
                }else{
                setConfirmPasswordError("");
                }
                
            }
        }

    // Vars
    const [NamaLogin, setNamaLogin] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory();
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataUser = {NamaLogin, email, password};
        dataUser.password = passwordInput.password;

        setIsPending(true);

        fetch('https://ruang-tunggu-backend.herokuapp.com/user', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(dataUser)
        }).then(() => {
            console.log('new user added');
            setIsPending(false);
            history.push('/login')
        })
    }
    

    return ( 
        <div className="register">
            <div class="background">
                    <img src={background} class="lebih-background"/>
                </div>
       
                    <div className="login-box">
                    <h1>Daftar</h1>
                    <form onSubmit={handleSubmit}>
                            <div className="textbox" id="NamaLogin">
                                <input 
                                    type="text" 
                                    id="Nama" 
                                    placeholder="nama" 
                                    name="" 
                                    defaultValue=""
                                    value = {NamaLogin}
                                    onChange={(e)=> setNamaLogin(e.target.value)}/>
                            </div>
                                

                        <div class="textbox">
                            <input 
                                type="text" 
                                placeholder="alamat email" 
                                name="" 
                                defaultValue=""
                                required
                                value = {email}
                                onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div className="row">
                            <div className="col-sm-4">
                                <div className="textbox">
                                    <input 
                                        type="password" 
                                        value={passwordInput.password}  
                                        onChange={handlePasswordChange} 
                                        onKeyUp={handleValidation} 
                                        name="password" 
                                        placeholder="buat password" 
                                        className="form-control" 
                                        required
                                        />
                                    <p className="text-danger">{passwordError}</p>
                                </div>

                                <div className="textbox">
                                    <input type="password" value={passwordInput.confirmPassword}  onChange={handlePasswordChange} onKeyUp={handleValidation} name="confirmPassword" placeholder="konfirmasi password" className="form-control" />
                                    <p className="text-danger">{confirmPasswordError}</p>
                                </div>

                                </div>
                            </div> 
                        
                        {!isPending && <button className="data-button"> Selanjutnya!</button>}
                        {isPending && <button disabled className="data-button"> Menambahkan data...</button>}

                    </form>

        
                    </div>
            
    </div>
    
     );
}

export default Register;