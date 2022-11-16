import style from "../styles/Sign.module.css"
import Navbar from "../components/Navbar";
import axios from "axios";
import { useRouter } from 'next/router'

export default function Signup() {

    const signup = async(e, username, fullname, password, email) =>{
        e.preventDefault()
        console.log(username, fullname, password, email)
        try {
            const data = await axios.post("http://localhost:8000/user/signup", {

            })
            
        } catch (error) {
            
        }
    }
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
                <input type = 'password' id='password'></input>

                <p>Konfirmasi Password<span>*</span></p>
                <input type = 'password' id='konfirmasi_pw'></input>

                <button onClick={(event) => signup(event, document.getElementById('username').value, document.getElementById('fullname').value, document.getElementById('password').value, document.getElementById('email').value)}>Sign Up</button>

                <div className={style.signback}>
                    <p>Sudah Punya Akun ?<a href="./signin"> Sign In </a></p>
                </div>
            </form>
        </div>
        </>
    )
}