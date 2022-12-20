import style from "../styles/Sign.module.css"
import Navbar from "../components/Navbar";
import axios from "axios";
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import Footer from '../components/Footer'

export default function Signup() {
    const user = typeof window !== 'undefined' ? window.localStorage.getItem('u') : {}
    const router =useRouter()
    const [type, setType]=useState('password');
    const [typeconpass, setTypeConpass]=useState('password');
    const [pass, setPass]=useState(eyeOff);
    const [conpass, consetPass]=useState(eyeOff);

    const [data, setData] = useState([])

    useEffect(()=>{
        fetch(`http://13.229.227.189:8000/occup/allOccup`)
        .then((res) => res.json())
        .then((data) => {
            setData(data.data)
        })
    }, [])

    useEffect(()=> {
        if (user !== null) {
            router.push(`/`)
        }
    })

    const handleViewPass=()=>{    
        if(type==='password'){
          setPass(eye);     
          setType('text');
        }
        else{
          setPass(eyeOff);
          setType('password');
        }
      }

      const handleViewConPass=()=>{    
        if(typeconpass==='password'){
        
          consetPass(eye);     
          setTypeConpass('text');
        }
        else{
         
          consetPass(eyeOff);     
          setTypeConpass('password');
        }
      }

    const signup = async(e) =>{
       

        e.preventDefault()
        console.log(username)
        try {
            const data = await axios.post("http://13.229.227.189:8000/user/signup", {
                username: document.getElementById('username').value,
                fullname: document.getElementById('fullname').value,
                occupation_id: parseInt(document.getElementById('sub').value),
                password: document.getElementById('password').value,
                confPass: document.getElementById('konfirmasi_pw').value,
                email: document.getElementById('email').value
                    
            }) 
            .then((val) => {
            
                window.localStorage.setItem('unm', val.data.data.id)
                console.log(val)
                console.log(val.data.message)
                router.push({ pathname: `/`})
            })

              
            
        } catch (error) {
            
        }
    }


    const handleData = async () => {
        // e.preventDefault()

        try {
            const id = document.getElementById('sub').value
            const result = await axios.get(`http://13.229.227.189:8000/occup/allOccup`)
            console.log(result.data.data)
            setData(result.data.data)

        } catch (error) {
            console.log(error)
        }
    }


    return(
        <>
        <Navbar></Navbar>
        <div className={style.container}>
            
            <form className={style.form}>
            <div className={style.logo}>
            <img src='./rumahrumus_logo.png'/>
            <h1> Sign Up</h1>
            </div>


                <p>Email<span>*</span></p>
                <input type = 'text' id='email' placeholder="masukkan email..."></input>

                <p>Nama Lengkap<span>*</span></p>
                <input type = 'text' id='fullname' placeholder="masukkan nama lengkap..."></input>

                <p>Username<span>*</span></p>
                <input type = 'text' id='username' placeholder="masukkan username..."></input>

                <p>Pekerjaan<span>*</span></p>
                <select id='sub' onChange={(event)=> handleData(event)}> 
                    <option value={0}>Pilih Pekerjaan</option>
                    {data.map((item) => <option  value={item.id} key={item.id} >{item.name}</option>)}</select>
                

                <p>Password<span>*</span></p>
                <div className={style.password}>
                <input type ={type} id='password' placeholder="masukkan password..."></input>
                <span onClick={handleViewPass} className={style.eyeIcon}><Icon icon={pass} size={18} style={{color: 'black'}}/></span>
                </div>

                <p>Konfirmasi Password<span>*</span></p>
                <div className={style.password}>
                <input type ={typeconpass} id='konfirmasi_pw' placeholder="masukkan password kembali..."></input>
                <span onClick={handleViewConPass} className={style.eyeIcon}><Icon icon={conpass} size={18} style={{color: 'black'}}/></span>
                </div>
                <button onClick={(event) => signup(event)}>Sign Up</button>

                <div className={style.signback}>
                    <p>Sudah Punya Akun ?<a href="./signin"> Sign In </a></p>
                </div>
            </form>
        </div>
        <Footer></Footer>
        </>
    )
}