// Needs
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';

//Files
import backWhiteButton from './images/Button Back.svg';
import navbarButton from './images/Button Nav Bar.svg';
import gigimulut from './images/Button Gigi dan Mulut.svg';
import kulit from './images/Button Kulit.svg';
import THT from './images/Button THT.svg';
import infografis from './images/Button Infografis.svg';
import lela from './images/Button Dokter Lela.svg';
import hendry from './images/Button Dokter Hendry.svg'


const Explore = () => {
    return ( 
        <div class=".container-fluid-explore">
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
                            <Link to= '/explore' data-bs-dismiss="offcanvas">
                                <li class="list-group-item">Explore </li> 
                            </Link>
                            <Link to= '/nomor-antrian'>
                                <li class="list-group-item">Track Antrian</li>
                            </Link>
                            <Link to ='/404-error'>
                                <li class="list-group-item">Riwayat Kesehatan</li>
                            </Link>
                            </ul>
                            <ul class="list-group">
                            <Link to ='/404-error'>
                                <li class="list-group-item">Pengaturan</li>
                            </Link>
                            <Link to ='/'>
                                <li class="list-group-item" id="logout-sidebar">Keluar Akun</li>
                            </Link>
                            </ul>
                        </div>
                    </div>      
                </nav>
            </div>     
        </header> 
        <div class="explore-content-top">                       
            <div class="search-section">
                <div class="search-text">
                    <h4>Hi,  <span class="name">Alisha Listya</span> </h4>
                    <h4>Dokter apa yang kamu cari?</h4>
                </div>
            </div>
            <div class="search-bar">
                <img class="search-icon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2Ljk2NiA1Ni45NjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ljk2NiA1Ni45NjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPHBhdGggZD0iTTU1LjE0Niw1MS44ODdMNDEuNTg4LDM3Ljc4NmMzLjQ4Ni00LjE0NCw1LjM5Ni05LjM1OCw1LjM5Ni0xNC43ODZjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMywxMC4zMTgtMjMsMjMgIHMxMC4zMTgsMjMsMjMsMjNjNC43NjEsMCw5LjI5OC0xLjQzNiwxMy4xNzctNC4xNjJsMTMuNjYxLDE0LjIwOGMwLjU3MSwwLjU5MywxLjMzOSwwLjkyLDIuMTYyLDAuOTIgIGMwLjc3OSwwLDEuNTE4LTAuMjk3LDIuMDc5LTAuODM3QzU2LjI1NSw1NC45ODIsNTYuMjkzLDUzLjA4LDU1LjE0Niw1MS44ODd6IE0yMy45ODQsNmM5LjM3NCwwLDE3LDcuNjI2LDE3LDE3cy03LjYyNiwxNy0xNywxNyAgcy0xNy03LjYyNi0xNy0xN1MxNC42MSw2LDIzLjk4NCw2eiIgZmlsbD0iIzAwMDAwMCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
                <input class="search-box" placeholder="Dokter spesialis paru..." type="text" />
            </div>   
        </div> 

        <div class="category-section">
            <h5 id="category-text">kategori</h5>
            <div class="category-list">
                <img class="category" src={gigimulut}/>
                <img class="category" src={kulit}/>
                <img class="category" src={THT}/>
            </div>
        </div> 

        <div class="infography-section">
            <img class="infography" src={infografis}/>
        </div>
        
        <div class="recommendation-section">
            <h5 id="recommendation-text">Rekomendasi Dokter</h5>
            <div class="recommendation-list">
                <Link to ="/appointment">
                <img class="recommendation" src={lela}/>
                </Link>
                <Link to ="/appointment">
                <img class="recommendation" src={hendry}/>
                </Link>
                
            </div>
        </div>

    </div>
     );
}
 
export default Explore;