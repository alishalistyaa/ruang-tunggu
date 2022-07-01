// Needs
import progressBar from './images/progress-100.svg';
import sementara from './images/group-lela.svg'
import { Link } from 'react-router-dom';

const NoAntrian = () => {
    return ( 
        <div className="NoAntrian">
            <div className="progressBar">
                <div className="bar-nya-beneran">
                    <img id='bar-component' src={progressBar}/>
                </div>
                
                <h3>25%</h3>
            </div>

            <div className="topHook">
                <h2> Semuanya Selesai!</h2>
                <p> Lihat nomor antrianmu dengan benar. Pastikan kamu tidak telat dari waktu yang sudah ditentukan!</p>
            </div>

            <div className="contohdoang">
                <img src ={sementara}>
                </img>
            </div>

            {/* <div className="barcodeAntrian">
                <h2> Dr. Lela Listi, SP.A</h2>
                <ul>
                    <li> Selasa, 7 Juni 2022</li>
                    <li> 12.00 </li>
                </ul>
                {image barcode }
                <p> Kode Booking</p>
                <h3> 198010 </h3>
            </div> */}

            <div className="links">
                <Link to = "/explore" className='button-halaman-utama'>
                Halaman Utama
                </Link>
            </div>

        </div>

        
     );
}
 
export default NoAntrian;