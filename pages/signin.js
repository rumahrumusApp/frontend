import style from "../styles/Sign.module.css"
import Navbar from "../components/Navbar";
import axios from "axios";
import { useRouter } from 'next/router'


export default function Signin() {
    const router = useRouter()
    const login = async(e,  username, password) => {
        e.preventDefault()
        console.log(username,password)
        try{
            const data = await axios.post("http://localhost:8000/user/signin", {
                username: username,
                // fullname: fullname,
                // occupation_id: occupation_id,
                password: password,
                // email: email
            })
            .then((val) => {
                // console.log(val.data.data.username)
                window.localStorage.setItem('usn', val.data.data.username)
                router.push(`/${val.data.data.username}`)
            })
            // console.log(data);
            

        } catch(err) {

            console.log(err);
        }

    }

    return(
        <>
        <Navbar></Navbar>
      
        <div className={style.container}>

            <form className={style.form}>
                <div>
                    <img src='./rumahrumus_logo.png'/>
                    <h1> Sign In</h1>
                    
                </div>

                <p>Username <span>*</span></p>
                <input type = 'text' id='username'></input>

                <p>Password <span>*</span></p>
                <input type = 'password' id='password'></input>
                <button onClick={(event) => login(event, document.getElementById('username').value , document.getElementById('password').value)}>Sign In</button>
                
                <div className={style.signback}>
                <p>Belum punya akun ? <a href="./signup">Sign Up</a></p>
                </div>
        
            </form>

        </div>
        
        </>
    )
}