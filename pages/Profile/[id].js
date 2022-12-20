import style from "../../styles/Profile.module.css"
import Navbar from '../../components/Navbar'
import { useRouter } from 'next/router';
import {useEffect,useState} from 'react';
import axios from "axios";
import Link from "next/link"
import Footer from '../../components/Footer'

export default function ViewProfil() {

    const router =useRouter()
    const [imgProfile, SetImg] = useState("")
    const [userName, SetUserName] =useState("")
    const [name, SetName] =useState("")
    const [occup, SetOccupation] =useState("")
    const [email, SetEmail] = useState("")

    const [role, SetRoles] =useState("")
    const [affi, SetAffiliation] =useState("")
    const [data, setData] = useState([])
    const [infoid, SetInfoSignin] = useState()
    // const [dataOccup, setDataOccup] = useState([])
    
    const id = typeof window !== 'undefined' ? window.localStorage.getItem('unm') : {}
    // SetInfoSignin(id)
    
    useEffect(() => {
       
        handleData()
    }, []);

    const handleData = async () => {
        // e.preventDefault();
      
        try {
            // e.preventDefault()
            // const id = typeof window !== 'undefined' ? window.localStorage.getItem('unm') : {}
            console.log(router.query.id)

            const result = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/profile/${id}`)
            console.log(result.data.data)
            SetImg(result.data.data.img_profile)
            SetEmail(result.data.data.email)
            SetUserName(result.data.data.username)
            SetName(result.data.data.fullname)
            SetOccupation(result.data.data.occupation.name)
            SetAffiliation(result.data.data.institusi_name)
            SetRoles(result.data.data.roles.name) 

            setData(result.data.data)

        } catch (error) {
            console.log(error)
        }
    }


    return(
        <>
        <Navbar></Navbar>
        <div className={style.container}>
            
            <form className={style.detail}>
                <div className={style.user}>
                    <img  src={imgProfile}/>
                    <p>Hai! </p><p> {userName}</p>
                
                <div className={style.roles}>
                    <p>{role}</p>
                    </div>
                </div>

                <div className={style.btnDiv}>
                <Link className={style.btn} href={`Edit/${id}`}><button>Edit Profile</button></Link>
                <Link className={style.btn} href={`Changepass/${id}`}><button>Ubah Password</button></Link>
            </div>

                <p>Email</p>
                <input type = 'email' value={email} id='email' disabled></input>

                <p>Nama Lengkap</p>
                <input type = 'text' value={name}  id='fullname'></input>

                <p>Username</p>
                <input type = 'text' value={userName}  id='username'></input>

                <p>Pekerjaan</p>
                <input type = 'text' value={occup}  id='username'></input>

                <p>Asal Institusi</p>
                <input type = 'text' value={affi}  id='affiliation'></input>
            

              

                {/* <p>Password</p>
                <input type = 'password' value='areum123' id='password' disabled></input> */}

           
            </form>
        </div>
        <Footer></Footer>
        </>
    )
    
}