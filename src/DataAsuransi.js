const DataAsuransi = () => {
    return ( 
        <div class="data-box">
        <h1>Tambah Data Asuransi</h1>

        <div class="data-textbox">
            <label for="Nama-Asuransi">Nama Asuransi</label>
            <input type="text" id="Nama-Asuransi" placeholder="PT MANULIFE SENTAUSA" name="" defaultValue=""/>
        </div>

        <div class="data-textbox">
            <label for="No-Asuransi">No. Asuransi</label>
            <input type="text" id="No-Asuransi" placeholder="000000001281" name="" defaultValue=""/>
        </div>

        <div class="data-textbox">
            <label for="Nama-Pemilik">Nama Pemilik Asuransi</label>
            <input type="text" id="Nama-Pemilik" placeholder="Steve Markurius" name="" defaultValue=""/>
        </div>

        <div class="data-textbox">
            <label for="TL-Asuransi">Tanggal Lahir</label>
            <input type="date" id="TL-Asuransi" placeholder="01/01/01" name="" defaultValue=""/>
        </div>

        <div class="data-textbox">
            <label for="Alamat-Asuransi">No. Asuransi</label>
            <input type="text" id="No-Asuransi" placeholder="000000001281" name="" defaultValue=""/>
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

        <div class="tombol-selesai">
            <button onclick="window.location.href='./04-asuransi.html'" type="button" class="login-button">
                <span class="button__text"> Selesai!</span>
            </button>
        </div>



    </div>
     );
}
 
export default DataAsuransi;