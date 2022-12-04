import style from "../../../styles/EditProfile.module.css"
import Navbar from '../../../components/Navbar'
import { useRouter } from 'next/router';
import {useEffect,useState} from 'react';
import axios from "axios";
import Link from "next/link"

export default function Profil() {

    const router =useRouter()
    const [imgProfile, SetImg] = useState("")
    const [infoid, SetInfoSignin] = useState("")
    const [userName, SetUserName] =useState("")
    const [name, SetName] =useState("")
    const [occup, SetOccupation] =useState("")
    const [occupname, SetOccupname] =useState("")
    const [email, SetEmail] = useState("")
    const [roles, SetRoles] =useState("")
    const [affi, SetAffiliation] =useState("")
    const [data, setData] = useState([])
    const [previewSource, setPreviewSource] = useState("");
    const [selectedFile, setSelectedFile] = useState(false);

    const id = typeof window !== 'undefined' ? window.localStorage.getItem('unm') : {}
    
    useEffect(() => {
        handleData()
        handleOccup()
        // handleOccupByid()

    }, []);


    const handleData = async () => {
        // e.preventDefault();
      
        try {
            // e.preventDefault()
            console.log(router.query.id)

            const result = await axios.get(`http://localhost:8000/user/profile/${id}`)
            // console.log(result.data.data)
            SetImg(result.data.data.img_profile)
            SetEmail(result.data.data.email)
            SetUserName(result.data.data.username)
            SetName(result.data.data.fullname)
            SetOccupname(result.data.data.occupation.name)
            SetOccupation(result.data.data.occupation_id)
            SetAffiliation(result.data.data.institusi_name)
            SetRoles(result.data.data.roles.name)

            // setData(result.data.data)

        } catch (error) {
            console.log(error)
        }
    }

    const handleOccup = async () => {
        // e.preventDefault();
      
        try {
            // const id = document.getElementById('sub').value
            const result = await axios.get(`http://localhost:8000/occup/allOccup`)
            // console.log('Occupations:', result.data.data)
            setData(result.data.data)

        } catch (error) {
            console.log(error)
        }
    }



    // const handleOccupByid = async (e) => {
    //     // e.preventDefault();
    //     const id = document.getElementById('pekerjaan').value
      
    //     try {
    //         // e.preventDefault()
    //         // console.log(router.query.id)

    //         const result = await axios.get(`http://localhost:8000/occup/occupById/${id}`)
    //         SetOccupation(result.data.data)
    //         console.log(result.data.data)

    //         // setData(result.data.data)

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }



    const handleFileInputChange = (e) => {
        SetImg(e.target.files[0]);
        previewFile(e.target.files[0]);
      };
    
      const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setPreviewSource(reader.result);
          setSelectedFile(true);
        };
      };


    const handleProfile = async (e) => {
        // const id = typeof window !== 'undefined' ? window.localStorage.getItem('unm') : {}
        // SetInfoSignin(id)
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullname", name);
        formData.append("username", userName);
        formData.append("occupation_id", occup);
        formData.append("institusi_name", affi);
        formData.append("img_profile", imgProfile);
      
        try {
            // e.preventDefault()
            // const id = typeof window !== 'undefined' ? window.localStorage.getItem('unm') : {}
            // console.log(router.query.id)

            const result = await axios.post(`http://localhost:8000/user/editUser/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                   
                  },
            });

            router.push(`/Profile/${id}`);
               

        } catch (error) {
            console.log(error)
        }
    }


    return(
        <>
        <Navbar></Navbar>
        <div className={style.container}>
            
            <form onSubmit={handleProfile} className={style.detail}>
                <div className={style.user}>

            {!selectedFile ? (
                  <img src={imgProfile}/>
            
              
            ) : (
             
                <img src={previewSource}></img>
              
            )}
                
                <p>Hai! </p><p> {userName}</p>
                
                <div className={style.roles}>
                    <p>{roles}</p>
                    </div>
                </div>

                <p>Foto Profil</p>
                <input type = 'file' id='file_upload'  onChange={handleFileInputChange}></input>

                <p>Email</p>
                <input type = 'email' value={email} id='email' disabled></input>

                <p>Nama Lengkap</p>
                <input type = 'text' value={name} onChange={(e) => SetName(e.target.value)} id='fullname'></input>

                <p>Username</p>
                <input type = 'text' value={userName} onChange={(e) => SetUserName(e.target.value)} id='username'></input>

                <p>Asal Institusi</p>
                <input type = 'text' value={affi} onChange={(e) => SetAffiliation(e.target.value)} placeholder='asal institusi...' id='affiliation'></input>
            

                <p>Pekerjaan</p>
                <select id ='pekerjaan' onChange={(e) => SetOccupation(e.target.value)}>
                    <option value={occup}>{occupname}</option> 
                   {data.map((item) => <option  value={item.id} key={item.id} >{item.name}</option>)}
                    {/* { data.length == 0 ? <option>Loading...</option> : <select id ='pekerjaan' value={occup.id} onChange={(event) => handleOccupByid(event)} onLoad={(event)=> handleOccupByid(event)}>{ data.map((item) => <option  value={item.id} key={item.id} >{item.name}</option>)}</select>} */}
                </select>

            
{/* { cat.length == 0 ? <select id="cat"><option value={-1}>Pilih Kategori</option><option>Loading...</option></select> : <select id='id' value={data.cat_id} onChange={(event) => handleSubCategory(event)} onLoad={(event) => handleSubCategory(event)}>{ cat.map((item) => <option key={item.id} value={item.id}>{item.name}</option>) }</select> } */}
            <div className={style.btn}>
                <button type="submit" onClick={(event)=> handleProfile(event)}>Simpan</button>
                {/* <Link href={`Changepass/${data.id}`}><button>Ganti Password</button></Link> */}
            </div>
            </form>
        </div>
        </>
    )
    
}