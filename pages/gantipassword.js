import Navbarsign from '../components/Navbarsign'
import style from "../styles/ChangePassword.module.css"

export default function changePassword(){
    return(
        <>
            <Navbarsign></Navbarsign>
            <div className={style.left}>
                <a href="/profile">Kembali</a>
            </div>
            
            <div className={style.container}>
            
            <form className={style.detail}>
                <div className={style.title}>
                    <p>Reset Password</p>
                </div>

                <p>Password Lama</p>
                <input type = 'text' id='oldpassword'></input>

                <p>Password Baru</p>
                <input type = 'text' id='newpassword'></input>

                <p>Konfirmasi Password</p>
                <input type = 'text' id='confirmpassword'></input>

            <div className={style.btn}>
                <a href='/' className={style.batal}>Batal</a>
                <a href='/gantipassword' className={style.simpan}>Ganti Password</a>
            </div>

            </form>
        </div>
        </>
    )
}