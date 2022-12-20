import Navbarsign from '../../../components/Navbar'
import style from "../../../styles/ChangePassword.module.css"
import { useRouter } from 'next/router';
import {useEffect,useState} from 'react';
import axios from "axios";
import Link from "next/link"
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import Footer from '../../../components/Footer'

export default function ChangePassword(){
const router = useRouter()
const [oldpass, setoldPassword] = useState("")
// const [newpass, setnewPassword] = useState("")
// const [confpass, setconfPassword] = useState("")
const [data, setData] = useState([])



const [typeOld, setTypeOld]=useState('password');
const [typeNew, setTypeNew]=useState('password');
const [typeConpass, setTypeConpass]=useState('password');
const [passOld, setPassOld]=useState(eyeOff);
const [passNew, setPassNew]=useState(eyeOff);
const [conpass, consetPass]=useState(eyeOff);

const id = typeof window !== 'undefined' ? window.localStorage.getItem('unm') : {}


const handleViewPassOld=()=>{    
    if(typeOld==='password'){
      setPassOld(eye);     
      setTypeOld('text');
    }
    else{
      setPassOld(eyeOff);
      setTypeOld('password');
    }
  }


  const handleViewPassNew=()=>{    
    if(typeNew==='password'){
      setPassNew(eye);     
      setTypeNew('text');
    }
    else{
      setPassNew(eyeOff);
      setTypeNew('password');
    }
  }


  const handleViewConPass=()=>{    
    if(typeConpass==='password'){
    
      consetPass(eye);     
      setTypeConpass('text');
    }
    else{
     
      consetPass(eyeOff);     
      setTypeConpass('password');
    }
  }

    useEffect(() => {
        handleData()
    }, []);

    const handleData = async () => {
     
      
        try {
          
            console.log(router.query.id)

            const result = await axios.get(`http://13.229.227.189:8000/user/${id}`)
            console.log(result.data.data)
            setoldPassword(result.data.data.password)
            setData(result.data.data)

        } catch (error) {
            console.log(error)
        }
    }

    const Changespass = async(e) =>{
        e.preventDefault()
      
        try{
            console.log(router.query.id)
                
            await axios.post(`http://13.229.227.189:8000/user/changePass/${id}`,{
               
                oldPass: document.getElementById('oldpassword').value,
                newPass: document.getElementById('newpassword').value,
                confPass: document.getElementById('confirmpassword').value

    
            })

            router.push(`/Profile/${id}`)

        }catch(err){
            
            console.log(err);
        }

    };



    return(
        <>
            <Navbarsign></Navbarsign>
            <div className={style.left}>
                <Link href="/">Kembali</Link>
            </div>
            
            <div className={style.container}>
            
            <form className={style.detail}>
                <div className={style.title}>
                    <p>Reset Password</p>
                </div>

                <p>Password Lama<span>*</span></p>
                <div className={style.password}>
                <input type = {typeOld}  onChange={(e) => setoldPassword(e.target.value)} placeholder='masukkan password saat ini ...' id='oldpassword'></input>
                <span onClick={handleViewPassOld} className={style.eyeIcon}><Icon icon={passOld} size={18} style={{color: 'black'}}/></span>
                </div>

                <p>Password Baru<span>*</span></p>
                <div className={style.password}>
                <input type ={typeNew}  id='newpassword' placeholder='masukkan password baru ...'></input>
                <span onClick={handleViewPassNew} className={style.eyeIcon}><Icon icon={passNew} size={18} style={{color: 'black'}}/></span>
                </div>

                <p>Konfirmasi Password<span>*</span></p>
                <div className={style.password}>
                <input type ={typeConpass} id='confirmpassword' placeholder='masukkan password baru ...'></input>
                <span onClick={handleViewConPass} className={style.eyeIcon}><Icon icon={conpass} size={18} style={{color: 'black'}}/></span>
                </div>

            <div className={style.btn}>
               
                 <Link href={`/Profile/${id}`}><button className={style.batal}>Batal</button></Link>

                <button onClick={(event) => Changespass(event)} className={style.simpan}>Ubah</button>
                
            </div>

            </form>
        </div>
        <Footer></Footer>
        </>
    )
}