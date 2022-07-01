// Needs
// import { LogoNodejs } from 'react-ionicons'
// import Icon from 'react-native-ionicons';
import { Redirect } from 'react-router';
import { useEffect, useState } from 'react';

// Files

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
        uname: "Email yang kamu masukkan salah!",
        pass: "Password yang kamu masukkan salah!"
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
        setErrorMessages({ name: "uname", message: errors.uname });
      }
    };
  
    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="text-danger">{errorMessages.message}</div>
      );
    
    

    // JSX Code untuk login
    const renderForm = (
        <div className="login-box">
            <h1>Masuk</h1>

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
                </button>
            
            </form>
        </div>
    )
        return ( 
        <div className="login-form">
            {isSubmitted ? (<Redirect to="/explore" />) : renderForm}
        </div>
       
     );
}

export default Login;