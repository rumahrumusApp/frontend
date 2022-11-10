import style from "../styles/Sign.module.css"
import Navbar from "../components/Navbar";


export default function Signin() {
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
                <input type = 'text' id='password'></input>
                <button>Sign In</button>
                
                <div className={style.signback}>
                <p>Belum punya akun ? <a href="./signup">Sign Up</a></p>
                </div>
        
            </form>

        </div>
        
        </>
    )
}