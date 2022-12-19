import style from "../styles/Rumussaya.module.css"
import Navbarsign from '../components/Navbar'
import KontenRumusSaya from "../components/KontenRumusSaya"
import {useState} from 'react'
import Link from "next/link";
import Footer from '../components/Footer'


export default function RumusSaya(){
    const [hover, setHover] = useState([style.bgOrange, style.bgNone])
    const [content, setContent] = useState(<KontenRumusSaya page={0} />)


    const changeDisplay = async (e, index) => {
        e.preventDefault()
        
        if (index == 0) {
            setHover([style.bgOrange, style.bgNone])
            setContent(<KontenRumusSaya page={0} />)
        }

        else {
            setHover([style.bgNone, style.bgOrange])
            setContent(<KontenRumusSaya page={1} />)
        }
    }
    

    return(
        <>
        <Navbarsign></Navbarsign>
        <div className={style.container}>
            <div className={style.rumus}> 
                <h2>Rumus Saya</h2>
                <div className={style.list}>
                    <Link className={hover[0]} onClick={(event) => changeDisplay(event, 0)} href={'/rumussaya'}>Rumus Favorit</Link>
                    <hr/>
                    <Link className={hover[1]} onClick={(event) => changeDisplay(event, 1)} href={'/rumussaya'}>Daftar Rumus yang Dibuat</Link>
            </div>

        {/* <div className={style.allcards}>
            <div className={style.cards}>
                <a href="./viewrumus"><img src='./cari_rumus.png'/></a>
                <p>Persegi</p>
            </div>

            <div className={style.cards}>
                <a href="./viewrumus"><img src='./cari_rumus.png'/></a>
                <p>Persegi Panjang</p>
            </div> */}

            {/* <DaftarRumus></DaftarRumus> */}
            {content}
        </div>

        </div>
        <Footer></Footer>
        {/* </div> */}
        </>
       
    )
    
}