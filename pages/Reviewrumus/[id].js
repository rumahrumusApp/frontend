import Navbar from '../../components/Navbar'
import style from "../../styles/Reviewrumus.module.css"
import Link from "next/link"
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import axios from 'axios' 
import Footer from '../../components/Footer'

export default function ReviewRumus(){

    const router = useRouter();
    const [rumus, SetDataRumus] = useState([])
    const [infoSignin, SetInfoSignin] = useState()
    const [title, setTitle] = useState("");
    const [imgilust, setImgIlust] = useState();
    const [imgRumus, setImgRumus] = useState();
    const [imgCont, setImgCont] = useState();
    const [catatan, setCatatan] = useState("");
    const [komentar, setKomentar] = useState("");
    const [status, setStatus] = useState(0);
    const [infoUser, SetU] = useState("")

    // useEffect(() => {
    //     const id = typeof window !== 'undefined' ? window.localStorage.getItem('unm') : {}
    //     SetInfoSignin(id)
       
    // }, []);


    useEffect(()=> {
        getRumusById();
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

                    })

            }
    },[]);

    const getRumusById = async () => {

        console.log(router.query.id);
    
        try {
            const result = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/rumus/getdatasubmitbyid/${router.query.id}`)

               console.log(result.data.data)
               SetDataRumus(result.data.data);
               setKomentar(result.data.data.komentar)
               document.getElementById('kategori').innerHTML = 'Kategori: ' + result.data.data.category.name
               document.getElementById('sub-kategori').innerHTML = 'Sub Kategori: ' + result.data.data.subcategory.name
          
        } catch (error) {
           console.log(error)
        }
    }

    const handleReview = async (e) => {
        // const id = typeof window !== 'undefined' ? window.localStorage.getItem('unm') : {}
        // SetInfoSignin(id)
        const statusid = document.getElementsByName('radio').value
        const id = infoUser.uid
        const rumusid = rumus.id

    
        try {
            console.log(router.query.id);
            const result = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/rumus/review/${rumusid}`,{

                reviewer_id: id,
                komentar: document.getElementById('komentar').value,
                status_id: status,

            })

            //    console.log(result.data.data)
            //    SetDataRumus(result.data.data);
        
          router.push('/pengajuanrumus')
        } catch (error) {
           console.log(error)
        }
    }


    return(
        <>

        <div className={style.pagewhite}>
            <Navbar></Navbar>
            <div className={style.left}>
                <Link href="/pengajuanrumus">Kembali</Link>
            </div>
            <div className={style.container}>
                
            <div className={style.title}>
                <h2>Detail Review Rumus</h2>
                <p className={style.judul}>{rumus.title}</p>
                <p id="kategori">Kategori: </p>
                <p id="sub-kategori">SubKategori: </p>
                <hr/>
            </div>
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
                    <textarea disabled value={rumus.catatan}></textarea>
                </div>


                  <div className={style.komentar}>

                        <hr/>
                        <div className={style.textcomment}>
                        <p>Komentar</p>
                        <textarea id='komentar' value={komentar} onChange={(e) => setKomentar(e.target.value)} placeholder='masukan komentar...'></textarea>
                
                    <label  class={style.statusUpload}>
                        <div>
                        <input type="radio" value={4} id='st' onChange={(e) => setStatus(e.target.value)}  name="radio"></input>
                        <label for="terima">Terima</label>
                        </div>

                        <div>
                        <input type="radio" value={3} id='st' onChange={(e) => setStatus(e.target.value)} name="radio"></input>
                        <label for="revisi">Revisi</label>
                        </div>

                        <div>
                        <input type="radio"  value={5} id='st' onChange={(e) => setStatus(e.target.value)} name="radio"></input>
                        <label for="tolak">Tolak</label>
                        </div>
                    </label>

                    {/* <label class={style.status}>
                        <input type="radio" name="radio"></input>
                        <span class="checkmark">Tolak</span>
                    </label>

                    <label class={style.status}>
                        <input type="radio" id='revisi' value={4} name="radio"></input>
                        <span class="checkmark">Revisi</span>
                    </label> */}

                    <div class={style.status}>
                        <button onClick={(event) => handleReview(event)} className={style.btnSubmit}>Submit</button>
                    </div>
                    </div>  
                </div>
                </div>
            <Footer></Footer>
            </div>
        </>
    )
}