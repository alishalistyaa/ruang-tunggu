
const Password = ({handleValidation, handlePasswordChange, passwordValue, passwordError}) => {
    return ( 
        <>
    <div className="textbox">
        <input type="password" value={passwordValue}  onChange={handlePasswordChange} onKeyUp={handleValidation} name="password" placeholder="buat password" className="form-control" />
        <p className="text-danger">{passwordError}</p>
    </div>
          
        </> );
}
 
export default Password;