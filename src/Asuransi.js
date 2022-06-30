// Needs
import { Link } from 'react-router-dom';
import useFetch from './useFetch';

// Files
import Asuransi_block from './Asuransi_block';

const Asuransi = () => {
    const {data, isPending, Error } = useFetch('http://localhost:8000/asuransi');
    return ( 
        <div className="asuransi">
            <Link to ="/pasien"> Back </Link>

            <div className="progressBar">
                <p> Progress Bar</p>
                <h3>25%</h3>
            </div>

            <div className="topHook">
                <h2> Pilih Asuransi yang Kamu Inginkan!</h2>
            </div>

            <div className="pilih-asuransi">
                <Asuransi_block dataAsuransi ={data}/>
            </div>

            <div className="tambah-data-asuransi">
                <Link to="/tambah-data-asuransi"> Tambah Data Asuransi </Link>
            </div>

            <Link to = "/pembayaran">
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
 
export default Asuransi;