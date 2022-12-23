import style from "../styles/Navbar.module.css"
// import styleLog from "../styles/Navbar.module.css"
import { useRouter } from 'next/router';
import {useEffect,useState} from 'react';
import Link from "next/link";

export default function Navbar() {

    const [display, setDisplay] =useState(style.hide)
    const [infoSignin, SetInfoSignin] = useState()
    const [infoRole, SetRole] = useState()
    const [menu, setMenu] = useState(style.hide)
    const router = useRouter()

    useEffect(() => {
        const id = typeof window !== 'undefined' ? window.localStorage.getItem('unm') : {}
        const ro = typeof window !== 'undefined' ? window.localStorage.getItem('rol') : {}
        SetInfoSignin(id)
        SetRole(ro)
    }, []);

    if (infoSignin == null) {

                return (
                <div className={style.container}>
                        <div className={style.left}>
                            <img src='/rumahrumus_logo.png'/>
                            <Link href={'/'}>RumahRumus</Link>
                        </div>
                
                        <div className={style.right}>
                            <Link className={style.btnMasuk} href={"/signin"}>Sign In</Link>
                            <Link className={style.btnDaftar} href={"/signup"}>Sign Up</Link>
                        </div>
                    </div>

                ); 

        } else {

                const changeDisplay =  (e) => {
                    e.preventDefault()

                    if (menu == style.hide) {

                        setMenu(style.show)

                    } else {

                        setMenu(style.hide)
                    }
                }

                const logout = async () => {
                    window.localStorage.clear()
                    router.reload('/')
                }

             if( infoRole == 1) {

                return (
                    <div className={style.container}>
                         <div className={style.left}>
                             <img src='/rumahrumus_logo.png'/>
                             <Link href={"/"}>RumahRumus</Link>
                         </div>
                 
                         <div className={style.right}>
                             <a onClick={() => logout()} className={style.btnLogout} >Logout</a>
                         </div>
             
                        <nav className = {style.nav}>
                         <img onClick={(event) => changeDisplay(event)} className={style.list} src='/listmenu_white.png'/>
                         
                         <Link href ={"/"}>
                             <img href src='/home_white.png' title="Home"/>
                             <p className={menu}>Home</p>
                         </Link>
             
                         <Link href ={"/rumussaya"}>
                             <img src='/star_white.png' title="Rumus Saya"/>
                             <p className={menu}>Rumus Saya</p>
                         </Link>
             
                         <Link href = {"/createrumus"}>
                             <img src='/plus_white.png' title="Buat Rumus"/>
                             <p className={menu}>Buat Rumus</p>
                         </Link>

                         {/* <Link href={'/pengajuanrumus'}>
                             <img className={style.acc} src='/acc_white.png' title="Pengajuan Rumus"/>
                             <p className={menu}>Pengajuan Rumus</p>
                         </Link>
             
                         <hr/>
                         <Link href={`/dasboard`}>
                             <img className={style.admin} src='/paneladmin.png' title="Dasboard Admin"/>
                             <p className={menu}>Dasboard Admin</p>
                         </Link>

                         <hr/> */}
                        <hr/>
                        <Link href={`/Profile/${infoSignin}`} >
                             <img  className={style.user} src='/user_white.png' title="Profile"/>
                             <p className={menu}>Profile</p>
                        </Link>
                         
             
                         <a onClick={() => logout()}>
                             <img src='/sign-out_white.png' title="Logout Akun"/>
                             <p className={menu}>Logout</p>
                         </a>
                     </nav>
                     </div>
             
                        
                 );
            } else if (infoRole == 2) {

                return (
                    <div className={style.container}>
                         <div className={style.left}>
                             <img src='/rumahrumus_logo.png'/>
                             <Link href={"/"}>RumahRumus</Link>
                         </div>
                 
                         <div className={style.right}>
                             <a onClick={() => logout()} className={style.btnLogout} >Logout</a>
                         </div>
             
                        <nav className = {style.nav}>
                         <img onClick={(event) => changeDisplay(event)} className={style.list} src='/listmenu_white.png'/>
                         
                         <Link href ={"/"}>
                             <img href src='/home_white.png' title="Home"/>
                             <p className={menu}>Home</p>
                         </Link>
             
                         <Link href ={"/rumussaya"}>
                             <img src='/star_white.png' title="Rumus Saya"/>
                             <p className={menu}>Rumus Saya</p>
                         </Link>
             
                         <Link href = {"/createrumus"}>
                             <img src='/plus_white.png' title="Buat Rumus"/>
                             <p className={menu}>Buat Rumus</p>
                         </Link>

                         <hr/>


                         {/* <Link href={'/pengajuanrumus'}>
                             <img className={style.acc} src='/acc_white.png' title="Pengajuan Rumus"/>
                             <p className={menu}>Pengajuan Rumus</p>
                         </Link>
             
                         <hr/>
                         <Link href={`/dasboard`}>
                             <img className={style.admin} src='/paneladmin.png' title="Dasboard Admin"/>
                             <p className={menu}>Dasboard Admin</p>
                         </Link>

                         <hr/> */}

                        <Link href={`/Profile/${infoSignin}`} >
                             <img  className={style.user} src='/user_white.png' title="Profile"/>
                             <p className={menu}>Profile</p>
                        </Link>
                         
             
                         <a onClick={() => logout()}>
                             <img src='/sign-out_white.png' title="Logout Akun"/>
                             <p className={menu}>Logout</p>
                         </a>
                     </nav>
                     </div>
             
                        
                 );

            } else if (infoRole == 3) {
                return (
                    <div className={style.container}>
                         <div className={style.left}>
                             <img src='/rumahrumus_logo.png'/>
                             <Link href={"/"}>RumahRumus</Link>
                         </div>
                 
                         <div className={style.right}>
                             <a onClick={() => logout()} className={style.btnLogout} >Logout</a>
                         </div>
             
                        <nav className = {style.nav}>
                         <img onClick={(event) => changeDisplay(event)} className={style.list} src='/listmenu_white.png'/>
                         
                         <Link href ={"/"}>
                             <img href src='/home_white.png' title="Home"/>
                             <p className={menu}>Home</p>
                         </Link>
             
                         <Link href ={"/rumussaya"}>
                             <img src='/star_white.png' title="Rumus Saya"/>
                             <p className={menu}>Rumus Saya</p>
                         </Link>
             
                         <Link href = {"/createrumus"}>
                             <img src='/plus_white.png' title="Buat Rumus"/>
                             <p className={menu}>Buat Rumus</p>
                         </Link>

                         <Link href={'/pengajuanrumus'}>
                             <img className={style.acc} src='/acc_white.png' title="Pengajuan Rumus"/>
                             <p className={menu}>Pengajuan Rumus</p>
                         </Link>
             
                         <hr/>
                         {/* <Link href={`/dasboard`}>
                             <img className={style.admin} src='/paneladmin.png' title="Dasboard Admin"/>
                             <p className={menu}>Dasboard Admin</p>
                         </Link>

                         <hr/>  */}

                        <Link href={`/Profile/${infoSignin}`} >
                             <img  className={style.user} src='/user_white.png' title="Profile"/>
                             <p className={menu}>Profile</p>
                        </Link>
                         
             
                         <a onClick={() => logout()}>
                             <img src='/sign-out_white.png' title="Logout Akun"/>
                             <p className={menu}>Logout</p>
                         </a>
                     </nav>
                     </div>
             
                        
                 );
            
            } else if (infoRole == 4) {
                return (
                    <div className={style.container}>
                         <div className={style.left}>
                             <img src='/rumahrumus_logo.png'/>
                             <Link href={"/"}>RumahRumus</Link>
                         </div>
                 
                         <div className={style.right}>
                             <a onClick={() => logout()} className={style.btnLogout} >Logout</a>
                         </div>
             
                        <nav className = {style.nav}>
                         <img onClick={(event) => changeDisplay(event)} className={style.list} src='/listmenu_white.png'/>
                         
                         <Link href ={"/"}>
                             <img href src='/home_white.png' title="Home"/>
                             <p className={menu}>Home</p>
                         </Link>
             
                         <Link href ={"/rumussaya"}>
                             <img src='/star_white.png' title="Rumus Saya"/>
                             <p className={menu}>Rumus Saya</p>
                         </Link>
             
                         <Link href = {"/createrumus"}>
                             <img src='/plus_white.png' title="Buat Rumus"/>
                             <p className={menu}>Buat Rumus</p>
                         </Link>

                         <Link href={'/pengajuanrumus'}>
                             <img className={style.acc} src='/acc_white.png' title="Pengajuan Rumus"/>
                             <p className={menu}>Pengajuan Rumus</p>
                         </Link>
             
                         <hr/>
                         <Link href={`/dasboard`}>
                             <img className={style.admin} src='/paneladmin.png' title="Dasboard Admin"/>
                             <p className={menu}>Dasboard Admin</p>
                         </Link>

                         <hr/>

                        <Link href={`/Profile/${infoSignin}`} >
                             <img  className={style.user} src='/user_white.png' title="Profile"/>
                             <p className={menu}>Profile</p>
                        </Link>
                         
             
                         <a onClick={() => logout()}>
                             <img src='/sign-out_white.png' title="Logout Akun"/>
                             <p className={menu}>Logout</p>
                         </a>
                     </nav>
                     </div>
             
                        
                 );
            }


 }










    //     const [display, setDisplay] = useState(style.hide)
    //     const changeDisplay = async (e) => {
    //         e.preventDefault()
    //         if (display == style.hide) {
    //           setDisplay(style.show)
      
    //         }else {
    //           setDisplay(style.hide)
    //         }
    //     }
        
    //     return (
    //        <div className={style.container}>
    //             <div className={style.left}>
    //                 <img src='./rumahrumus_logo.png'/>
    //                 <a href="./">RumahRumus</a>
    //             </div>
        
    //             <div className={style.right}>
    //                 <a className={style.btnLogout} href="./">Logout</a>
    //             </div>
    
    //         <nav className = {style.nav}>
    //             <img onClick={(event) => changeDisplay(event)} className={style.list} src='./listmenu_white.png'/>
                
    //             <a href = "./">
    //                 <img href src='./home_white.png' title="Home"/>
    //                 <p className={display}>Home</p>
    //             </a>
    
    //             <a href = "./rumussaya">
    //                 <img src='./star_white.png' title="Rumus Saya"/>
    //                 <p className={display}>Rumus Saya</p>
    //             </a>
    
    //             <a href = "./createrumus">
    //                 <img src='./plus_white.png' title="Buat Rumus"/>
    //                 <p className={display}>Buat Rumus</p>
    //             </a>
    
    //             <a href = "./pengajuanrumus">
    //                 <img className={style.acc} src='./acc_white.png' title="Pengajuan Rumus"/>
    //                 <p className={display}>Pengajuan Rumus</p>
    //             </a>
    
    //             <hr/>
    //             <a href ="./profile">
    //                 <img  className={style.user} src='./user_white.png' title="Profile"/>
    //                 <p className={display}>Profile</p>
    //             </a>
    
    //             <a href ="./">
    //                 <img src='./sign-out_white.png' title="Logout Akun"/>
    //                 <p className={display}>Logout</p>
    //             </a>
    //         </nav>
    //         </div>
    
    
    //     );
    // }

}