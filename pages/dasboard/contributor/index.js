import Link from "next/link"
import style from "../../../styles/ContriTable.module.css"
import {useEffect, useState} from 'react'
import axios from 'axios' 
import { Button } from "react-bootstrap"
import { useRouter } from 'next/router'
import Navbarsign from '../../../components/Navbar'



export default function UsersPage() {

    const [data, setData] = useState([])
    useEffect(() => {
        // handleRumus()
        handleData()
    
        
    }, [])


    const handleData = async () => {

        try {
            const result = await axios.get(`http://localhost:8000/user/getAll`)
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
            <hr/>
    
        <table>
            <tbody>
                <tr className={style.header}>
                    <td>Name</td>
                    <td>Username</td>
                    <td>Email</td>
                    <td>Pekerjaan</td>
                    <td>Asal Institusi</td>
                    <td>Role</td>
                    <td></td>
                </tr>

                {data.length == 0 ? <tr><td>Loading...</td></tr> : data.map((item) => <tr key={item.id}><td className={style.tdtitle}>{item.fullname}</td><td className={style.tdtitle}>{item.username}</td><td className={style.tdtitle}>{item.email}</td><td className={style.tdtitle}>{item.occupation.name}</td><td className={style.tdtitle}>{item.institusi_name}</td><td className={style.tdtitle}>{item.roles.name}</td><td><Link href={`/dasboard/contributor/edit/${item.id}`}><img src='/user-profile.png' /></Link><Link href={`/dasboard/contributor`}><img src='/icon-delete.png' onClick={(e)=> DelData(e, item.id)} /></Link></td></tr>)}

                </tbody>
            </table>
        </div>
        </>
    )
}