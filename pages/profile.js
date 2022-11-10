import style from "../styles/Profile.module.css"
import Navbarsign from '../components/Navbarsign'

export default function Profil() {
    return(
        <>
        <Navbarsign></Navbarsign>
        <div className={style.container}>
            
            <form className={style.detail}>
                <div className={style.user}>
                    <img src='./buat_rumus.png'/>
                    <p>Hai! areum</p>
                </div>

                <p>Email</p>
                <input type = 'email' value='areum.yeji.haru@gmail.com' id='email' disabled></input>

                <p>Nama Lengkap</p>
                <input type = 'text' value='Areum Yeji Haru' id='fullname'></input>

                <p>Username</p>
                <input type = 'text' value='areumyejiharu_' id='username'></input>

                <p>Role</p>
                <input type = 'text' value='Reviewer' id='role' disabled></input>
            

                <p>Pekerjaan</p>
                <select id ='pekerjaan'>
                    <option>Pelajar</option>
                    <option>Guru</option>
                    <option>Lainnya</option>
                </select>

                {/* <p>Password</p>
                <input type = 'password' value='areum123' id='password' disabled></input> */}

            <div className={style.btn}>
                <button>Simpan</button>
                <button>Ganti Password</button>
            </div>

            </form>
        </div>
        </>
    )
    
}