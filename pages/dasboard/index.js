import Navbar from '../../components/Navbar'
import style from '../../styles/DasboardCard.module.css'
import {useState} from 'react'
import axios from 'axios' 
import Link from "next/link";

export default function Admin(){
 return(
     <>
                <Navbar></Navbar>

        
                <div className={style.container}>
                <div className={style.cards}>
                     <Link href={`dasboard/contributor`}> 
                         <img src='./buat_rumus.png' className={style.delbtn}/>
                         <div className={style.desc}> <p>Users</p></div>
                     </Link>
                </div>

                <div className={style.cards}>
                     <Link href={`dasboard/rumus`}>
                         <img src='./buat_rumus.png' className={style.delbtn}/>
                         <div className={style.desc}> <p>Rumus</p></div>
                     </Link>
                </div>
        </div>

                <div className={style.container}>
                <div className={style.cards}>
                     <Link href={`/`}>
                         <img src='./buat_rumus.png' className={style.delbtn}/>
                         <div className={style.desc}> <p>Koleksi Rumus User</p></div>
                     </Link>
                </div>

                <div className={style.container}>
                <div className={style.cards}>
                     <Link href={`dasboard/more`}>
                         <img src='./buat_rumus.png' className={style.delbtn}/>
                         <div className={style.desc}> <p>Lainnya</p></div>
                     </Link>
                </div>
            </div>
        </div>
    </>
 )


}