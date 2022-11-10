import style from "../styles/Navbar.module.css"

export default function Navbar() {
    return (
       <div className={style.container}>
            <div className={style.left}>
                <img src='./rumahrumus_logo.png'/>
                <a href="./">RumahRumus</a>
            </div>
    
            <div className={style.right}>
                <a className={style.btnMasuk} href="./signin">Sign In</a>
                <a className={style.btnDaftar} href="./signup">Sign Up</a>
            </div>
        </div>

    );
}