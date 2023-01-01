import style from "../../../styles/AddUserByAdmin.module.css"
import Navbar from "../../../components/Navbar";
import axios from "axios";
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import Footer from '../../../components/Footer'
import Link from "next/link";

export default function AddUser() {
    const user = typeof window !== 'undefined' ? window.localStorage.getItem('u') : {}
    const router =useRouter()
    const [type, setType]=useState('password');
    const [typeconpass, setTypeConpass]=useState('password');
    const [pass, setPass]=useState(eyeOff);
    const [conpass, consetPass]=useState(eyeOff);

    const [data, setData] = useState([])

    useEffect(()=>{
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/occup/allOccup`)
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

    const addUsers = async(e) =>{
       

        e.preventDefault()
        console.log(username)
        try {
            const data = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/signup`, {
                username: document.getElementById('username').value,
                fullname: document.getElementById('fullname').value,
                occupation_id: parseInt(document.getElementById('sub').value),
                password: document.getElementById('password').value,
                confPass: document.getElementById('konfirmasi_pw').value,
                email: document.getElementById('email').value
                    
            }) 
            // .then((val) => {
            
            //     window.localStorage.setItem('unm', val.data.data.id)
            //     console.log(val)
            //     console.log(val.data.message)
            //     router.push({ pathname: `/`})
            // })

              
            
        } catch (error) {
            
        }
    }


    const handleData = async () => {
        // e.preventDefault()

        try {
            const id = document.getElementById('sub').value
            const result = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/occup/allOccup`)
            console.log(result.data.data)
            setData(result.data.data)

        } catch (error) {
            console.log(error)
        }
    }


    return(
        <>
        <div className={style.pagewhite}>
        <Navbar></Navbar>
        <div className={style.left}>
            <Link href="/dasboard">Kembali</Link>
        </div>
        <div className={style.container}>
            
            <form className={style.form}>
            <div className={style.logo}>
            {/* <img src='./rumahrumus_logo.png'/> */}
            <h1>Tambah User</h1>
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
                <button onClick={(event) => addUsers(event)}>Tambah User</button>

            </form>
        </div>
        <Footer></Footer>
        </div>
        
        </>
    )
}