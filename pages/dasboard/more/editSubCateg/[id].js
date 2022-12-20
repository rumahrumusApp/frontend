import style from "../../../../styles/ControllersInput.module.css"
import Navbar from "../../../../components/Navbar";
import axios from "axios";
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Link from "next/link"
import Footer from '../../../../components/Footer'

export default function EditSubPage() {
    const user = typeof window !== 'undefined' ? window.localStorage.getItem('u') : {}
    const router = useRouter()
    const [dataCateg, setDataCateg] = useState([])
    const [cat, setCat] = useState(-1)
    const [namesub, setNameSubCat] = useState("")
    const [orderid, setOrderid] = useState("")

    useEffect(() => {
        getSubCatbyID()
        handleDataCat()
        
    }, [])


    const handleDataCat = async () => {

        try {
            const result = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/ct/allCateg`)
            console.log(result.data.data)
            setDataCateg(result.data.data)
            

        } catch (error) {
            console.log(error)
        }
    }


    const getSubCatbyID = async() =>{
    

        try {
            const result = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/sct/subById/${router.query.id}`)
            console.log(result.data.data[0])
            setNameSubCat(result.data.data[0].name)
            setCat(result.data.data[0].category_id)
            setOrderid(result.data.data[0].order)
              
            
        } catch (error) {
            
            console.log(error)

        }
    }

    const EditSubCategories = async(e) =>{
       

        e.preventDefault()
       

        try {
            const data = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/sct/editSubCateg/${router.query.id}`, {
                name: document.getElementById('kategori').value,
                category_id: parseInt(document.getElementById('subcat').value),
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
            <h1> Ubah Sub Kategori</h1>
            </div>

                <p>Kategori<span>*</span></p>
                <input type = 'text' id='kategori' value={namesub} onChange={(e)=> setNameSubCat(e.target.value)} placeholder="edit kategori baru..."></input>

                <p>Kategori<span>*</span></p>
                { dataCateg.length == 0 ? <select id="subcat"><option value={-1}>Pilih Kategori</option><option>Loading...</option></select> : <select id='subcat' value={cat} onChange={(e) => setCat(e.target.value)} >{ dataCateg.map((item) => <option key={item.id} value={item.id}>{item.name}</option>) }</select> }
               
                <p>Order<span>*</span></p>
                <input type = 'text' id='order' value={orderid} onChange={(e)=> setOrderid(e.target.value)} placeholder="edit nomor urutan..."></input>

                <button onClick={(event) => EditSubCategories(event)}>Simpan</button>

            </form>
        </div>
        <Footer></Footer>
        </div>
        </>
    )
}