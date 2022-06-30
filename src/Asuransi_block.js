const Asuransi_block = ({dataAsuransi}) => {
    return ( 
        <div className="asuransi-block">
            {dataAsuransi.map(asuransi =>
                <button className="asuransi-button">
                    <div className="kotakAsuransi">
                        <p>{asuransi.NamaAsuransi}</p>
                        
                        <div className="asuransi-textbox">
                            <h3>Nomor Asuransi</h3>
                            <h2>{asuransi.NoAsuransi}</h2>
                        </div>

                        <div className="asuransi-textbox">
                            <h3> Nama </h3>
                            <h2>{asuransi.NamaPemilik}</h2>
                        </div>

                        <button> Detail </button>
                    </div>
                </button>)}
        </div>
     );
}
 
export default Asuransi_block;