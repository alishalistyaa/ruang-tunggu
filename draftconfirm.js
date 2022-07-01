function ConfirmPassword({handleValidation, handlePasswordChange, confirmPasswordValue, confirmPasswordError}){
    return (
        <>
     <div className="textbox">
        <input type="password" value={confirmPasswordValue}  onChange={handlePasswordChange} onKeyUp={handleValidation} name="confirmPassword" placeholder="konfirmasi password" className="form-control" />
        <p className="text-danger">{confirmPasswordError}</p>
    </div>
        </>
    )
}
export default ConfirmPassword;