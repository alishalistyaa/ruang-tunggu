const NoAntrian = () => {
    return ( 
        <div className="NoAntrian">
            <div className="progressBar">
                <p> progress bar</p>
            </div>

            <div className="topHook">
                <h2> Semuanya Selesai!</h2>
                <p> Lihat nomor antrianmu dengan benar. Pastikan kamu tidak telat dari waktu yang sudah ditentukan!</p>
            </div>

            <div className="barcodeAntrian">
                <h2> Dr. Lela Listi, SP.A</h2>
                <ul>
                    <li> Selasa, 7 Juni 2022</li>
                    <li> 12.00 </li>
                </ul>
                {/* image barcode */}
                <p> Kode Booking</p>
                <h3> 198010 </h3>
            </div>
        </div>

        
     );
}
 
export default NoAntrian;