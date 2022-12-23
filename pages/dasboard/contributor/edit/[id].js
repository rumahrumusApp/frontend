import style from "../../../../styles/EditProfileUsers.module.css"
import Navbar from '../../../../components/Navbar'
import { useRouter } from 'next/router';
import {useEffect,useState} from 'react';
import axios from "axios";
import Link from "next/link"
import Footer from '../../../../components/Footer'

export default function EditUsers() {

    const router = useRouter()
    const [idUser, SetIdUser] = useState([])
    const [imgProfile, SetImg] = useState(null)
    const [infoid, SetInfoSignin] = useState("")
    const [userName, SetUserName] =useState("")
    const [name, SetName] =useState("")
    const [occup, SetOccupation] =useState(-1)
    const [email, SetEmail] = useState("")
    const [roles, SetRoles] =useState(-1)
    const [affi, SetAffiliation] =useState("")
    const [data, setData] = useState([])
    const [dataRole, setDataRole] = useState([])
    const [previewSource, setPreviewSource] = useState("");
    const [selectedFile, setSelectedFile] = useState(false);


    useEffect(() => {
        handleData()
        handleOccup()
        handleRole()
        // handleProfile()
        // handleOccupByid()

    }, []);

    const handleData = async () => {
        // e.preventDefault();
      
        try {
            // e.preventDefault()
            // console.log(router.query.id)
            // console.log(typeof router.query.id)
            const id_profile = parseInt(router.query.id)

            const result = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/${id_profile}`)
            SetIdUser(id_profile)
            SetImg(result.data.data.img_profile)
            SetEmail(result.data.data.email)
            SetUserName(result.data.data.username)
            SetName(result.data.data.fullname)
            SetOccupation(result.data.data.occupation_id)
            SetAffiliation(result.data.data.institusi_name)
            SetRoles(result.data.data.role)
            // console.log(result.data.data.img_profile)

            // setData(result.data.data)

            // console.log(result.data.data) 

        } catch (error) {
            console.log(error)
        }
    }

    const handleOccup = async () => {
        // e.preventDefault();
      
        try {
            // const id = document.getElementById('sub').value
            const result = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/occup/allOccup`)
            // console.log('Occupations:', result.data.data)
            setData(result.data.data)

        } catch (error) {
            console.log(error)
        }
    }


    const handleRole = async () => {
        // e.preventDefault();
      
        try {
            // const id = document.getElementById('sub').value
            const result = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/role/allRole`)
            // console.log('Occupations:', result.data.data)
            setDataRole(result.data.data)

        } catch (error) {
            console.log(error)
        }
    }

    
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
        e.preventDefault()
       
        const formData = new FormData();
        formData.append("fullname", name);
        formData.append("username", userName);
        formData.append("email", email);
        formData.append("role", roles);
        formData.append("occupation_id", occup);
        formData.append("institusi_name", affi);
        formData.append("img_profile", imgProfile);

       
     
        try {
           
            const result = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/editbyAdmin/${idUser}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                   
                  },
            });


            router.push(`/dasboard/contributor`);
           
            // window.location.reload()
               

        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
        <div className={style.pagewhite}>
        <Navbar></Navbar>
        <div className={style.container}>
        <div className={style.left}>
                <Link href={`/dasboard/contributor`}>Kembali</Link>   
        </div>
            
            <form className={style.detail}>
                <div className={style.user}>

            {!selectedFile ? (
                  <img src={imgProfile}/>
            
              
            ) : (
             
                <img src={previewSource}></img>
              
            )}
                
                
                    
                </div>
                <p>Foto Profil</p>
                <input type = 'file' id='file_upload' onChange={handleFileInputChange}></input>

                <p>Nama Lengkap</p>
                <input type = 'text' value={name} onChange={(e) => SetName(e.target.value)} id='fullname'></input>

                <p>Username</p>
                <input type = 'text' value={userName} onChange={(e) => SetUserName(e.target.value)} id='username'></input>

                <p>Role</p>
                { dataRole.length == 0 ? <select id="role"><option value={-1}>Pilih Role</option><option>Loading...</option></select> : <select id='role' value={roles} onChange={(e) => SetRoles(e.target.value)} >{ dataRole.map((item) => <option key={item.id} value={item.id}>{item.name}</option>) }</select> }

                <p>Email</p>
                <input type = 'email' value={email} id='email' onChange={(e) => SetEmail(e.target.value)}></input>

                <p>Asal Institusi</p>
                <input type = 'text' value={affi} onChange={(e) => SetAffiliation(e.target.value)} placeholder='asal institusi...' id='affiliation'></input>
            

                <p>Pekerjaan</p>
                    { data.length == 0 ? <select id="occup"><option value={-1}>Pilih Pekerjaan</option><option>Loading...</option></select> : <select id='occup' value={occup} onChange={(e) => SetOccupation(e.target.value)} >{ data.map((item) => <option key={item.id} value={item.id}>{item.name}</option>) }</select> } 

            <div className={style.btn}>
                <button type="submit" onClick={(event)=> handleProfile(event)}>Simpan</button>
            </div>
            </form>
        </div>
        <Footer></Footer>
        </div>
        </>
    )


}