// Needs
import { Link } from 'react-router-dom';

//Files
import progress from './images/progress-75.svg';
import progressBar from './images/progress-full-grey.svg';
import BackButton from './images/back-button-grey.svg';
import bayarKlinik from './images/Button bayar di klinik.svg';
import bayarWallet from './images/Button E Wallet.svg'


const Pembayaran = () => {
    return ( 
        <div className="pembayaran">
            <Link to ="/asuransi"> <img src={BackButton}/></Link>

            <div className="progressBar">
                <div className="bar-nya-beneran">
                    <img id='bar-component'src={progress}/>
                    <img id='bar-component'src={progressBar}/>
                </div>
                <h3>75%</h3>
            </div>

            <div className="topHook">
                <h2> Metode Pembayaran Apa yang Digunakan? </h2>
            </div>

            <div className="button-bayar">
                <button>
                    <img src={bayarKlinik}/>
                </button>
                <button>
                    <img src={bayarWallet}/>
                </button>
            </div>

            <Link to = "/nomor-antrian">
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
 
export default Pembayaran;