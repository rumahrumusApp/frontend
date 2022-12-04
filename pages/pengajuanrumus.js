import style from "../styles/Accrumus.module.css"
import Navbar from '../components/Navbar'
import Link from "next/link"
import {useEffect, useState} from 'react'
import axios from 'axios' 
import { useRouter } from 'next/router'

export default function AccRumus() {
    const [rumus, setDataRumus] = useState([])
    const [infoSignin, SetInfoSignin] = useState()
    const router = useRouter()
    const [statusid, setstatus] = useState("")

    useEffect(() => {
        const id = typeof window !== 'undefined' ? window.localStorage.getItem('unm') : {}
        SetInfoSignin(id)
       
    }, []);

    const handleData = async ()=> {
        try {
            const result = await axios.get(`http://localhost:8000/rumus/all`)
            console.log(result.data.data)
            setDataRumus(result.data.data)
            setstatus(result.data.status.name)

            // console.log(result.data.data.Status.name)
            // console.log(result.data.contributor.username)

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        handleData()
    }, [])

    return(
        <>
            <Navbar></Navbar>
            <div className={style.left}>
                <Link href="/">Kembali</Link>
            </div>
            <div className={style.container}>
            <div className={style.tabel}>
                <h2>Daftar Ajuan Rumus</h2>
                <hr/>

    
                <table>
                    <tr className={style.header}>
                        {/* <td>No</td> */}
                        <td>Rumus</td>
                        <td>Contributor</td>
                        <td>Status</td>
                        <td>Detail</td>
                        {/* <td>{statusid}</td> */}
                    </tr>


                    {rumus.length == 0 ? <p>Loading...</p> : rumus.map((item) => <tr key={item.id}><td className={style.tdtitle}>{item.title}</td><td>{item.contributor.username}</td><td>{item.status.name}</td><td><Link href={`Reviewrumus/${item.id}`}><button className={style.btnDetail}>Lihat Detail</button></Link></td></tr>)}

    
    
                </table>
    
            </div>
            </div>
        </>
    )
}