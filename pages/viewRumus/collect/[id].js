import style from "../../../styles/Viewrumus.module.css"
// import Navbarsign from "../../components/Navbarsign"
import Image from 'next/image'
import Navbar from '../../../components/Navbar'
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import axios from 'axios' 
import Link from "next/link";
import { SettingsIcon, StarIcon } from '@chakra-ui/icons'
import { Button } from "react-bootstrap"
import Footer from '../../../components/Footer'


export default function Collectrumus() {
const router = useRouter();
const [btnIconYellow, setbtnIcon] = useState(style.hide)
const [rumus, setRumus] = useState([])
const [infoSignin, SetInfoSignin] = useState()

useEffect(()=> {
    getRumusById();
},[]);

useEffect(() => {
    const id = typeof window !== 'undefined' ? window.localStorage.getItem('unm') : {}
    SetInfoSignin(id)
}, []);

// const changeDisplay =  (e) => {
//     e.preventDefault()

//     // setbtnIcon(<img src="/startyellow.png" className={btnIcon}/>)

//     if (btnIconYellow == style.hide) {

//         setbtnIcon(style.show)

//     } else {

//         setbtnIcon(style.hide)
//     }
// }



const getRumusById = async () => {

    console.log(router.query.id);

    try {
        const result = await axios.get(`http://13.229.227.189:8000/rumus/getOne/${router.query.id}`)
   
           console.log(result.data.data)
           setRumus(result.data.data);
      
      
    } catch (error) {
       console.log(error)
    }
}



    return (
        <>
     
        <Navbar></Navbar>
        <div className={style.container}>
            <div className={style.left}>
                <Link href={"/"}>Kembali</Link>
                
            </div>
           

        <div className={style.container2}>
        {/* <Button onClick={(e)=> DelStarred(e)} className={style.iconstar} >Hapus</Button> */}
        {/* <img src="/starwhite.png" onSubmit={(e)=> AddStarred(e, rumus.id)} className={style.iconstar}/>
        <img src="/startyellow.png" className={`${btnIconYellow} ${style.iconstar}`} /> */}
        <div className={style.title}>
            <h2>{rumus.title}</h2>
        </div>
                    <p> Gambar Ilustrasi</p>
                <div className={style.rumus}>
                    <img src={rumus.img_ilustrasi}/>
                    {/* <p>Picture</p> */}
                </div>

                    <p>Rumus</p>
                <div className={style.rumus}>
                <img src={rumus.img_rumus}/>
                    {/* <p>Picture</p> */}
                </div>

                    <p>Contoh perhitungan</p>
                <div className={style.rumus}>
                <img src={rumus.img_contoh}/>
                    {/* <p>Picture</p> */}
                </div>

                <p>Catatan</p>
                <div className={style.rumus}>
                    <textarea value={rumus.catatan}></textarea>
                </div>
                    
            </div>
        </div>
        <Footer></Footer>
        </>
    )
}