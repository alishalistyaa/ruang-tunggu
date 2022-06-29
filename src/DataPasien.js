

const DataPasien = () => {
    return ( 
        <div className="data-box">
            <h1>Tambah Data Pasien</h1>

            <div className="data-textbox">
                <label for="Nama">Nama</label>
                <input type="text" id="Nama" placeholder="Steven Makuri" name="" defaultValue=""/>
            </div>

            <div className="data-textbox">
                <label for="NIK">NIK</label>
                <input type="text" id="NIK" placeholder="000000001281" name="" defaultValue=""/>
            </div>

            <div className="data-textbox">
                <label for="TL">Tanggal Lahir</label>
                <input type="date" id="TL" placeholder="01/01/01" name="" defaultValue=""/>
            </div>

            <div class="data-textbox">
                <label for="Alamat">Alamat</label>
                <input type="text" id="Alamat" placeholder="Jln. Bojongsoang Raya No.3" name="" defaultValue=""/>
            </div>

            <div class="data-textbox">
                <ul id="list-textbox1">
                    <li id="RTRW">
                        <label for="RT">RT</label>
                        <input type="text" id="RT" placeholder="004" name="" defaultValue=""/>
                    </li>

                    <li id="RTRW">
                        <label for="RW">RW</label>
                        <input type="text" id="RW" placeholder="004" name="" defaultValue=""/>
                    </li>

                    <li id="RTRWLAST"> 
                        <label for="Kode-Pos">Kode Pos</label>
                        <input type="text" id="Kode-Pos" placeholder="40267" name="" defaultValue=""/>
                    </li>
                </ul>
            </div>

            <div class="data-textbox">
                <ul id="list-textbox2">
                    <li id="RTRW">
                        <label for="Kota">Kota/Kabupaten</label>
                        <input type="text" id="Kota" placeholder="Kab.Bandung" name="" defaultValue=""/>
                    </li>

                    <li id="RTRWLAST">
                        <label for="Provinsi">Provinsi</label>
                        <input type="text" id="Provinsi" placeholder="Jawa Barat" name="" defaultValue=""/>
                    </li>
                </ul>
            </div>

            <div class="data-textbox">
                <label for="Goldar">Golongan Darah</label>
                <input type="text" id="Goldar" placeholder="O" name="" defaultValue=""/>
            </div>


    </div>
     );
}
 
export default DataPasien;