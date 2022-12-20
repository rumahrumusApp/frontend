import style from "../styles/Sign.module.css"
import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import { ToastContainer, toast } from "react-toastify";
import Footer from '../components/Footer'
import "react-toastify/dist/ReactToastify.css";



export default function Signin() {
    const user = typeof window !== 'undefined' ? window.localStorage.getItem('u') : {}
    const router = useRouter()

    const [type, setType]=useState('password');
    const [icon, setIcon]=useState(eyeOff);

    const handleViewPass=()=>{    
        if(type==='password'){
          setIcon(eye);      
          setType('text');
        }
        else{
          setIcon(eyeOff);     
          setType('password');
        }
      }


    useEffect(()=> {
        if (user !== null) {
            router.push(`/`)
        }
    })

    const login = async(e,  username, password) => {
        e.preventDefault()
        
        try{
            const data = await axios.post("http://13.229.227.189:8000/user/signin", {
                username: username,
                password: password,
                
            })
            .then((val) => {
                toast.success("Login Success", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
            
                window.localStorage.setItem('unm', val.data.data.id)
                window.localStorage.setItem('rol', val.data.data.role)
                console.log(val)
                console.log(val.data.message)

            })
            // console.log(data);
            router.push({ pathname: `/`})
            

        } catch(err) {
            console.log(err);
            toast.error("Invalid Email or Password", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
        }

    }


    return(
        <>
        <div className={style.pagewhite}>
          <Navbar></Navbar>
            <div className={style.container}>
            <ToastContainer/>
      
            <form className={style.form}>
                <div className={style.logo}>
                    <img src='./rumahrumus_logo.png'/>
                    <h1> Sign In</h1>
                    
                </div>

                <p>Username <span>*</span></p>
                <input type = 'text' id='username' placeholder="masukkan username..."></input>

                <p>Password <span>*</span></p>
                <div className={style.password}>
                <input type ={type} id='password'placeholder="masukkan password..."/>
                <span onClick={handleViewPass} className={style.eyeIcon}><Icon icon={icon} size={18} style={{color: 'black'}}/></span>
                </div>

                <button onClick={(event) => login(event, document.getElementById('username').value , document.getElementById('password').value)}>Sign In</button>
                
                <div className={style.signback}>
                <p>Belum punya akun ? <a href="./signup">Sign Up</a></p>
                </div>
        
            </form>

        </div>
        <Footer></Footer>
    </div>
        
        </>
    )
}