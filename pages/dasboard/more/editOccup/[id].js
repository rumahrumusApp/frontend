import style from "../../../../styles/ControllersInput.module.css"
import Navbar from "../../../../components/Navbar";
import axios from "axios";
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Link from "next/link"
import Footer from '../../../../components/Footer'

export default function EditOccupPage() {
    const user = typeof window !== 'undefined' ? window.localStorage.getItem('u') : {}
    const router = useRouter()
    const [data, setData] = useState([])
    const [occup, setNameoccup] = useState("")
    const [orderid, setOrderid] = useState("")

    useEffect(() => {
        getOccupbyID()
        
    }, [])


    const getOccupbyID = async() =>{
    

        try {
            const result = await axios.get(`http://13.229.227.189:8000/occup/occupById/${router.query.id}`)
            console.log(result.data.data[0])
            setData(result.data.data[0].id) 
            setNameoccup(result.data.data[0].name)
            setOrderid(result.data.data[0].order)
              
            
        } catch (error) {
            
            console.log(error)

        }
    }

    const EditOccup = async(e) =>{
       

        e.preventDefault()
       

        try {
            const data = await axios.post(`http://13.229.227.189:8000/occup/editOccup/${router.query.id}`, {
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
            <h1> Ubah Pekerjaan</h1>
            </div>

                <p>Kategori<span>*</span></p>
                <input type = 'text' id='occup' value={occup} onChange={(e)=> setNameoccup(e.target.value)} placeholder="edit kategori baru..."></input>

                <p>Order<span>*</span></p>
                <input type = 'text' id='order' value={orderid} onChange={(e)=> setOrderid(e.target.value)} placeholder="edit nomor urutan..."></input>

                <button onClick={(event) => EditOccup(event)}>Simpan</button>

            </form>
        </div>
        <Footer></Footer>
        </div>
        </>
    )
}