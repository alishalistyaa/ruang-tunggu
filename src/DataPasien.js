// Needs
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import BackButton from './images/back-button-grey.svg';
import background from './images/bg-tambah-data.svg';

const DataPasien = () => {
    // Vars
    const [Nama, setNama] = useState('')
    const [NIK, setNIK] = useState('')
    const [TL, setTL] = useState('')
    const [Alamat, setAlamat] = useState('')
    const [RT, setRT] = useState('')
    const [RW, setRW] = useState('')
    const [KodePos, setKodePos] = useState('')
    const [Kota, setKota] = useState('')
    const [Provinsi, setProvinsi] = useState('')
    const [Goldar, setGoldar] = useState('')

    const history = useHistory();
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataPasien = {Nama, NIK, TL, Alamat, RT, RW, KodePos, Kota, Provinsi, Goldar};

        setIsPending(true);

        fetch('http://localhost:8000/pasien', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(dataPasien)
        }).then(() => {
            console.log('new pasien data added');
            setIsPending(false);
            // history.go(-1);
            history.push('/pasien')
        })
    }


    return (
        <div className="ini-buat-background-pasien">
             <div class="background">
        <img src={background} class="lebih-background"/>
    
        </div> 
        <div className="data-box">
            
            <div className="judul-tambah-data">
            <Link to ="/pasien" > <img id='back-dari-tambah' src={BackButton}/> </Link>
            <h1>Tambah Data Pasien</h1></div>
            
            <form onSubmit={handleSubmit}>
                <div className="data-textbox">
                    <div className="label-data-input">
                        <label for="Nama">Nama</label>
                    </div>
                    <input 
                        type="text" 
                        id="Nama" 
                        placeholder="Steven Makuri" 
                        name="" 
                        required
                        defaultValue=""
                        value = {Nama}
                        onChange={(e)=> setNama(e.target.value)}/>
                </div>

                <div className="data-textbox">
                    <div className="label-data-input">
                        <label for="NIK">NIK</label>
                    </div>
                    <input 
                        type="text" 
                        id="NIK" 
                        placeholder="000000001281" 
                        name="" 
                        required
                        defaultValue=""
                        value = {NIK}
                        onChange={(e)=> setNIK(e.target.value)}/>
                </div>

                <div className="data-textbox">
                <div className="label-data-input">
                        <label for="TL">Tanggal Lahir</label>
                    </div>
                    <input 
                        type="date" 
                        id="TL" 
                        placeholder="01/01/01" 
                        name="" 
                        required
                        defaultValue=""
                        value = {TL}
                        onChange={(e)=> setTL(e.target.value)}/>
                </div>

                <div class="data-textbox">
                    <div className="label-data-input">
                        <label for="Alamat">Alamat</label>
                    </div>
                    <input 
                        type="text" 
                        id="Alamat" 
                        placeholder="Jln. Bojongsoang Raya No.3" 
                        name="" 
                        required
                        defaultValue=""
                        value = {Alamat}
                        onChange={(e)=> setAlamat(e.target.value)}/>
                </div>

                <div class="data-textbox">
                    <ul id="list-textbox1">
                        <li id="RTRW">
                            <div className="label-data-input">
                                <label for="RT">RT</label>
                            </div>
                            <input 
                                type="text" 
                                id="RT" 
                                placeholder="004" 
                                name="" 
                                required
                                defaultValue=""
                                value = {RT}
                                onChange={(e)=> setRT(e.target.value)}/>
                        </li>

                        <li id="RTRW">
                            <div className="label-data-input">
                                <label for="RW">RW</label>
                            </div>
                            <input 
                                type="text" 
                                id="RW" 
                                placeholder="004" 
                                required
                                name="" 
                                defaultValue=""
                                value = {RW}
                                onChange={(e)=> setRW(e.target.value)}/>
                        </li>

                        <li id="RTRWLAST"> 
                            <div className="label-data-input">
                                <label for="Kode-Pos">Kode Pos</label>
                            </div>
                            <input 
                                type="text" 
                                id="Kode-Pos" 
                                placeholder="40267" 
                                name="" 
                                required
                                defaultValue=""
                                value = {KodePos}
                                onChange={(e)=> setKodePos(e.target.value)}/>
                        </li>
                    </ul>
                </div>

                <div class="data-textbox">
                    <ul id="list-textbox2">
                        <li id="RTRW">
                            <div className="label-data-input">
                                <label for="Kota">Kota / Kabupaten</label>
                            </div>
                            <input 
                                type="text" 
                                id="Kota" 
                                placeholder="Kab.Bandung" 
                                name="" 
                                required
                                defaultValue=""
                                value = {Kota}
                                onChange={(e)=> setKota(e.target.value)}/>
                        </li>

                        <li id="RTRWLAST">
                            <div className="label-data-input">
                                <label for="Provinsi">Provinsi</label>
                            </div>
                            <input 
                                type="text" 
                                id="Provinsi" 
                                placeholder="Jawa Barat" 
                                name="" 
                                required
                                defaultValue=""
                                value = {Provinsi}
                                onChange={(e)=> setProvinsi(e.target.value)}/>
                        </li>
                    </ul>
                </div>

                <div class="data-textbox">
                    <div className="label-data-input">
                        <label for="Goldar">Golongan Darah</label>
                    </div>
                    <select
                        id="Goldar" 
                        name="" 
                        defaultValue=""
                        value = {Goldar}
                        onChange={(e)=> setGoldar(e.target.value)}>
                        <option value="O"> O</option>
                        <option value="A"> A</option>
                        <option value="B"> B</option>
                        <option value="AB"> AB</option>
                        </select>
                </div>

            {!isPending && <button className="data-button"> Selanjutnya!</button>}
            {isPending && <button disabled className="data-button"> Menambahkan data...</button>}

            </form>


    </div>
    </div>
     );
}
 
export default DataPasien;