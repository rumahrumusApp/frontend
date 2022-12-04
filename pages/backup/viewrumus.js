import style from "../styles/Viewrumus.module.css"
import Navbarsign from "../../components/NavbarSign";
import Navbar from '../../components/Navbar'
import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import { useRouter } from 'next/router'

import axios from 'axios' 


export default function Viewrumus(viewdata) {
    // const router = useRouter();
    // useEffect(()=> {
    //     getRumusById();
    // },[data]);

    console.log(viewdataj.data)
    const {id} = useParams()
    const [Data,setData] = useState({})
  
   


// const getRumusById = async () => {

//     // e.preventDefault()
//     // const id = data.match.params.id

//     try {
//         const result = await axios.get(`http://localhost:8000/rumus/getOne/${id}`)
//         setData(data.data)
      
//     } catch (error) {
//        console.log(error)
//     }

// }

//     return (
//         <>
//         <Navbarsign></Navbarsign>
//         {/* <Navbar></Navbar> */}
//         <div className={style.container}>
//             <div className={style.left}>
//                 <a href="./">Kembali</a>
                
//             </div>

//         <div className={style.container2}>
//                     <h2> {Data.title}</h2>
//                     <p> Gambar Ilustrasi</p>
//                 <div className={style.rumus}>
//                     <img src={Data.img_ilustrasi}/>
//                     {/* <p>Picture</p> */}
//                 </div>

//                     <p>Rumus</p>
//                 <div className={style.rumus}>
//                 <img src={Data.img_rumus}/>
//                     {/* <p>Picture</p> */}
//                 </div>

//                     <p>Contoh perhitungan</p>
//                 <div className={style.rumus}>
//                 <img src={Data.img_contoh}/>
//                     {/* <p>Picture</p> */}
//                 </div>

//                 <p>Catatan</p>
//                 <div className={style.rumus}>
//                     <textarea>{Data.catatan}</textarea>
//                 </div>
                    
//             </div>
//         </div>
//         </>
//     )
}