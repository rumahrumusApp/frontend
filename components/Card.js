import style from '../styles/Cards.module.css'
import Link from "next/link";

export default function Card(data) {
    console.log(data.data)
    

    return(
        <>
                 {/* <h2>{list.data.name}</h2> */}
                <div className={style.cards} key={data.data.id} > 
                    <Link className='link' href={`viewRumus/${data.data.id}`} >
                        <img src={data.data.img_ilustrasi}/>
                        <div className={style.desc}> <p >{data.data.title}</p></div>
                    </Link>
                </div>

        </>
    )
   
}