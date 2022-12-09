import Link from "next/link"
import style from "../styles/DaftarControllers.module.css"
import {useEffect, useState} from 'react'
import axios from 'axios' 
import { Button } from "react-bootstrap"
import { useRouter } from 'next/router'


export default function KontenMoreControllers(page){
    const router =useRouter()

    const [categ, setDataCat] = useState([])
    const [subcat, setDatasubcat] = useState([])
    const [role, setDataRole] = useState([])
    const [occup, setDataOccup] = useState([])
    const [status, setDataStatus] = useState([])
    const [infoSignin, SetInfoSignin]=useState();

    const [collect, setCollect] = useState([])

    const id = typeof window !== 'undefined' ? window.localStorage.getItem('unm') : {}
    // SetInfoSignin(id)

    useEffect(() => {
        handleDataSubCat()
        handleDataCat()
        handleDataRole()
        handleDataOccup()
        handleDataStatus()
    
        
    }, [])


    const handleDataCat = async () => {

        try {
            const result = await axios.get(`http://localhost:8000/ct/allCateg`)
            console.log(result.data.data)
            setDataCat(result.data.data)
            

        } catch (error) {
            console.log(error)
        }
    }

    const handleDataOccup = async () => {

        try {
            const result = await axios.get(`http://localhost:8000/occup/allOccup`)
            console.log(result.data.data)
            setDataOccup(result.data.data)
            

        } catch (error) {
            console.log(error)
        }
    }

    const handleDataStatus = async () => {

        try {
            const result = await axios.get(`http://localhost:8000/status/allStatus`)
            console.log(result.data.data)
            setDataStatus(result.data.data)
            

        } catch (error) {
            console.log(error)
        }
    }

    const handleDataRole = async () => {

        try {
            const result = await axios.get(`http://localhost:8000/role/allRole`)
            console.log(result.data.data)
            setDataRole(result.data.data)
            

        } catch (error) {
            console.log(error)
        }
    }

    const handleDataSubCat = async () => {

        try {
            const result = await axios.get(`http://localhost:8000/sct/allSubCateg`)
            console.log(result.data.data)
            setDatasubcat(result.data.data)
            

        } catch (error) {
            console.log(error)
        }
    }


    const handleRumus = async (e) => {
      
        // const id = typeof window !== 'undefined' ? window.localStorage.getItem('unm') : {}
        // SetInfoSignin(id)
    
            try {

            // e.preventDefault()
            const result = await axios.get(`http://localhost:8000/collect/collectById/${id}`)
            setCollect(result.data.data)
            console.log(result.data.data)
            
            
        
            } catch (error) {
            console.log(error)
            }

    
        
    }



    const DelData = async (e,id) => {
        
        try {
            // e.preventDefault()
            if(confirm("Hapus rumus ini?") == true){
            const result = await axios.delete(`http://localhost:8000/rumus/delRumus/${id}`)
            console.log("berhasil dihapus")
            // setDatarumus(result.data.data)

            // router.push('/rumussaya')

            window.location.reload()
        }

        } catch (error) {
            console.log(error)
        }

        router.push('/rumussaya')
    }



    console.log(page)
    if (page.page === 0) {
      
        return(
            <>
                <div className={style.tabel}>
                <h2>Data Kategori</h2>
                <Link href={'/'}>Tambah Kategori</Link>
    
                <table>
                    <tbody>
                    <tr className={style.header}>
                        <td>ID</td>
                        <td>Kategori</td>
                        <td>Last Updated</td>
                        <td></td>
                    </tr>

                     {categ.length == 0 ? <p>Loading...</p> : categ.map((item) => <tr key={item.id}><td>{item.id}</td><td>{item.name}</td><td>{item.updatedAt.slice(0,10)}</td><td><Link href={`Rumus/${item.id}`}><img src='/editicon.png'/></Link><Link href={'/rumussaya'}><img src ='/icon-delete.png' onClick={(e)=> DelData(e, item.id)}/></Link></td></tr>)}
    

                    </tbody>
                </table>
    
            </div>
    
            </>
        )
    }

    else if (page.page === 1) {
        return(
            <>
                <div className={style.tabel}>
                <h2>Data Sub Kategori</h2>
                <Link href={'/'}>Tambah Sub Kategori</Link>
    
                <table>
                    <tbody>
                    <tr className={style.header}>
                        <td>ID</td>
                        <td>Sub Kategori</td>
                        <td>Kategori</td>
                        <td>Last Updated</td>
                        <td></td>
                    </tr>

                    {subcat.length == 0 ? <p>Loading...</p> : subcat.map((item) => <tr key={item.id}><td>{item.id}</td><td>{item.name}</td><td>{item.category.name}</td><td>{item.updatedAt.slice(0,10)}</td><td><Link href={`Rumus/${item.id}`}><img src='/editicon.png'/></Link><Link href={'/rumussaya'}><img src ='/icon-delete.png' onClick={(e)=> DelData(e, item.id)}/></Link></td></tr>)}
    

                    </tbody>
                </table>
    
            </div>
    
            </>
        )
    }

    else if (page.page === 2) {

        return(
            <>
                <div className={style.tabel}>
                <h2>Data Role</h2>
                <Link href={'/'}>Tambah Role</Link>
    
                <table>
                    <tbody>
                    <tr className={style.header}>
                        <td>ID</td>
                        <td>Role</td>
                        <td>Last Updated</td>
                        <td></td>
                    </tr>

                    {role.length == 0 ? <p>Loading...</p> : role.map((item) => <tr key={item.id}><td>{item.id}</td><td>{item.name}</td><td>{item.updatedAt.slice(0,10)}</td><td><Link href={`Rumus/${item.id}`}><img src='/editicon.png'/></Link><Link href={'/rumussaya'}><img src ='/icon-delete.png' onClick={(e)=> DelData(e, item.id)}/></Link></td></tr>)}
    

                    </tbody>
                </table>
    
            </div>
    
            </>
        )

        }

        else if (page.page ===  3){
            return(
                <>
                    <div className={style.tabel}>
                    <h2>Data Pekerjaan</h2>
                    <Link href={'/'}>Tambah Pekerjaan</Link>
        
                    <table>
                        <tbody>
                        <tr className={style.header}>
                            <td>ID</td>
                            <td>Pekerjaan</td>
                            <td>Last Updated</td>
                            <td></td>
                        </tr>
    
                        {occup.length == 0 ? <p>Loading...</p> : occup.map((item) => <tr key={item.id}><td>{item.id}</td><td>{item.name}</td><td>{item.updatedAt.slice(0,10)}</td><td><Link href={`Rumus/${item.id}`}><img src='/editicon.png'/></Link><Link href={'/rumussaya'}><img src ='/icon-delete.png' onClick={(e)=> DelData(e, item.id)}/></Link></td></tr>)}
        
    
                        </tbody>
                    </table>
        
                </div>
        
                </>
            )
        }

        else if (page.page === 4) {
            return(
                <>
                    <div className={style.tabel}>
                    <h2>Data Status</h2>
                    <Link href={'/'}>Tambah Status</Link>
        
                    <table>
                        <tbody>
                        <tr className={style.header}>
                            <td>ID</td>
                            <td>Status</td>
                            <td>Last Updated</td>
                            <td></td>
                        </tr>
    
                        {status.length == 0 ? <p>Loading...</p> : status.map((item) => <tr key={item.id}><td>{item.id}</td><td>{item.name}</td><td>{item.updatedAt.slice(0,10)}</td><td><Link href={`Rumus/${item.id}`}><img src='/editicon.png'/></Link><Link href={'/rumussaya'}><img src ='/icon-delete.png' onClick={(e)=> DelData(e, item.id)}/></Link></td></tr>)}
        
    
                        </tbody>
                    </table>
        
                </div>
        
                </>
            )
        }


    }