import Link from "next/link"
import style from "../styles/Daftarrumus.module.css"
import {useEffect, useState} from 'react'
import axios from 'axios' 
import { Button } from "react-bootstrap"
import { useRouter } from 'next/router'
import Cardscollect from "../components/CardsCollect"

export default function KontenRumusSaya(page){
    const router =useRouter()

    const [rumus, setDatarumus] = useState([])
    const [infoSignin, SetInfoSignin]=useState();

    const [collect, setCollect] = useState([])

    const id = typeof window !== 'undefined' ? window.localStorage.getItem('unm') : {}
    // SetInfoSignin(id)

    useEffect(() => {
        handleRumus()
        handleData()
    
        
    }, [])


    const handleData = async () => {

        try {
            const result = await axios.get(`http://localhost:8000/rumus/myrumus/${id}`)
            console.log(result.data.data)
            setDatarumus(result.data.data)
            

        } catch (error) {
            console.log(error)
        }
    }


    const handleRumus = async (e) => {
      
        // const id = typeof window !== 'undefined' ? window.localStorage.getItem('unm') : {}
        // SetInfoSignin(id)
    
            try {

            // e.preventDefault()
            const result = await axios.get(`http://localhost:8000/collect/collectById/${id}`)
            setCollect(result.data.data)
            console.log(result.data.data)
            
            
        
            } catch (error) {
            console.log(error)
            }

    
        
    }



    const DelData = async (e,id) => {
        
        try {
            // e.preventDefault()
            if(confirm("Hapus rumus ini?") == true){
            const result = await axios.delete(`http://localhost:8000/rumus/delRumus/${id}`)
            console.log("berhasil dihapus")
            // setDatarumus(result.data.data)

            // router.push('/rumussaya')

            window.location.reload()
        }

        } catch (error) {
            console.log(error)
        }

        router.push('/rumussaya')
    }



    console.log(page)
    if (page.page === 0) {
      

        return (
            
            <div className={style.container}>
            <div className={style.allcards}> 
            {collect.length == 0 ? <div className={style.searchnotfound}><p>Belum ada rumus yang tersimpan..</p><img src='./collectimg.png'/></div> :collect.map((item) => <Cardscollect key={item.rumus_id} data={item}></Cardscollect>)}
            
            </div>
        </div>

         )
    }

    else if (page.page === 1) {
        return(
            <>
                <div className={style.tabel}>
    
                <table>
                    <tbody>
                    <tr className={style.header}>
                        <td>Rumus</td>
                        <td>Status</td>
                        <td>Detail</td>
                    </tr>

                    {rumus.length == 0 ? <p>Loading...</p> : rumus.map((item) => <tr key={item.id}><td>{item.title}</td><td>{item.status.name}</td><td className={style.btn}><Link href={`Rumus/${item.id}`}><button className={style.btnDetail}>Lihat Detail</button></Link><Link href={'/rumussaya'}><Button onClick={(e)=> DelData(e, item.id)} className={style.btnDel}>Hapus</Button></Link></td></tr>)}
    

                    </tbody>
                </table>
    
            </div>
    
            </>
        )
    }
}