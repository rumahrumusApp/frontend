import style from "../styles/Navbar.module.css"
import {useState} from 'react'
import {useRouter} from 'next/router'


export default function Navbar() {
    const [display, setDisplay] = useState(style.hide)
    const router = useRouter()


    const logout = async () => {
            window.localStorage.removeItem('usn')
            router.push('/')
    }


    const changeDisplay = async (e) => {
        e.preventDefault()
        if (display == style.hide) {
          setDisplay(style.show)
  
        }else {
          setDisplay(style.hide)
        }
    }
    
    return (
       <div className={style.container}>
            <div className={style.left}>
                <img src='./rumahrumus_logo.png'/>
                <a href="./">RumahRumus</a>
            </div>
    
            <div className={style.right}>
                <a className={style.btnLogout} href="./">Logout</a>
            </div>

        <nav className = {style.nav}>
            <img onClick={(event) => changeDisplay(event)} className={style.list} src='./listmenu_white.png'/>
            
            <a href = "./">
                <img href src='./home_white.png' title="Home"/>
                <p className={display}>Home</p>
            </a>

            <a href = "./rumussaya">
                <img src='./star_white.png' title="Rumus Saya"/>
                <p className={display}>Rumus Saya</p>
            </a>

            <a href = "./createrumus">
                <img src='./plus_white.png' title="Buat Rumus"/>
                <p className={display}>Buat Rumus</p>
            </a>

            <a href = "./pengajuanrumus">
                <img className={style.acc} src='./acc_white.png' title="Pengajuan Rumus"/>
                <p className={display}>Pengajuan Rumus</p>
            </a>

            <hr/>
            <a href ="./profile">
                <img  className={style.user} src='./user_white.png' title="Profile"/>
                <p className={display}>Profile</p>
            </a>

            <a onClick={() => logout()} href ="./">
                <img src='./sign-out_white.png' title="Logout Akun"/>
                <p className={display}>Logout</p>
            </a>
        </nav>
        </div>


    );
}