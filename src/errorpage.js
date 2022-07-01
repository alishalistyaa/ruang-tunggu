import BackButton from './images/back-button-grey.svg';
import errorimage from './images/404-error.png';
import { Link } from 'react-router-dom';

const ErrorPage = () => {

    return ( 
        <div className="errorpage">
        <div className="judul-tambah-data">
            <Link id= 'errorpagebutton' to='/explore'> <img id='back-dari-tambah' src={BackButton}/> </Link>
            </div>
        
        <img src ={errorimage}/>
        </div>
     );
}
 
export default ErrorPage;