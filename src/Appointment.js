// Needs
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { ReactHTMLElement } from 'react';
import { Link } from 'react-router-dom';

// Files gws
import Elipse13 from './images/Ellipse 13.png';
import Elipse14 from './images/Ellipse 14.png';
import Rect7 from './images/Rectangle 7.png';
import elemenfotodokter from './images/elemen foto dokter.svg';
import backWhiteButton from './images/Button Back.svg';
import background from './images/background getappointment.png'

const Appointment = () => {
    function remove() {
    var x = document.getElementById("selectNow");
    x.remove(x.selectedIndex);
    }

    return ( 
        <div className="appointment">

            <div class="background">
        <img src={background} class="lebih-background"/>
        <img src={Elipse13} class="elips-1"/>
        <img src={Elipse14} class="elips-2"/>
        <img src={Rect7} class="rectangle"/>
        <button class="btn bg-transparent" id="back-button" type="button" onclick="history.back()"><img src={backWhiteButton}/></button>
            </div>


    <div class="dokter-info">
        <center>
            <img src={elemenfotodokter} class="foto-dokter" />
            <h3 class="nama-dokter">Dr. Lela Siti, SP.A(K)</h3>
            <h6 class="jenis-dokter">Dokter Spesialis Anak</h6>
        </center>
        <div class="main-container">
            <div class="row row-cols-3">
              <div class="col">
                <div class="container">
                    <div class="row">
                      <div class="row">
                        <h1>432</h1>
                      </div>
                      <div class="row">
                        <h6>Review</h6>
                      </div>
                    </div>
                  </div>
              </div>
              <div class="col">
                <div class="container">
                    <div class="row">
                      <div class="row">
                        <h1>14</h1>
                      </div>
                      <div class="row">
                        <h6>Tahun Pengalaman</h6>
                      </div>
                    </div>
                  </div>
              </div>
              <div class="col">
                <div class="container">
                    <div class="row">
                      <div class="row">
                        <h1>5</h1>
                      </div>
                      <div class="row">
                       <h6>Menit dari Lokasi</h6>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div> 
    </div>
    <div class="date-section">
        <h5 class="tanggal">Tanggal</h5>
        <form id="myForm">
            <select id="select-date">
                <option>Januari</option>
                <option>Februari</option>
                <option>Maret</option>
                <option>April</option>
                <option>Mei</option>
                <option>Juni</option>
                <option>Juli</option>
                <option>Agustus</option>
                <option>September</option>
                <option>Oktober</option>
                <option>November</option>
                <option>Desember</option>
            </select>
         </form>
         {/* <Helmet>
         <script>
                function remove() {
                var x = document.getElementById("selectNow");
                x.remove(x.selectedIndex);
                }
            </script>
         </Helmet> */}
    </div>
    <div class="date-carousel">
        <div class="row-date">
            <button class="button button-date">
                <center class="date">
                    <h3 class="date-text">Min</h3>
                    <h1 class="date-number">5</h1>
                </center>
            </button>
            <button class="button button-date">
                <center class="date">
                    <h3 class="date-text">Sen</h3>
                    <h1 class="date-number">6</h1>
                </center>
            </button>
            <button class="button button-date">
                <center class="date">
                    <h3 class="date-text">Sel</h3>
                    <h1 class="date-number">7</h1>
                </center>
            </button>
            <button class="button button-date">
                <center class="date">
                    <h3 class="date-text">Rab</h3>
                    <h1 class="date-number">8</h1>
                </center>
            </button>
            <button class="button button-date">
                <center class="date">
                    <h3 class="date-text">Kam</h3>
                    <h1 class="date-number">9</h1>
                </center>
            </button>
            <button class="button button-date">
                <center class="date">
                    <h3 class="date-text">Jum</h3>
                    <h1 class="date-number">10</h1>
                </center>
            </button>
            <button class="button button-date">
                <center class="date">
                    <h3 class="date-text">Sab</h3>
                    <h1 class="date-number">11</h1>
                </center>
            </button>
            <button class="button button-date">
                <center class="date">
                    <h3 class="date-text">Min</h3>
                    <h1 class="date-number">12</h1>
                </center>
            </button>
            <button class="button button-date">
                <center class="date">
                    <h3 class="date-text">Sen</h3>
                    <h1 class="date-number">13</h1>
                </center>
            </button>
            <button class="button button-date">
                <center class="date">
                    <h3 class="date-text">Sel</h3>
                    <h1 class="date-number">14</h1>
                </center>
            </button>
        </div>
    </div>

    <div class="hour-section">
        <h5 class="waktu-text">Waktu</h5>
        <div class="hour-container">
            <div class="row">
                <div class="col-3">
                    <button class="button button-hour">
                        <center class="hour">
                            <h3 class="hour-text">10:00</h3>
                        </center>
                    </button>
                </div>
                <div class="col-3">
                    <button class="button button-hour">
                        <center class="hour">
                            <h3 class="hour-text">11:00</h3>
                        </center>
                    </button>
                </div>
                <div class="col-3">
                    <button class="button button-hour">
                        <center class="hour">
                            <h3 class="hour-text">12:00</h3>
                        </center>
                    </button>
                </div>
                <div class="col-3">
                    <button class="button button-hour">
                        <center class="hour">
                            <h3 class="hour-text">14:00</h3>
                        </center>
                    </button>
                </div>
                <div class="col-3">
                    <button class="button button-hour">
                        <center class="hour">
                            <h3 class="hour-text">15:00</h3>
                        </center>
                    </button>
                </div>
                <div class="col-3">
                    <button class="button button-hour">
                        <center class="hour">
                            <h3 class="hour-text">16:00</h3>
                        </center>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div class="approve-section">
        <Link to = "/pasien">
            <center class="approve">
                <button class="button button-approve">
                    <h3 class="approve-text">Buat Pertemuan</h3>
                </button>
            </center>
        </Link>
       
    </div>
        </div>

     );
}
 
export default Appointment;