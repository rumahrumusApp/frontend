import style from "../styles/Createrumus.module.css"
import Navbarsign from '../components/Navbarsign'

export default function CreateRumus() {
    return(
        <>
        <Navbarsign></Navbarsign>
        <div className={style.container}>
    
            <form className={style.addRumus}>
                 <div className={style.titles}>
                    <a href="/">Kembali</a>
                    <h2>Buat Rumus</h2>
                </div>

                <div className={style.rumus}>
                     <p>Nama Rumus</p>
                    <input type='text' id='namarumus' placeholder="masukan nama rumus"></input>
                </div>  

                <div className={style.rumus}>       
                    <p>Kategori</p>
                    <select id ='kategori'>
                        <option>Matematika</option>
                        <option>Fisika</option>
                        <option>Kimia</option>
                        <option>Ekonomi</option>
                     </select>
                </div>

                <div className={style.rumus}>
                        <p>Sub Kategori</p>
                        <select id ='subkategori'>
                            <option></option>
                            <option></option>
                            <option></option>
                            <option></option>
                        </select>
                </div>
                
                <div className={style.rumus}>
                        <p>Upload Gambar Ilustrasi</p>
                        <input className={style.imgIlust} type='file'  id='img_ilust' placeholder="Upload Image"></input>
                </div>

                <div className={style.rumus}>
                        <p>Upload Rumus</p>
                        <input className={style.imgRumus} type='file'  id='img_rumus' placeholder="Upload Image"></input>
                </div>

                <div className={style.rumus}>
                        <p>Upload Contoh Perhitungan</p>
                        <input className={style.imgHitung} type='file' id='img_perhitungan' placeholder="Upload Image"></input>
                </div>

                <div className={style.rumus}>
                        <p>Catatan</p>
                        <input type='text' id='catatan'></input>
                </div>

                <div className={style.rumus}>
                <div className={style.btn}>
                    <a href="" className={style.hapus}>Hapus</a>
                    <a href="" className={style.ajukan}>Ajukan</a>
                    <a href="" className={style.simpan}>Simpan</a>
                </div>
                </div>

                </form>
            
            </div>
        </>
    )
    
}