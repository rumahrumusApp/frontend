import style from "../styles/Sign.module.css"
import Navbar from "../components/Navbar";


export default function Signup() {
    return(
        <>
        <Navbar></Navbar>
        <div className={style.container}>
            
            <form className={style.form}>
            <div>
            <img src='./rumahrumus_logo.png'/>
            <h1> Sign Up</h1>
            </div>


                <p>Email<span>*</span></p>
                <input type = 'text' id='email'></input>

                <p>Nama Lengkap<span>*</span></p>
                <input type = 'text' id='fullname'></input>

                <p>Username<span>*</span></p>
                <input type = 'text' id='username'></input>

                <p>Pekerjaan<span>*</span></p>
                <select id ='pekerjaan'>
                    <option>Pelajar</option>
                    <option>Guru</option>
                    <option>Lainnya</option>
                </select>

                <p>Password<span>*</span></p>
                <input type = 'text' id='password'></input>

                <p>Konfirmasi Password<span>*</span></p>
                <input type = 'text' id='konfirmasi_pw'></input>

                <button>Sign Up</button>

                <div className={style.signback}>
                    <p>Sudah Punya Akun ?<a href=""> Sign In </a></p>
                </div>
            </form>
        </div>
        </>
    )
}