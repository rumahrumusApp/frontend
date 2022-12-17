import style from "../../styles/Viewrumus.module.css"
// import Navbarsign from "../../components/Navbarsign"
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import axios from 'axios' 
import Link from "next/link";
import { SettingsIcon, StarIcon } from '@chakra-ui/icons'
import { Button } from "react-bootstrap"


export default function Viewrumus() {
const router = useRouter();
const [btnStar, setbtnIconStar] = useState('/starwhite.png')
const [rumus, setRumus] = useState([])
const [infoSignin, SetInfoSignin] = useState()
const [imgbtn, setButtonimg] = useState(style.rumushide) //before signin
const [imgshow, setImgView] = useState(style.rumuslihat) // after signin
const [btnSave, setBtnSave] = useState(style.btnSaving)
const [datacollect, setDataCollect] = useState("")

useEffect(()=> {
    getRumusById();
    // getCollect();
},[]);

useEffect(() => {
    const id = typeof window !== 'undefined' ? window.localStorage.getItem('unm') : {}
    SetInfoSignin(id)
    // changeDisplay()
    
    if(id == null ) {
        setButtonimg(style.hide);
        setBtnSave(style.hide);
        setImgView(style.show);

    } else{
         setButtonimg(style.show);
         setBtnSave(style.show);
         setImgView(style.hide);

    }

}, []);


const handleStarred = async(e, rumusid) => {

    if (btnStar == '/starwhite.png') {

        try {

            const result = await axios.post(`http://13.229.227.189:8000/collect/addCollect`,{
                user_id: infoSignin,
                rumus_id: rumusid,

            })
            
            console.log(result.data.data)
            setDataCollect(result.data.data.id)
            console.log(datacollect)
            setbtnIconStar('/startyellow.png');
            
        } catch (error) {
            
            console.log(error)
        }
       

    } else {
        
        try {
             const id = datacollect
            const result = await axios.delete(`http://13.229.227.189:8000/collect/delCollect/${id}`)
            console.log("berhasil dihapus")
            // window.location.reload()

            setbtnIconStar('/starwhite.png');
            
        } catch (error) {
            console.log(error)
        }
    }



}



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
        {/* <div className={btnSave}>
        <div className={style.iconstar}>
        <button onClick={(e)=> AddStarred(e, rumus.id)} >Simpan</button>
        </div>
        </div> */}
        <div className={btnSave}>
         <div className={style.iconStar}>
        <img src={btnStar} alt='btn' onClick={(e)=> handleStarred(e, rumus.id)} />
        </div> 
        </div>

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
                <div className={imgbtn}>
                <div className= {style.rumus}>
                <img src={rumus.img_contoh}/>
                    {/* <p>Picture</p> */}
                </div>
                </div>

                <div className={imgshow}>
                <div className={style.rumusguest}>
                <Link href={'/signin'}>
                <img src={rumus.img_contoh} className={style.imgcontoh}/>
                <button className={style.btnSignin}>signin/signup</button>
                </Link>
                </div>
                </div>

                <p>Catatan</p>
                <div className={style.rumus}>
                    <textarea value={rumus.catatan}></textarea>
                </div>
                    
            </div>
        </div>
        </>
    )
}