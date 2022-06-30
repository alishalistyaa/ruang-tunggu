// Needs
import { useState } from "react";
import { useHistory } from "react-router-dom";

const DataAsuransi = () => {
    // Vars
    const [NamaAsuransi, setNamaAsuransi] = useState('')
    const [NoAsuransi, setNoAsuransi] = useState('')
    const [NamaPemilik, setNamaPemilik] = useState('')
    const [TLAsuransi, setTLAsuransi] = useState('')
    const [AlamatAsuransi, setAlamatAsuransi] = useState('')
    const [KotaAsuransi, setKotaAsuransi] = useState('')
    const [ProvinsiAsuransi, setProvinsiAsuransi] = useState('')

    const history = useHistory();
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataAsuransi = {NamaAsuransi, NoAsuransi, NamaPemilik, TLAsuransi, AlamatAsuransi, KotaAsuransi, ProvinsiAsuransi };

        setIsPending(true);

        fetch('http://localhost:8000/asuransi', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(dataAsuransi)
        }).then(() => {
            console.log('new asuransi data added');
            setIsPending(false);
            // history.go(-1);
            history.push('/asuransi')
        })
    }

    return ( 
        <div class="data-box">
        <h1>Tambah Data Asuransi</h1>

        <form onSubmit={handleSubmit}>
            <div class="data-textbox">
                <label for="Nama-Asuransi">Nama Asuransi</label>
                <input 
                    type="text" 
                    id="Nama-Asuransi" 
                    placeholder="PT MANULIFE SENTAUSA" 
                    name="" 
                    defaultValue=""
                    required
                    value={NamaAsuransi}
                    onChange={(e)=> setNamaAsuransi(e.target.value)}
                    />
            </div>

            <div class="data-textbox">
                <label for="No-Asuransi">No. Asuransi</label>
                <input 
                    type="text" 
                    id="No-Asuransi" 
                    placeholder="000000001281" 
                    name="" 
                    defaultValue=""
                    required
                    value={NoAsuransi}
                    onChange={(e)=> setNoAsuransi(e.target.value)}
                    />
            </div>

            <div class="data-textbox">
                <label for="Nama-Pemilik">Nama Pemilik Asuransi</label>
                <input 
                    type="text" 
                    id="Nama-Pemilik" 
                    placeholder="Steve Markurius" 
                    name="" 
                    defaultValue=""
                    required
                    value={NamaPemilik}
                    onChange={(e)=> setNamaPemilik(e.target.value)}/>
            </div>

            <div class="data-textbox">
                <label for="TL-Asuransi">Tanggal Lahir</label>
                <input 
                    type="date" 
                    id="TL-Asuransi" 
                    placeholder="01/01/01" 
                    name="" 
                    defaultValue=""
                    required
                    value={TLAsuransi}
                    onChange={(e)=> setTLAsuransi(e.target.value)}/>
            </div>

            <div class="data-textbox">
                <label for="Alamat-Asuransi">Alamat</label>
                <input 
                    type="text" 
                    id="No-Asuransi" 
                    placeholder="000000001281" 
                    name="" 
                    defaultValue=""
                    required
                    value={AlamatAsuransi}
                    onChange={(e)=> setAlamatAsuransi(e.target.value)}/>
            </div>

            <div class="data-textbox">
                <ul id="list-textbox2">
                    <li id="RTRW">
                        <label for="Kota">Kota/Kabupaten</label>
                        <input 
                            type="text" 
                            id="Kota" 
                            placeholder="Kab.Bandung" 
                            name="" 
                            defaultValue=""
                            required
                            value={KotaAsuransi}
                            onChange={(e)=> setKotaAsuransi(e.target.value)}/>
                    </li>

                    <li id="RTRWLAST">
                        <label for="Provinsi">Provinsi</label>
                        <input 
                            type="text" 
                            id="Provinsi" 
                            placeholder="Jawa Barat" 
                            name="" 
                            defaultValue=""
                            required
                            value={ProvinsiAsuransi}
                            onChange={(e)=> setProvinsiAsuransi(e.target.value)}/>
                    </li>
                </ul>
            </div>

            {!isPending && <button className="data-button"> Selesai!</button>}
            {isPending && <button disabled className="data-button"> Menambahkan data...</button>}
        </form>



    </div>
     );
}
 
export default DataAsuransi;