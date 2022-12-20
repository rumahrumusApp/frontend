import style from "../../../styles/ControllersInput.module.css"
import Navbar from "../../../components/Navbar";
import axios from "axios";
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Footer from '../../../components/Footer' 
import Link from "next/link"

export default function AddCategPage() {
    const user = typeof window !== 'undefined' ? window.localStorage.getItem('u') : {}
    const router = useRouter()

    const AddCategories = async(e) =>{
       

        e.preventDefault()

        try {
            const data = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/ct/createCateg`, {
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
        <div className={style.pagewhite}>
        <Navbar></Navbar>
        <div className={style.left}>
                <Link href="/dasboard/more">Kembali</Link>
        </div>
        <div className={style.container}>
            
            <form className={style.form}>
            <div>
            <h1> Tambah Kategori</h1>
            </div>


                <p>Kategori<span>*</span></p>
                <input type = 'text' id='kategori' placeholder="masukkan kategori baru..."></input>

                <p>Order<span>*</span></p>
                <input type = 'text' id='order' placeholder="masukkan nomor urutan..."></input>

                <button onClick={(event) => AddCategories(event)}>Simpan</button>

            </form>
        </div>
        <Footer></Footer>
        </div>
        </>
    )
}