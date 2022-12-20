import style from "../../../../styles/ControllersInput.module.css"
import Navbar from "../../../../components/Navbar";
import axios from "axios";
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Link from "next/link"
import Footer from "../../../../components/Footer";

export default function EditRolePage() {
    const user = typeof window !== 'undefined' ? window.localStorage.getItem('u') : {}
    const router = useRouter()
    const [data, setData] = useState([])
    const [name, setName] = useState("")
    const [orderid, setOrderid] = useState("")

    useEffect(() => {
        getRolebyID()
        
    }, [])


    const getRolebyID = async() =>{
    

        try {
            const result = await axios.get(`http://13.229.227.189:8000/role/roleById/${router.query.id}`)
            console.log(result.data.data[0])
            setData(result.data.data[0].id) 
            setName(result.data.data[0].name)
            setOrderid(result.data.data[0].order)
              
            
        } catch (error) {
            
            console.log(error)

        }
    }

    const EditRole = async(e) =>{
       

        e.preventDefault()
       

        try {
            const data = await axios.post(`http://13.229.227.189:8000/role/editRole/${router.query.id}`, {
                name: document.getElementById('role').value,
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
            <h1>Ubah Role</h1>
            </div>

                <p>Kategori<span>*</span></p>
                <input type = 'text' id='role' value={name} onChange={(e)=> setName(e.target.value)} placeholder="edit role baru..."></input>

                <p>Order<span>*</span></p>
                <input type = 'text' id='order' value={orderid} onChange={(e)=> setOrderid(e.target.value)} placeholder="edit nomor urutan..."></input>

                <button onClick={(event) => EditRole(event)}>Simpan</button>

            </form>
        </div>
            <Footer></Footer>
        </div>
        </>
    )
}