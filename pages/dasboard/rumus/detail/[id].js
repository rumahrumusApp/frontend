import Link from "next/link"
import style from "../../../../styles/RumusGetView.module.css"
import {useEffect, useState} from 'react'
import axios from 'axios' 
import { Button } from "react-bootstrap"
import { useRouter } from 'next/router'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'

export default function RumusPage() {

    const [data, setData] = useState([])
    const [cat, setCat] = useState('')
    const router = useRouter();

    useEffect(() => {
        // handleRumus()
        handleData()
    
        
    }, [])

    const handleData = async () => {

        try {
            const result = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/rumus/getOne/${router.query.id}`)
            console.log(result.data.data)
            setData(result.data.data)

            document.getElementById('kategori').innerHTML = 'Kategori: ' + result.data.data.category.name
            document.getElementById('sub-kategori').innerHTML = 'Sub Kategori: ' + result.data.data.subcategory.name
            // console.log('Category: ', result.data.data.category.name)
            // setCat(result.data.data.category.name)
            

        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
     
        <Navbar></Navbar>
        <div className={style.container}>
            <div className={style.left}>
                <Link href={`/dasboard/rumus`}>Kembali</Link>
                
            </div>
           

        <div className={style.container2}>
        <div className={style.title}>
            <h2>{data.title}</h2>
            <p id="kategori">Kategori: </p>
            <p  id="sub-kategori">SubKategori: </p>
        </div>
        <hr/>
                <p> Gambar Ilustrasi</p>
                <div className={style.rumus}>
                    <img src={data.img_ilustrasi}/>
                    {/* <p>Picture</p> */}
                </div>

                <p>Rumus</p>
                <div className={style.rumus}>
                <img src={data.img_rumus}/>
                    {/* <p>Picture</p> */}
                </div>

                <p>Contoh perhitungan</p>
                <div className={style.rumus}>
                <img src={data.img_contoh}/>
                    {/* <p>Picture</p> */}
                </div>

                <p>Catatan</p>
                <div className={style.rumus}>
                    <textarea value={data.catatan}></textarea>
                </div>
                    

                <p>Komentar</p>
                <div className={style.rumus}>
                <textarea value={data.komentar}></textarea>
                </div>

            </div>
        </div>
            <Footer></Footer>
        </>
    )

}