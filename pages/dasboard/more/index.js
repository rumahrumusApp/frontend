import style from "../../../styles/ControllersPage.module.css"
import Navbarsign from '../../../components/Navbar'
import KontenMoreControllers from "../../../components/KontenMoreControllers"
import {useState} from 'react'
import Link from "next/link";
import Footer from '../../../components/Footer'

export default function MoreControllers(){
    const [hover, setHover] = useState([style.bgOrange, style.bgNone])
    const [content, setContent] = useState(<KontenMoreControllers page={0} />)


    const changeDisplay = async (e, index) => {
        e.preventDefault()
        
        if (index == 0) {
            setHover([style.bgOrange, style.bgNone, style.bgNone, style.bgNone, style.bgNone])
            setContent(<KontenMoreControllers page={0} />)
        }

        else if (index == 1){
            setHover([style.bgNone, style.bgOrange, style.bgNone, style.bgNone, style.bgNone])
            setContent(<KontenMoreControllers page={1} />)
        }

        else if (index == 2){
            setHover([style.bgNone, style.bgNone, style.bgOrange, style.bgNone, style.bgNone])
            setContent(<KontenMoreControllers page={2} />)
        }

        else if (index == 3){
            setHover([style.bgNone, style.bgNone, style.bgNone, style.bgOrange, style.bgNone])
            setContent(<KontenMoreControllers page={3} />)
        }

        else {
            setHover([style.bgNone, style.bgNone, style.bgNone, style.bgNone , style.bgOrange])
            setContent(<KontenMoreControllers page={4} />)
        }
    }
    

    return(
        <>
       
        <div className={style.container}>
        <Navbarsign></Navbarsign>
            <div className={style.rumus}> 
                {/* <h2>Rumus Saya</h2> */}
                <div className={style.list}>
                    <hr className={style.linehr}/>
                    <Link className={hover[0]} onClick={(event) => changeDisplay(event, 0)} href={'/more'}>Kategori</Link>
                    <hr/>
                    <Link className={hover[1]} onClick={(event) => changeDisplay(event, 1)} href={'/more'}>Sub Kategori</Link>
                    <hr/>
                    <Link className={hover[2]} onClick={(event) => changeDisplay(event, 2)} href={'/more'}>Role</Link>
                    <hr/>
                    <Link className={hover[3]} onClick={(event) => changeDisplay(event, 3)} href={'/more'}>Pekerjaan</Link>
                    <hr/>
                    <Link className={hover[4]} onClick={(event) => changeDisplay(event, 4)} href={'/more'}>Status</Link>
                    <hr/>
                    {/* <Link className={hover[1]} onClick={(event) => changeDisplay(event, 1)} href={'/more'}>DataCollection</Link>
                    <hr/> */}
            </div>

        
            {content}
        </div>
        <Footer></Footer>
        </div>
        </>
    )
    
}
