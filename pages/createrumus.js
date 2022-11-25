import style from "../styles/Createrumus.module.css"
import Navbarsign from '../components/Navbarsign'
import React, {useState} from "react";
import Form from "react-bootstrap"
import axios from "axios";
import { useRouter } from 'next/router'



export default function CreateRumus() {


    const handleFormSubmit = async (e) => {
        // prevent the page from reloading
        e.preventDefault();
    
        // construct form data
        const formData = new FormData(e.currentTarget);
        const files = e.currentTarget.files;
        for (let i = 0; i < files.length; i++) {
          formData.append('img_ilustrasi', files[0]);
          formData.append('img_rumus', files[1]);
          formData.append('img_contoh', files[2]);
    }
}

    const Add = async(e, title, kategori,subkategori, img_ilustrasi, img_rumus, img_contoh, catatan) =>{
        e.preventDefault()
        console.log(title, kategori,subkategori, img_ilustrasi, img_rumus, img_contoh, catatan)
    
        try{
            const data = await axios.post("http://localhost:8000/rumus/addRumus", formData ,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                  },
            
                title: title,
                kategori: kategori,
                subkategori: subkategori,
                img_ilustrasi: img_ilustrasi,
                img_rumus: img_rumus,
                img_contoh: img_contoh,
                catatan: catatan
    
            })

        
        }catch(err){
            
            console.log(err);
        }

    }
    

    // const router = useRouter()
    // const [title, setTitle] = useState("");
    // const [kategori, setKategori] = useState("");
    // const [subkategori, setSubkategori] = useState("");
    // const [imgilust, setImgIlust] = useState([]);
    // const [imgRumus, setImgRumus] = useState([]);
    // const [imgCont, setImgCont] = useState([]);
    // const [catatan, setCatatan] = useState("");
    // const [fileInputState, setFileInputState] = useState([]);
    

    // const handleFileInputChange = (e) => {
    //     const { files } = e.target;
    //     const validImageFiles = [];
    //     for (let i = 0; i < files.length; i++) {
    //       const file = files[i];
    //       validImageFiles.push(file);
    //     }
    //     if (validImageFiles.length) {
    //       setFileInputState(validImageFiles);
    //       return;
    //     }
    //   };
    

    // const saveRumus = async(e)=> {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append("title", title);
    //     formData.append("kategori", kategori);
    //     formData.append("subkategori", subkategori);
    //     formData.append("img_ilustrasi", imgilust);
    //     formData.append("img_rumus", imgRumus);
    //     formData.append("img_contoh", imgCont);
    //     Object.values(fileInputState).forEach((file) => {
    //         formData.append(["img_ilustrasi","img_rumus","img_contoh"], file);
    //       });
    //     // Object.values(imgilust).forEach((file) => {
    //     //     formData.append("img_ilustrasi", imgilust);
    //     //   });

    //     //   Object.values(imgRumus).forEach((file) => {
    //     //     formData.append("img_rumus", imgRumus);
    //     //   });

    //     //   Object.values(imgCont).forEach((file) => {
    //     //     formData.append("img_contoh", imgCont);
    //     //   });

    //     formData.append("catatan", catatan);


    //     try {
    //     console.log(formData)

    //         await axios.post("http://localhost:8000/rumus/addRumus", formData, {
    //             headers: {
    //                 "Content-type": "multipart/form-data"
    //             },
    //             // body: JSON.stringify(fields)
    //         }); 

           

    //         // router.push("/")

    //     } catch (error) {
    //         console.log(error);
    //     }
    //     console.log(formData)

    // }

    return(
        <>
        <Navbarsign></Navbarsign>
        <div className={style.container}>
        
        
            <form  className={style.addRumus} method="POST" encType="multipart/form-data" onSubmit={saveRumus}>
            {/* <Form onSubmit={saveRumus(onSubmit)}> */}
                 <div className={style.titles}>
                    <a href="/">Kembali</a>
                    <h2>Buat Rumus</h2>
                </div>

                <div className={style.rumus}>
                     <p>Nama Rumus</p>
                    <input type='text' id='title' name='title' value={title}
                    onChange={(e) => setTitle(e.target.value)} placeholder="masukan nama rumus"></input>
                </div>  

                <div className={style.rumus}>       
                    <p>Kategori</p>
                    <select id ='kategori' name='kategori' value={kategori}
                    onChange={(e) => setKategori(e.target.value)} >
                        <option>Matematika</option>
                        <option>Fisika</option>
                        <option>Kimia</option>
                        <option>Ekonomi</option>
                     </select>
                </div>

                <div className={style.rumus}>
                        <p>Sub Kategori</p>
                        <input type='text' id='subkategori' name='subkategori' value={subkategori}
                    onChange={(e) => setSubkategori(e.target.value)}   placeholder="masukan nama rumus"></input>
                </div>
                
                <div className={style.rumus}>
                        <p>Upload Gambar Ilustrasi</p>
                        <input className={style.imgIlust} type='file' 
                    onChange={handleFormSubmit} name='img_ilustrasi'  id='img_ilustrasi' placeholder="Upload Image"></input>
                </div>

                <div className={style.rumus}>
                        <p>Upload Rumus</p>
                        <input className={style.imgRumus} type='file' name='img_rumus' 
                        onChange={handleFormSubmit} id='img_rumus' placeholder="Upload Image"></input>
                </div>

                <div className={style.rumus}>
                        <p>Upload Contoh Perhitungan</p>
                        <input className={style.imgHitung} type='file' name='img_contoh' 
                    onChange={handleFormSubmit} id='img_contoh'   placeholder="Upload Image"></input>
                </div>

                <div className={style.rumus}>
                        <p>Catatan</p>
                        <input type='text'  name="catatan" value={catatan}
                    onChange={(e) => setCatatan(e.target.value)} id='catatan'></input>
                </div>

                <div className={style.rumus}>
                <div className={style.btn}>
                    <a href="" className={style.hapus}>Hapus</a>
                    <a href="" className={style.ajukan}>Ajukan</a>
                    <button type="submit" onClick={(event)=> Add(event, document.getElementById('title').value , document.getElementById('kategori').value, document.getElementById('subkategori').value , document.getElementById('catatan').value )} className={style.simpan}>Simpan</button> 
                    {/* <button type="submit" onSubmit={saveRumus} className={style.simpan}>Simpan</button> */}
                </div>
                </div>
                 
                </form>
              
            </div>
        </>
    )
    
}