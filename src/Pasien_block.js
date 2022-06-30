const Pasien_block = ({dataPasien}) => {
    return ( 
        <div className="pasien-block">
            {dataPasien.map(pasien =>
                <div className="kotakPasien" key={pasien.id}> 
                    <p> NIK {pasien.NIK} </p>
                    <h2> {pasien.Nama}</h2>
                    <h3> {pasien.TL}</h3>

                    <button> Detail </button>
                
                </div>
                )}
        </div>
     );
}
 
export default Pasien_block;