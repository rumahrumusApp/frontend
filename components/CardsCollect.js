import style from '../styles/CardsCollect.module.css'
import Link from "next/link";
import axios from 'axios' 

export default function CardCollect(data) {
    // console.log(data.data.rumus.title)
    
    const DelStarred = async (e, id) => {
        // e.preventDefault()
    
        try {
            if(confirm("Hapus rumus ini?") == true){
                const result = await axios.delete(`http://localhost:8000/collect/delCollect/${id}`)
                console.log("berhasil dihapus")
                // setDatarumus(result.data.data)
    
                // router.push('/rumussaya')
    
                window.location.reload()
            }
          
        } catch (error) {
           console.log(error)
        }
    }

    return(
        <>
        <div className={style.cards}>
        <img src="/icon-delete.png" onClick={(e)=> DelStarred(e, data.data.id) } className={style.delbtn}/>
            <Link href={`viewRumus/collect/${data.data.rumus_id}`}>
                <img src={data.data.rumus.img_ilustrasi}/>
                <div className={style.desc}> <p>{data.data.rumus.title}</p></div>
            </Link>

        
        </div>
        </>
    )
   
}