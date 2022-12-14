import style from "../../../styles/ControllersInput.module.css"
import Navbar from "../../../components/Navbar";
import axios from "axios";
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Link from "next/link"
import Footer from '../../../components/Footer'

export default function AddOccupPage() {
    const user = typeof window !== 'undefined' ? window.localStorage.getItem('u') : {}
    const router = useRouter()

    const t = typeof window !== 'undefined' ? window.localStorage.getItem('t') : {}
    const AddOccup = async(e) =>{
       

        e.preventDefault()

        try {
            const data = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/role/createRole?token=${t}`, {
                name: document.getElementById('occup').value,
                order: parseInt(document.getElementById('order').value),
                    
            }) 
              
            router.push(`/dasboard/more`)
            
        } catch (error) {
            
            console.log(error)

        }
    }



    return(
        <>
        <div className={style.pagewhite}>
        <Navbar></Navbar>
        <div className={style.left}>
                <Link href="/dasboard/more">Kembali</Link>
        </div>
        <div className={style.container}>
            
            <form className={style.form}>
            <div>
            <h1> Tambah Pekerjaan</h1>
            </div>


                <p>Kategori<span>*</span></p>
                <input type = 'text' id='occup' placeholder="masukkan pekerjaan baru..."></input>

                <p>Order<span>*</span></p>
                <input type = 'text' id='order' placeholder="masukkan nomor urutan..."></input>

                <button onClick={(event) => AddOccup(event)}>Simpan</button>

            </form>
        </div>
        <Footer></Footer>
        </div>
        </>
    )
}