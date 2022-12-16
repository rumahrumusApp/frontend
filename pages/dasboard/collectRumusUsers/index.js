import Link from "next/link"
import style from "../../../styles/ContriTable.module.css"
import {useEffect, useState} from 'react'
import axios from 'axios' 
import { Button } from "react-bootstrap"
import { useRouter } from 'next/router'
import Navbarsign from '../../../components/Navbar'



export default function CollectUsersPage() {

    const [data, setData] = useState([])
    useEffect(() => {
        // handleRumus()
        handleData()
    
        
    }, [])


    const handleData = async () => {

        try {
            const result = await axios.get(`http://localhost:8000/collect/allCollect`)
            console.log(result.data.data)
            setData(result.data.data)
            

        } catch (error) {
            console.log(error)
        }
    }

    const DelData = async (e,id) => {
        
        try {
            // e.preventDefault()
            if(confirm("Hapus rumus ini?") == true){
            const result = await axios.delete(`http://localhost:8000/user/delUser/${id}`)
            console.log("berhasil dihapus")
            // setDatarumus(result.data.data)

            // router.push('/rumussaya')

            window.location.reload()
        }

        } catch (error) {
            console.log(error)
        }

        // router.push('/rumussaya')
    }



    return (
        <>
        <Navbarsign></Navbarsign>
        <div className={style.left}>
                <Link href={`/dasboard`}>Kembali</Link>   
        </div>
       
        <div className={style.tabel}>
            <h2>Data User</h2>
            <div>
            <Link href={'/dasboard/contributor/addUsers'} className={style.addBtn}>Tambah Sub Kategori</Link>
            </div>
    
        <table>
            <tbody>
                <tr className={style.header}>
                    <td>ID</td>
                    <td>ID User</td>
                    <td>Username</td>
                    <td></td>
                </tr>

                {data.length == 0 ? <tr><td>Loading...</td></tr> : data.map((item) => <tr key={item.id}><td className={style.tdtitle}>{item.id}</td><td className={style.tdtitle}>{item.user_id}</td><td className={style.tdtitle}>{item.users.username}</td><td><Link href={`/dasboard/collectRumusUsers/Collects/${item.user_id}`}><button>Lihat Koleksi</button></Link></td></tr>)}

                </tbody>
            </table>
        </div>
        </>
    )
}