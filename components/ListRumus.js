import style from '../styles/ListRumus.module.css'
import Link from "next/link";
import axios from 'axios' 
import {useState, useEffect} from 'react'

export default function ListRumusUser(data) {
    // console.log(data.data.rumus.title)

    const [btnStar, setbtnIconStar] = useState('/startyellow.png')
    
    const DelStarred = async (e, id) => {
        // e.preventDefault()
    if( btnStar == '/startyellow.png'){
        try {
                if(confirm("Hapus rumus ini?") == true){
                const result = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/collect/delCollect/${id}`)
                console.log("berhasil dihapus")
            
                setbtnIconStar('/starwhite.png')
                window.location.reload()
            }

        } catch (error) {
           console.log(error)
        }
    }
}

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

            {rumus.length == 0 ?<div className={style.searchnotfound}><p>Belum ada rumus yang dibuat..</p><img src='./collectimg.png'/></div> : rumus.map((item) => <tr key={item.id}><td>{item.title}</td><td>{item.status.name}</td><td className={style.btn}><Link href={`Rumus/${item.id}`}><button className={style.btnDetail}>Lihat Detail</button></Link><Link href={'/rumussaya'}><Button onClick={(e)=> DelData(e, item.id)} className={style.btnDel}>Hapus</Button></Link></td></tr>)}


            </tbody>
        </table>

    </div>

    </>
)
}