import Navbar from '../../components/Navbar'
import style from "../styles/ChangePassword.module.css"
import Link from "next/link"

export default function changePassword(){
    return(
        <>
            <Navbar></Navbar>
            <div className={style.left}>
                <Link href="/Profile">Kembali</Link>
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