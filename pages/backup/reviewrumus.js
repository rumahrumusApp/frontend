import Navbarsign from '../../components/Navbarsign'
import style from "../styles/Reviewrumus.module.css"
import Link from "next/link"

export default function ReviewRumus(){
    return(
        <>
            <Navbarsign></Navbarsign>
            <div className={style.left}>
                <a href="/pengajuanrumus">Kembali</a>
            </div>
            <div className={style.container}>
                
            <div className={style.title}>
                <h2>Detail Rumus</h2>
                <p className={style.judul}>Persegi</p>
            </div>
                </div>
                <div className={style.container2}>
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


                  <div className={style.komentar}>

                        <hr/>
                        <div className={style.textcomment}>
                        <p>Komentar</p>
                        <textarea placeholder='masukan komentar...'></textarea>
                
                    <label class={style.status}>
                        <input type="radio" checked="checked" name="radio"></input>
                        <span class="checkmark">Terima</span>
                    </label>

                    <label class={style.status}>
                        <input type="radio" name="radio"></input>
                        <span class="checkmark">Tolak</span>
                    </label>

                    <label class={style.status}>
                        <input type="radio" name="radio"></input>
                        <span class="checkmark">Revisi</span>
                    </label>

                    <label class={style.status}>
                        <button className={style.btnSubmit}>Submit</button>
                    </label>
                    </div>  
                </div>
                </div>

        </>
    )
}