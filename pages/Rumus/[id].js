import style from "../../styles/Detailrumus.module.css"
import Navbarsign from "../../components/Navbar";
import {useState, useEffect} from 'react'
import axios from 'axios' 
import { useRouter } from 'next/router'
import Link from "next/link";
import Footer from '../../components/Footer'

export default function Detailrumus() {

const router = useRouter();
const [rumus, setRumus] = useState([])
const [infoRole, SetRole] = useState()
const [comentShow, setComentShow] = useState(style.viewcoment)
const [infoUser, SetU] = useState("")


useEffect(()=> {
    getRumusById();
    // getCollect();
},[]);

useEffect(()=> {
    // const ro = typeof window !== 'undefined' ? window.localStorage.getItem('rol') : {}
    // SetRole(ro)

    // if(ro == 1) {
    //     setComentShow(style.hide);
    // }
    const t = typeof window !== 'undefined' ? window.localStorage.getItem('t') : {}

    if (!t) {
        router.push('/')
    } else {
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/info?token=${window.localStorage.getItem('t')}`)
                .then((res) => res.json())
                .then((val) => {
                    SetU({
                        uid: val.info.userid,
                        uname: val.info.username,
                        role: val.info.roleuser,
                        img: val.info.pictprofile
                    }) 

                    const ro = val.info.roleuser
                    // console.log(ro)
                    if(ro == 1) {
                        setComentShow(style.hide);
                    }

                })

        }
    
},[]);


const getRumusById = async () => {

    console.log(router.query.id);

    try {
        const result = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/rumus/getOne/${router.query.id}`)
      //  setSubList(data.data)
           console.log(result.data.data)
           setRumus(result.data.data);
        //    settitle(result.data.data[0].title)
        //    setimgilust(result.data.data[0].img_ilustrasi)
        //    setimgrum(result.data.data[0].img_rumus)
        //    setimgcont(result.data.data[0].img_contoh)
        //    setnote(result.data.data[0].catatan)
       
      
    } catch (error) {
       console.log(error)
    }
}
    return (
        <>
        <div className={style.pagewhite}>
        <Navbarsign></Navbarsign>
        {/* <Navbar></Navbar> */}
        <div className={style.container}>
            <div className={style.left}>
                <Link href={`Edit/${rumus.id}`} className={style.edit}>Edit</Link>
                <Link href={"/rumussaya"} className={style.kembali}>Kembali</Link>
            </div>

        <div className={style.title}>
            <h2>{rumus.title}</h2>
        </div>
           

        <div className={style.container2}>
                    <p> Gambar Ilustrasi</p>
                <div className={style.rumus}>
                    <img src={rumus.img_ilustrasi}></img>
                    {/* <p>Picture</p> */}
                </div>

                    <p>Rumus</p>
                <div className={style.rumus}>
                    <img src={rumus.img_rumus}></img>
                    {/* <p>Picture</p> */}
                </div>

                    <p>Contoh perhitungan</p>
                <div className={style.rumus}>
                    <img src={rumus.img_contoh}></img>
                    {/* <p>Picture</p> */}
                </div>

                <p>Catatan</p>
                <div className={style.rumus}>
                    <textarea value={rumus.catatan}></textarea>
                </div>

                <div className={comentShow}>
                <p>Komentar</p>
                <div className={style.rumus}>
                <textarea value={rumus.komentar}></textarea>
                </div>
                </div>
                    
                    
            </div>
        </div>
        <Footer></Footer>
        </div>
        </>
    )
}