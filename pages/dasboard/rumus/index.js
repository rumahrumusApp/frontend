import Link from "next/link"
import style from "../../../styles/DataRumus.module.css"
import {useEffect, useState} from 'react'
import axios from 'axios' 
import { Button } from "react-bootstrap"
import { useRouter } from 'next/router'
import Navbar from "../../../components/Navbar"
import Footer from '../../../components/Footer'

export default function DataRumus() {

    const [data, setData] = useState([])

    useEffect(() => {
        // handleRumus()
        handleData()
    
        
    }, [])


    
    const handleData = async () => {

        try {
            const result = await axios.get(`http://13.229.227.189:8000/rumus/allrumus`)
            console.log(result.data.data)
            setData(result.data.data)
            

        } catch (error) {
            console.log(error)
        }
    }



    const DelData = async (e,id) => {

        try {
          
            if(confirm("Hapus rumus ini?") == true){
            const result = await axios.delete(`http://13.229.227.189:8000/rumus/delRumus/${id}`)
            console.log("berhasil dihapus")
    
            window.location.reload()
        }

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
          
          <div className={style.pagewhite}>
            <Navbar></Navbar>
            <div className={style.left}>
                <Link href={`/dasboard`}>Kembali</Link>   
            </div>

            <div className={style.tabel}>
            <h2>Data Rumus</h2>
            <hr/>
    
    <table>
        <tbody>
            <tr className={style.header}>
                <td>Rumus</td>
                <td>Status</td>
                <td>Contributor</td>
                <td>Last Updated</td>
                <td></td>
            </tr>

            {data.length == 0 ? <p>Loading...</p> : data.map((item) => <tr key={item.id}><Link href={`/dasboard/rumus/detail/${item.id}`} className={style.tdtitle}><td className={style.tdtitle}>{item.title}</td></Link><td className={style.tdtitle}>{item.status.name}</td><td className={style.tdtitle}>{item.contributor.username}</td><td>{item.updatedAt.slice(0,10)}</td><td><Link href={`/dasboard/rumus/edit/${item.id}`}><img src='/editicon.png' /></Link><Link href={`/dasboard/contributor`}><img src='/icon-delete.png' onClick={(e)=> DelData(e, item.id)} /></Link></td></tr>)}
            </tbody>
        </table>
    </div>
        <Footer></Footer>
    </div>
        </>
    )





}
