// Needs
import { Link } from 'react-router-dom';
import useFetch from './useFetch';

// Files
import Asuransi_block from './Asuransi_block';
import BackButton from './images/back-button-grey.svg';
import progress from './images/progress-50.svg';
import progressBar from './images/progress-full-grey.svg';
import tambahData from './images/Button tambah asuransi.svg';

const Asuransi = () => {
    const {data, isPending, Error } = useFetch('http://localhost:8000/asuransi');
    return ( 
        <div className="asuransi">
            <Link to ="/pasien"> <img src={BackButton}/></Link>

            <div className="progressBar">
                <div className="bar-nya-beneran">
                    <img id='bar-component'src={progressBar}/>
                    <img id='bar-component'src={progress}/>
                </div>
                <h3>50%</h3>
            </div>

            <div className="topHook">
                <h2> Pilih Asuransi yang Kamu Inginkan!</h2>
            </div>

            <div className="pilih-asuransi">
                <Asuransi_block dataAsuransi ={data}/>
            </div>

            <div className="tambah-data-asuransi">
                <Link to="/tambah-data-asuransi"> <img src={tambahData}/></Link>
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