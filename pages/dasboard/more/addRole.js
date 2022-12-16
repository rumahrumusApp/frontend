import style from "../../../styles/ControllersInput.module.css"
import Navbar from "../../../components/Navbar";
import axios from "axios";
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Link from "next/link"

export default function Signup() {
    const user = typeof window !== 'undefined' ? window.localStorage.getItem('u') : {}
    const router = useRouter()

    const AddRole = async(e) =>{
       

        e.preventDefault()

        try {
            const data = await axios.post("http://localhost:8000/role/createRole", {
                name: document.getElementById('kategori').value,
                order: parseInt(document.getElementById('order').value),
                    
            }) 
              
            router.push(`/dasboard/more`)
            
        } catch (error) {
            
            console.log(error)

        }
    }



    return(
        <>
        <Navbar></Navbar>
        <div className={style.left}>
                <Link href="/dasboard/more">Kembali</Link>
        </div>
        <div className={style.container}>
            
            <form className={style.form}>
            <div>
            <h1> Tambah Role</h1>
            </div>


                <p>Kategori<span>*</span></p>
                <input type = 'text' id='role' placeholder="masukkan role baru..."></input>

                <p>Order<span>*</span></p>
                <input type = 'text' id='order' placeholder="masukkan nomor urutan..."></input>

                <button onClick={(event) => AddRole(event)}>Simpan</button>

            </form>
        </div>
        </>
    )
}