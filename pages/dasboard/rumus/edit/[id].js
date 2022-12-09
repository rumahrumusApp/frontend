import style from "../../../../styles/Editrumus.module.css"
import Navbarsign from '../../../../components/Navbar'
import React, {useEffect, useState} from "react";
import axios from "axios";
import { useRouter } from 'next/router'
import Link from "next/link";




export default function EditRumusByAdmin() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [kategori, setKategori] = useState();
    const [subkategori, setSubkategori] = useState();
    const [imgIlust, setImgIlust] = useState();
    const [imgRumus, setImgRumus] = useState();
    const [imgCont, setImgCont] = useState();
    const [catatan, setCatatan] = useState("");
    const [komentar, setKomentar]=useState("");
    const [data, setData] = useState([]);
    const [catname, setCatname] = useState("");


    const [previewSourceImgIlust, setPreviewSourceImgIlust] = useState("");
    const [previewSourceImgRum, setPreviewSourceImgRum] = useState("");
    const [previewSourceImgCont, setPreviewSourceImgCont] = useState("");
    const [selectedFileIlust, setSelectedFileIlust] = useState(false);
    const [selectedFileRum, setSelectedFileRum] = useState(false);
    const [selectedFileCont, setSelectedFileCont] = useState(false);


  const [CatList, setCatList] = useState([])
    const [subList, setSubList] = useState([])

    useEffect(() => {

        fetch(`http://localhost:8000/rumus/getOne/${router.query.id}`)
        .then((res) => res.json())
        .then((val) => {
          setData(val.data)

          fetch(`http://localhost:8000/sct/subByCategId/${val.data.category_id}`)
          .then((res) => res.json())
          .then((data) => {
            setSubList(data.data)
          })
        })
    
    }, []);


    useEffect(() => {

        handleData()
        handleList()
    }, [])

    const handleFileInputImgIlust = (e) => {
        setImgIlust(e.target.files[0]);
        previewFileImgIlust(e.target.files[0]);
      };
    
      const previewFileImgIlust = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setPreviewSourceImgIlust(reader.result);
          setSelectedFileIlust(true);
        };
      };

      const handleFileInputImgRumus = (e) => {
        setImgRumus(e.target.files[0]);
        previewFileImgRumus(e.target.files[0]);
      };
    
      const previewFileImgRumus = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setPreviewSourceImgRum(reader.result);
          setSelectedFileRum(true);
        };
      };


      const handleFileInputImgContoh = (e) => {
        setImgCont(e.target.files[0]);
        previewFileImgCont(e.target.files[0]);
      };
    
      const previewFileImgCont = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setPreviewSourceImgCont(reader.result);
          setSelectedFileCont(true);
        };
      };



    const handleData = async () => {
        try {
            
            console.log(router.query.id)

            const result = await axios.get(`http://localhost:8000/rumus/getOne/${router.query.id}`)

            setTitle(result.data.data.title)
            setKategori(result.data.data.category_id)
            setSubkategori(result.data.data.sub_category_id)
            setCatname(result.data.data.category.name)
            setImgIlust(result.data.data.img_ilustrasi)
            setImgRumus(result.data.data.img_rumus)
            setImgCont(result.data.data.img_contoh)
            setCatatan(result.data.data.catatan)
            setKomentar(result.data.data.komentar)
            

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
        const id = typeof window !== 'undefined' ? window.localStorage.getItem('unm') : {}
        SetInfoSignin(id)

        const categ = document.getElementById('ct').value
        const subcateg = document.getElementById('sub').value

        const formData = new FormData();
        formData.append("title", title);
        formData.append("category_id", categ)
        formData.append("sub_category_id", subcateg)
        formData.append("contributor_id", id)
        formData.append("img_ilustrasi", imgIlust)
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
                    <Link href={'/dasboard/rumus'}>Kembali</Link>
                    <h2>Edit Rumus</h2>
                    <hr/>
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

                        {/* { CatList.length == 0 ? <select id="ct"><option value={-1}>Pilih Kategori</option><option>Loading...</option></select> : <select id='ct' value={kategori} onClick={(event) => setKategori(event)} onChange={(event) => handleList(event)}>{ CatList.map((item) => <option key={item.id} value={item.id}>{item.name}</option>) }</select> }    */}
                </div>

                <div className={style.rumus}>  
                        <p>Sub Kategori</p>   
                        { subList.length == 0 ? <select id="sub"><option value={-1}>Pilih Kategori</option><option>Loading...</option></select> : <select id='sub' value={subkategori} onChange={(event)=> setSubkategori(event)}>{ subList.map((item) => <option key={item.id} value={item.id}>{item.name}</option>) }</select> }
                        

            </div>

                <div className={style.image}>
                {!selectedFileIlust ? (
                  <img src={imgIlust}/>
            
              
            ) : (
             
                <img src={previewSourceImgIlust}></img>
              
            )}
                    </div> 
                <div className={style.rumus}>
                        <p>Upload Gambar Ilustrasi</p>
                        <input className={style.imgIlust} type='file' name='img_ilustrasi' onChange={handleFileInputImgIlust}
                         id='img_ilustrasi' placeholder="Upload Image"></input>
                         
                </div>

                <div className={style.image}>
                {!selectedFileRum ? (
                  <img src={imgRumus}/>
            
              
            ) : (
             
                <img src={previewSourceImgRum}></img>
              
            )}
                    </div>  
                <div className={style.rumus}>
                        <p>Upload Rumus</p>
                        <input className={style.imgRumus} type='file' name='img_rumus' id='img_rumus' 
                        onChange={handleFileInputImgRumus} placeholder="Upload Image"></input>
                         
                </div>
               

                
                <div className={style.image}>
                {!selectedFileCont ? (
                  <img src={imgCont}/>
            
              
            ) : (
             
                <img src={previewSourceImgCont}></img>
              
            )}
                    </div>  
                <div className={style.rumus}>
                    <p>Upload Contoh Perhitungan</p>   
                        <input className={style.imgHitung} type='file' name='img_contoh' id='img_contoh'
                       onChange={handleFileInputImgContoh}  placeholder="Upload Image"></input>
                </div>

                <div className={style.rumus}>
                        <p>Catatan</p>
                        <input type='text'  name="catatan" value={catatan}
                         onChange={(e) => setCatatan(e.target.value)} id='catatan'></input>
                </div>

                <div className={style.rumus}>
                        <p>Komentar</p>
                        <input type='text'  name="komentar" value={komentar}
                         onChange={(e) => setKomentar(e.target.value)} id='komentar'></input>
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
