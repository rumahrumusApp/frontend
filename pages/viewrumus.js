import style from "../styles/Viewrumus.module.css"
import Navbarsign from "../components/NavbarSign";
import Navbar from '../components/Navbar'

export default function Viewrumus() {
    return (
        <>
        <Navbarsign></Navbarsign>
        {/* <Navbar></Navbar> */}
        <div className={style.container}>
            <div className={style.left}>
                <a href="./">Kembali</a>
                
            </div>

        <div className={style.container2}>
                    <h2>Persegi</h2>
                    <p> Gambar Ilustrasi</p>
                <div className={style.rumus}>
                    <img src="/rumus/ilust.png"></img>
                    {/* <p>Picture</p> */}
                </div>

                    <p>Rumus</p>
                <div className={style.rumus}>
                    <img src="/rumus/rumus.png"></img>
                    {/* <p>Picture</p> */}
                </div>

                    <p>Contoh perhitungan</p>
                <div className={style.rumus}>
                    <img src="/rumus/cthsoal.png"></img>
                    {/* <p>Picture</p> */}
                </div>

                <p>Catatan</p>
                <div className={style.rumus}>
                    <textarea disabled placeholder='Lorem ipsum siamed lorem ipsum'></textarea>
                </div>
                    
            </div>
        </div>
        </>
    )
}