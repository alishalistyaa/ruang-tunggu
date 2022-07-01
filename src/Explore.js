// Needs
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';

//Files
import backWhiteButton from './images/Button Back.svg';
import navbarButton from './images/Button Nav Bar.svg';


const Explore = () => {
    return ( 
        <div class="container-fluid">
        <header>
            <div class="wrapper">
                <nav>
                    <button class="btn bg-transparent"  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop"><img src={navbarButton}/></button>
                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
                        <div class="offcanvas-header">
                            <button class="btn bg-transparent" id="back-button" data-bs-dismiss="offcanvas"><img src={backWhiteButton}/></button>
                            <h5 class="offcanvas-title" id="offcanvasWithBackdropLabel"></h5>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="list-group">
                                <li class="list-group-item"> 
                                    <Link to = "/explore" data-bs-dismiss="offcanvas" id="side-bar-button" > Explore </Link></li>
                                <li class="list-group-item">
                                    <Link to = "/nomor-antrian" id="side-bar-button"> Track Antrian </Link></li>
                                <li class="list-group-item">
                                    <Link to = "#" id="side-bar-button"> Riwayat Kesehatan </Link></li>
                            </ul>
                            <ul class="list-group">
                                <li class="list-group-item">Pengaturan</li>
                                <li class="list-group-item" id="logout-sidebar">
                                    <Link to = "/" id="logout-sidebar"> Keluar Akun </Link></li>
                            </ul>
                        </div>
                    </div>      
                </nav>
            </div>     
        </header> 
        <div class="explore-content">                       
            <div class="search-bar">
                <div class="search-text">
                    <h2>Hi,<span class="name">Alisha Listya</span></h2>
                    <h2>Dokter apa yang kamu cari?</h2>
                </div>
            </div>

            <div class="textbox">
                <input type="text" placeholder="Dokter Gigi"name="" value=""/>
            </div>

            <div class="kategori">
                <h2>kategori</h2>
                <ul>
                    <li>Gigi dan Mulut</li>
                    <li>Kulit</li>
                    <li>THT</li>
                </ul>
            </div>
        </div>  
    </div>
     );
}
 
export default Explore;