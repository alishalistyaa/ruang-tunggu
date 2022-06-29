// Needs
import { Link } from 'react-router-dom';

const SubmitButton = () => {
    return (
        <Link to ="/explore">
                <button type="submit" className="login-button">
                    <span className="button__text"> Selanjutnya</span>
                    <span className="button__icon">
                        {/* <Icon name="arrow-forward-outline"/> */}
                    </span>
                </button>
            </Link>
    );
}

export default SubmitButton;