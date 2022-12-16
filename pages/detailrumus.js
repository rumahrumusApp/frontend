import style from "../styles/Detailrumus.module.css"
import Navbar from '../components/Navbar'
import {useState} from 'react'
import axios from 'axios' 
import Link from "next/link";

export default function Detailrumus() {
    return (
        <>
        <Navbar></Navbar>
        {/* <Navbar></Navbar> */}
        <div className={style.container}>
            <div className={style.left}>
                <Link className={style.edit} href={"/createrumus"}>Edit</Link>
                <Link href={"/rumussaya"}>Kembali</Link>
            </div>

        <div className={style.title}>
            <h2>Persegi</h2>
        </div>
           

        <div className={style.container2}>
                    <p> Gambar Ilustrasi</p>
                <div className={style.rumus}>
                    <img src="/rumus/ilust.png"></img>
                    {/* <p>Picture</p> */}
                </div>

                    <p>Rumus</p>
                <div className={style.rumus}>
                    <img src="/rumus/rumus.png"></img>
                    {/* <p>Picture</p> */}
                </div>

                    <p>Contoh perhitungan</p>
                <div className={style.rumus}>
                    <img src="/rumus/cthsoal.png"></img>
                    {/* <p>Picture</p> */}
                </div>
                    
            </div>
        </div>
        </>
    )
}