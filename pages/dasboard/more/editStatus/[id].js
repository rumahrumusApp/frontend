import style from "../../../../styles/ControllersInput.module.css"
import Navbar from "../../../../components/Navbar";
import axios from "axios";
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Link from "next/link"
import Footer from '../../../../components/Footer'

export default function EditStatusPage() {
    const user = typeof window !== 'undefined' ? window.localStorage.getItem('u') : {}
    const router = useRouter()
    const [data, setData] = useState([])
    const [name, setName] = useState("")
    const [orderid, setOrderid] = useState("")
    const t = typeof window !== 'undefined' ? window.localStorage.getItem('t') : {}

    useEffect(() => {
        getStatusbyID()
        
    }, [])


    const getStatusbyID = async() =>{
    

        try {
            const result = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/status/statusById/${router.query.id}`)
            console.log(result.data.data[0])
            setData(result.data.data[0].id) 
            setName(result.data.data[0].name)
            setOrderid(result.data.data[0].order)
              
            
        } catch (error) {
            
            console.log(error)

        }
    }

    const EditStatus = async(e) =>{
       

        e.preventDefault()
       

        try {
            const data = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/status/editStatus/${router.query.id}?token=${t}`, {
                name: document.getElementById('status').value,
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
            <h1>Ubah Status</h1>
            </div>

                <p>Kategori<span>*</span></p>
                <input type = 'text' id='role' value={name} onChange={(e)=> setName(e.target.value)} placeholder="edit status baru..."></input>

                <p>Order<span>*</span></p>
                <input type = 'text' id='order' value={orderid} onChange={(e)=> setOrderid(e.target.value)} placeholder="edit nomor urutan..."></input>

                <button onClick={(event) => EditStatus(event)}>Simpan</button>

            </form>
            </div>
            <Footer></Footer>
        </div>
        </>
    )
}