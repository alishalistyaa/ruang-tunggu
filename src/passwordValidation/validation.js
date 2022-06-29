// Needs
import { useState } from 'react';

// Files
import Password from "./password";
import ConfirmPassword from "./confirmPassword";

const Validation = () => {
    // Updating Value
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



    return ( 
    <div className="row">
    <div className="col-sm-4">

       <Password
       handlePasswordChange ={handlePasswordChange} 
       handleValidation ={handleValidation} 
       passwordValue ={passwordInput.password} 
       passwordError ={passwordError}/>

       <ConfirmPassword
       handlePasswordChange={handlePasswordChange} 
       handleValidation={handleValidation} 
       confirmPasswordValue={passwordInput.confirmPassword} 
       confirmPasswordError={confirmPasswordError}/>

    </div>
   </div> );
}
 
export default Validation;