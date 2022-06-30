// Needs
import { Link } from 'react-router-dom';
import useFetch from './useFetch';

// Files
import Pasien_block from './Pasien_block';

const Pasien = () => {
    const {data, isPending, Error } = useFetch('http://localhost:8000/pasien')

    return ( 
        <div className="pasien">
            <Link to ="/appointment"> Back </Link>

            <div className="progressBar">
                <p> Progress Bar</p>
                <h3>25%</h3>
            </div>

            <div className="topHook">
                <h2> Siapa yang akan diperiksa?</h2>
            </div>

            <div className="pilih-pasien">
                <Pasien_block dataPasien = {data}/>
            </div>

            <div className="tambah-data">
                <Link to="/tambah-data-pasien"> </Link>
            </div>

        </div>
     );
}
 
export default Pasien;