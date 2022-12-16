import style from "../../../styles/ControllersInput.module.css"
import Navbar from "../../../components/Navbar";
import axios from "axios";
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'

export default function Signup() {
    const user = typeof window !== 'undefined' ? window.localStorage.getItem('u') : {}
    const router = useRouter()
    const [dataCateg, setDataCateg]= useState([])



    useEffect(() => {
            
        handleDataCat()

    }, [])


    const handleDataCat = async () => {

        try {
            const result = await axios.get(`http://localhost:8000/ct/allCateg`)
            console.log(result.data.data)
            setDataCateg(result.data.data)
            

        } catch (error) {
            console.log(error)
        }
    }

    const AddSubCateg = async(e) =>{
       

        e.preventDefault()

        try {
            const data = await axios.post("http://localhost:8000/sct/addSubCateg", {
                name: document.getElementById('kategori').value,
                category_id: parseInt(document.getElementById('cat').value),
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
            <h1> Tambah Sub Kategori</h1>
            </div>


                <p>Sub Kategori<span>*</span></p>
                <input type = 'text' id='kategori' placeholder="masukkan subkategori baru..."></input>

                <p>Kategori<span>*</span></p>
                <select id='cat'> 
                    <option value={0}>Pilih Kategori</option>
                    {dataCateg.map((item) => <option  value={item.id} key={item.id} >{item.name}</option>)}
                 </select>

                <p>Order<span>*</span></p>
                <input type = 'text' id='order' placeholder="masukkan nomor urutan..."></input>

                <button onClick={(event) => AddSubCateg(event)}>Simpan</button>

            </form>
        </div>
        </>
    )
}