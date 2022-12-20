import style from '../styles/CardsCollect.module.css'
import Link from "next/link";
import axios from 'axios' 
import {useState, useEffect} from 'react'

export default function CardCollect(data) {
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
        <div className={style.cards}>
        <img src={btnStar} onClick={(e)=> DelStarred(e, data.data.id) } className={style.delbtn}/>
            <Link href={`viewRumus/collect/${data.data.rumus_id}`}>
                <img src={data.data.rumus.img_ilustrasi}/>
                <div className={style.desc}> <p>{data.data.rumus.title}</p></div>
            </Link>

        
        </div>
        </>
    )
   
}