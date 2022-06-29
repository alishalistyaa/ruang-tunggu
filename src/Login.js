// Needs
// import { LogoNodejs } from 'react-ionicons'
// import Icon from 'react-native-ionicons';
import { Redirect } from 'react-router';
import { useEffect, useState } from 'react';

// Files
import SubmitButton from "./SubmitButton"

const Login = () => {
    // States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Login Info

    const [database, setDatabase] = useState(null);
    useEffect(() => {
        fetch('http://localhost:8000/user')
            .then(res =>{
                return res.json();
            })
            .then( data => {
                setDatabase(data);
            });
    }, []);

    const errors = {
        email: "invalid email",
        pass: "invalid password"
    }
    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
    
        var { uname, pass } = document.forms[0];
    
        // Find user login info
        const userData = database.find((user) => user.email === uname.value);
    
    // Compare Info
    if (userData) {
        if (userData.password !== pass.value) {
          // Invalid password
          setErrorMessages({ name: "pass", message: errors.pass });
        } else {
          setIsSubmitted(true);
        }
      } else {
        // Email not found
        setErrorMessages({ name: "email", message: errors.email });
      }
    };
  
    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );
    
    

    // JSX Code untuk login
    const renderForm = (
        <div className="login-box">
            <form onSubmit={handleSubmit}>
                <div className="textbox">
                    <input type="text" placeholder="alamat email" name="uname" defaultValue="" required/>
                    {renderErrorMessage("uname")}
                </div>

                <div className="textbox">
                    <input type="password" placeholder="password" name="pass" defaultValue="" required/>
                    {renderErrorMessage("pass")}
                </div>

                <button type="submit" className="login-button">
                    <span className="button__text"> Selanjutnya</span>
                    <span className="button__icon">
                        {/* <Icon name="arrow-forward-outline"/> */}
                    </span>
                </button>
                {(isSubmitted) && <SubmitButton />}
            </form>
        </div>
    )
    if(isSubmitted === true){
        return (<Redirect to="/explore" />);
    }else{
        return ( 
        <div className="login-form">
            <h1>Masuk</h1>
            {isSubmitted ? <div> User is succesfully logged in </div> : renderForm}
        </div>
       
     );}
}

export default Login;