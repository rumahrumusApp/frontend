import style from "../../../styles/Editrumus.module.css"
import Navbarsign from '../../../components/Navbar'
import React, {useEffect, useState} from "react";
import axios from "axios";
import { useRouter } from 'next/router'
import Link from "next/link";




export default function EditRumus() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [kategori, setKategori] = useState("");
    const [subkategori, setSubkategori] = useState("");
    const [imgilust, setImgIlust] = useState();
    const [imgRumus, setImgRumus] = useState();
    const [imgCont, setImgCont] = useState();
    const [catatan, setCatatan] = useState("");
    const [infoSignin, SetInfoSignin]=useState("");
    const [catname, setCatname] = useState("");
    const [subcatname, setsubCatname] = useState("");

    const [subList, setSubList] = useState([])

    useEffect(() => {
        const id = typeof window !== 'undefined' ? window.localStorage.getItem('unm') : {}
        SetInfoSignin(id)
        // handleData()
    }, []);


    useEffect(() => {

        handleData()
        handleList()
    }, [])

    // const handleFileInputChange = (e) => {
    //     SetImg(e.target.files[0]);
    //     previewFile(e.target.files[0]);
    //   };
    
    //   const previewFile = (file) => {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onloadend = () => {
    //       setPreviewSource(reader.result);
    //     //   setSelectedFile(true);
    //     };
    //   };



    const handleData = async () => {
        try {
            
            console.log(router.query.id)

            const result = await axios.get(`http://localhost:8000/rumus/getOne/${router.query.id}`)

            setTitle(result.data.data.title)
            setKategori(result.data.data.category_id)
            setSubkategori(result.data.data.sub_category_id)
            setCatname(result.data.data.category.name)
            setsubCatname(result.data.data.subcategory.name)
            setImgIlust(result.data.data.img_ilustrasi)
            setImgRumus(result.data.data.img_rumus)
            setImgCont(result.data.data.img_contoh)
            setCatatan(result.data.data.catatan)
            

        } catch (error) {
            console.log(error)
            
        }

    }
    
    
      const handleList = async (e) => {
       
        try {
            // e.preventDefault()

    
                const id = document.getElementById('ct').value
                const respone = await axios.get(`http://localhost:8000/sct/subByCategId/${id}`)
                setSubList(respone.data.data)

                // const result = await axios.get(`http://localhost:8000/rumus/categ/${id}`)
                // //  setSubList(data.data)
                // setRumus(result.data.data)
                // console.log('Rumus', rumus)
           
      }     catch (error) {

           console.log(error)
        }
    }
    
    


    const editRumus = async(e, statusid) =>{
        e.preventDefault()

        const categ = document.getElementById('ct').value
        const subcateg = document.getElementById('sub').value

        const formData = new FormData();
        formData.append("title", title);
        formData.append("category_id", categ)
        formData.append("sub_category_id", subcateg)
        formData.append("contributor_id", infoSignin)
        formData.append("img_ilustrasi", imgilust)
        formData.append("img_rumus", imgRumus)
        formData.append("img_contoh", imgCont)
        formData.append("catatan", catatan);
        formData.append("status_id", statusid)
        
        // console.log(formData.values())
        try{
                
            await axios.post(`http://localhost:8000/rumus/editRumus/${router.query.id}` ,formData,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                  },


    
            })

            

        }catch(err){
            
            console.log(err);
        }

        router.push('/rumussaya')

    };
    

   

    return(
        <>
        <Navbarsign></Navbarsign>
        <div className={style.container}>
        
        
            <form className={style.addRumus} >
            {/* <Form onSubmit={saveRumus(onSubmit)}> */}
                 <div className={style.titles}>
                    <Link href={'/'}>Kembali</Link>
                    <h2>Buat Rumus</h2>
                </div>

                <div className={style.rumus}>
                     <p>Nama Rumus</p>
                    <input type='text' id='title' name='title' value={title} onChange={(e) => setTitle(e.target.value)}></input>
                </div>  

                <div className={style.rumus} >       
                    <p>Kategori</p>

                    <select id='ct' onChange={(event)=> handleList(event)}>
                        <option value={kategori}>{catname}</option>
                        <option value={1}>Matematika</option> 
                        <option value={2} >Fisika</option> 
                        <option value={3} >Kimia</option> 
                        <option value={4} >Ekonomi</option>
                     </select> 
                </div>

                <div className={style.rumus}>  
                        <p>Sub Kategori</p>   
                        <select id='sub' > 
                        <option value={subkategori}>{subcatname}</option>
                        {subList.map((item) => <option  value={item.id} key={item.id} >{item.name}</option>)}
                        </select> 

            </div>

                {/* <div className={style.rumus}>
                        <p>Sub Kategori</p>
                        <input type='text' id='subkategori' name='subkategori' value={subkategori}
                         onChange={(e) => setSubkategori(e.target.value)} placeholder="masukan nama rumus"></input>
                </div> */}
                
                <div className={style.image}>
                    <img src={imgilust}/>
                    </div> 
                <div className={style.rumus}>
                        <p>Upload Gambar Ilustrasi</p>
                        <input className={style.imgIlust} type='file' name='img_ilustrasi' onChange={(e) => setImgIlust(e.target.files[0])}
                         id='img_ilustrasi' placeholder="Upload Image"></input>
                         
                </div>

                <div className={style.image}>
                        <img src={imgRumus}/>
                    </div>  
                <div className={style.rumus}>
                        <p>Upload Rumus</p>
                        <input className={style.imgRumus} type='file' name='img_rumus' id='img_rumus' 
                        onChange={(e) => setImgRumus(e.target.files[0])} placeholder="Upload Image"></input>
                         
                </div>
               

                
                <div className={style.image}>
                        <img src={imgCont}/>
                    </div>  
                <div className={style.rumus}>
                    <p>Upload Contoh Perhitungan</p>   
                        <input className={style.imgHitung} type='file' name='img_contoh' id='img_contoh'
                       onChange={(e) => setImgCont(e.target.files[0])}  placeholder="Upload Image"></input>
                </div>

                <div className={style.rumus}>
                        <p>Catatan</p>
                        <input type='text'  name="catatan" value={catatan}
                         onChange={(e) => setCatatan(e.target.value)} id='catatan'></input>
                </div>

                <div className={style.rumus}>
                <div className={style.btn}>
                    {/* <button className={style.hapus}>Hapus</button> */}
                    <button onClick={(event)=> editRumus(event,2)} className={style.ajukan}>Ajukan</button>
                    {/* <button type="submit" onClick={(event)=> Add(event, document.getElementById('title').value , document.getElementById('kategori').value, document.getElementById('subkategori').value , document.getElementById('img_ilustrasi').file ,document.getElementById('catatan').value )} className={style.simpan}>Simpan</button>  */}
                    <button type="submit" onClick={(event)=> editRumus(event,1)} className={style.simpan}>Simpan</button>
                </div>
                </div>
                 
                </form>
              
            </div>
        </>
    )
    
}
