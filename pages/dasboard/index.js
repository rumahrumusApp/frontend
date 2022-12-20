import Navbar from '../../components/Navbar'
import style from '../../styles/DasboardCard.module.css'
import {useState} from 'react'
import axios from 'axios' 
import Link from "next/link";
import Footer from '../../components/Footer'

export default function Admin(){
 return(
     <>
               
             <div className={style.pagecontainer}>
             <Navbar></Navbar>
                <div className={style.container}>
                <div className={style.cards}>
                     <Link href={`dasboard/contributor`}> 
                         <img src='./userdata.png' className={style.delbtn}/>
                         <div className={style.desc}> <p>Users</p></div>
                     </Link>
                </div>

                <div className={style.cards}>
                     <Link href={`dasboard/rumus`}>
                         <img src='./rumusicon.png' className={style.delbtn}/>
                         <div className={style.desc}> <p>Rumus</p></div>
                     </Link>
                </div>
        </div>

                <div className={style.container}>
                <div className={style.cards}>
                     <Link href={`dasboard/collectRumusUsers`}>
                         <img src='./collecticon.png' className={style.delbtn}/>
                         <div className={style.desc}> <p>Koleksi Rumus User</p></div>
                     </Link>
                </div>

                <div className={style.container}>
                <div className={style.cards}>
                     <Link href={`dasboard/more`}>
                         <img src='./settingsicon.png' className={style.delbtn}/>
                         <div className={style.desc}> <p>Lainnya</p></div>
                     </Link>
                </div>
            </div>
        </div>
        <Footer></Footer>
      </div>
   
    </>
 )


}