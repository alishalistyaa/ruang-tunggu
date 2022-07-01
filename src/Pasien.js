// Needs
import { Link } from 'react-router-dom';
import useFetch from './useFetch';

// Files
import Pasien_block from './Pasien_block';
import BackButton from './images/back-button-grey.svg'
import progress from './images/progress-25.svg'
import progressBar from './images/progress-full-grey.svg'
import tambahData from './images/Button tambah pasien.svg'

const Pasien = () => {
    const {data, isPending, Error } = useFetch('https://ruang-tunggu-backend.herokuapp.com/pasien');

    return ( 
        <div className="pasien">
            <Link to ="/appointment"> <img src={BackButton}/> </Link>

            <div className="progressBar">
                <div className="bar-nya-beneran">
                    <img id='bar-component'src={progressBar}/>
                    <img id='bar-component'src={progress}/>
                    
                </div>
                
                <h3>25%</h3>
            </div>

            <div className="topHook">
                <h2> Siapa yang akan diperiksa?</h2>
            </div>

            <div className="pilih-pasien">
                <Pasien_block dataPasien = {data}/>
            </div>

            <div className="tambah-data-pasien">
                <Link className="tambah-data" to="/tambah-data-pasien"> <img src={tambahData}/></Link>
            </div>

            <Link to = "/asuransi">
                <button type="button" class="next-button">
                    <span class="button__text"> Selanjutnya</span>
                    <span class="button__icon">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </span>
                </button>
            </Link>

        </div>
     );
}
 
export default Pasien;