import Link from "next/link"
import style from "../styles/DaftarControllers.module.css"
import {useEffect, useState} from 'react'
import axios from 'axios' 
import { Button } from "react-bootstrap"
import { useRouter } from 'next/router'
import { Select } from "@chakra-ui/react"


export default function KontenMoreControllers(page){
    const router =useRouter()

    const [categ, setDataCat] = useState([])
    const [subcat, setDatasubcat] = useState([])
    const [role, setDataRole] = useState([])
    const [occup, setDataOccup] = useState([])
    const [status, setDataStatus] = useState([])
    // const [Categid, setCategId] = useState(-1)
    const [infoSignin, SetInfoSignin]=useState();

    const [collect, setCollect] = useState([])

    const id = typeof window !== 'undefined' ? window.localStorage.getItem('unm') : {}
    // SetInfoSignin(id)



    // useEffect(() => {
    //     fetch(`http://localhost:8000/sct/allSubCateg`)
    //         .then((res) => res.json())
    //         .then((val) => {
    //             setDatasubcat(val.data)
                
    //             fetch(`http://localhost:8000/sct/subByCategId/${val.data.category_id}`)
    //                 .then((res) => res.json())
    //                 .then((data) => {
    //                     setDatasubcat(data.data)
    //                 })
    //         })
    //     fetch(`http://localhost:8000/ct/allcateg`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //     setDataCat(data.data)
    //      })
    

    // }, [])

    useEffect(() => {
        handleDataSubCat()
        handleDataCat()
        handleDataRole()
        handleDataOccup()
        handleDataStatus()
        handleSubCatByCatId()
        
    }, [])


    const handleDataCat = async () => {

        try {
            const result = await axios.get(`http://localhost:8000/ct/allCateg`)
            console.log(result.data.data)
            setDataCat(result.data.data)
            setCategId(result.data.data.id)
            

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


    const handleSubCatByCatId = async (e) => {
      
        // const id = typeof window !== 'undefined' ? window.localStorage.getItem('unm') : {}
        // SetInfoSignin(id)
    
            try {

            const catId = e.target.value
            console.log(catId)

                const id = document.getElementById('cat').value

                const result = await axios.get(`http://localhost:8000/sct/subByCategId/${id}`)
                // setDatasubcat(result.data.data[0])
                console.log(result.data.data)
            
            
            } catch (error) {

                    console.log(error)

            }

    
        
    }



    const DelDataCat = async (e,id) => {
        
        try {
            // e.preventDefault()
            if(confirm("Hapus kategori ini?") == true){
            const result = await axios.delete(`http://localhost:8000/ct/delCateg/${id}`)
            console.log("berhasil dihapus")
            // setDatarumus(result.data.data)

            // router.push('/rumussaya')

            window.location.reload()
        }

        } catch (error) {
            console.log(error)
        }

    }


    const DelDataSubCat = async (e,id) => {
        
        try {
            // e.preventDefault()
            if(confirm("Hapus kategori ini?") == true){
            const result = await axios.delete(`http://localhost:8000/sct/delSubCateg/${id}`)
            console.log("berhasil dihapus")
            // setDatarumus(result.data.data)

            // router.push('/rumussaya')

            window.location.reload()
        }

        } catch (error) {
            console.log(error)
        }

    }

    const DelDataRole = async (e,id) => {
        
        try {
            // e.preventDefault()
            if(confirm("Hapus kategori ini?") == true){
            const result = await axios.delete(`http://localhost:8000/role/delRole/${id}`)
            console.log("berhasil dihapus")
            // setDatarumus(result.data.data)

            // router.push('/rumussaya')

            window.location.reload()
        }

        } catch (error) {
            console.log(error)
        }

    }


    const DelDataOccup = async (e,id) => {
        
        try {
            // e.preventDefault()
            if(confirm("Hapus kategori ini?") == true){
            const result = await axios.delete(`http://localhost:8000/occup/delOccupt/${id}`)
            console.log("berhasil dihapus")
            // setDatarumus(result.data.data)

            // router.push('/rumussaya')

            window.location.reload()
        }

        } catch (error) {
            console.log(error)
        }

    }


    const DelDataStatus = async (e,id) => {
        
        try {
            // e.preventDefault()
            if(confirm("Hapus kategori ini?") == true){
            const result = await axios.delete(`http://localhost:8000/status/delStatus/${id}`)
            console.log("berhasil dihapus")
            // setDatarumus(result.data.data)

            // router.push('/rumussaya')

            window.location.reload()
        }

        } catch (error) {
            console.log(error)
        }
    }




    console.log(page)
    if (page.page === 0) {
      
        return(
            <>
                <div className={style.tabel}>
                <h2>Data Kategori</h2>
                <Link href={'/dasboard/more/addCategory'} className={style.addBtn}>Tambah Kategori</Link>
    
                <table>
                    <tbody>
                    <tr className={style.header}>
                        <td>ID</td>
                        <td>Kategori</td>
                        <td>Last Updated</td>
                        <td></td>
                    </tr>

                     {categ.length == 0 ? <p>Loading...</p> : categ.map((item) => <tr key={item.id} className={style.datafont}><td>{item.id}</td><td>{item.name}</td><td>{item.updatedAt.slice(0,10)}</td><td><Link href={`/dasboard/more/editCategory/${item.id}`}><img src='/editicon.png'/></Link><Link href={'/dasboard/more'}><img src ='/icon-delete.png' onClick={(e)=> DelDataCat(e, item.id)}/></Link></td></tr>)}
    

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
                <Link href={'/dasboard/more/addSubCateg'} className={style.addBtn}>Tambah Sub Kategori</Link>
                {/* { categ.length == 0 ? <select id="cat"><option value={0}>Pilih Kategori</option><option>Loading...</option></select> : <select id='cat'  onChange={(event) => handleSubCatByCatId(event)}>{ categ.map((item) => <option key={item.id} value={item.id}>{item.name}</option>) </select>} } */}
                {/* {categ.length == 0 ? <select id="cat" className={style.addBtn}><option value={-1}>Pilih Kategori</option></select>: <select id="cat" value={Categid} onChange={(event) => handleSubCatByCatId(event)} >{ categ.map((item)=> <option key= {item.id} value={item.id}>{item.name}</option>)}</select>} */}
    
                <table>
                    <tbody>
                    <tr className={style.header}>
                        <td>ID</td>
                        <td>Sub Kategori</td>
                        <td>Kategori</td>
                        <td>Last Updated</td>
                        <td></td>
                    </tr>

                    {subcat.length == 0 ? <p>Loading...</p> : subcat.map((item) => <tr key={item.id}><td>{item.id}</td><td>{item.name}</td><td>{item.category.name}</td><td>{item.updatedAt.slice(0,10)}</td><td><Link href={`/dasboard/more/editSubCateg/${item.id}`}><img src='/editicon.png'/></Link><Link href={'/dasboard/more'}><img src ='/icon-delete.png' onClick={(e)=> DelDataSubCat(e, item.id)}/></Link></td></tr>)}
    

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
                <Link href={'/dasboard/more/addRole'} className={style.addBtn}>Tambah Role</Link>
    
                <table>
                    <tbody>
                    <tr className={style.header}>
                        <td>ID</td>
                        <td>Role</td>
                        <td>Last Updated</td>
                        <td></td>
                    </tr>

                    {role.length == 0 ? <p>Loading...</p> : role.map((item) => <tr key={item.id}><td>{item.id}</td><td>{item.name}</td><td>{item.updatedAt.slice(0,10)}</td><td><Link href={`/dasboard/more/editRole/${item.id}`}><img src='/editicon.png'/></Link><Link href={'/dasboard/more'}><img src ='/icon-delete.png' onClick={(e)=> DelDataRole(e, item.id)}/></Link></td></tr>)}
    

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
                    <Link href={'/dasboard/more/addOccup'} className={style.addBtn}>Tambah Pekerjaan</Link>
        
                    <table>
                        <tbody>
                        <tr className={style.header}>
                            <td>ID</td>
                            <td>Pekerjaan</td>
                            <td>Last Updated</td>
                            <td></td>
                        </tr>
    
                        {occup.length == 0 ? <p>Loading...</p> : occup.map((item) => <tr key={item.id}><td>{item.id}</td><td>{item.name}</td><td>{item.updatedAt.slice(0,10)}</td><td><Link href={`/dasboard/more/editOccup/${item.id}`}><img src='/editicon.png'/></Link><Link href={'/dasboard/more'}><img src ='/icon-delete.png' onClick={(e)=> DelDataOccup(e, item.id)}/></Link></td></tr>)}
        
    
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
                    <Link href={'/dasboard/more/addStatus'} className={style.addBtn}>Tambah Status</Link>
        
                    <table>
                        <tbody>
                        <tr className={style.header}>
                            <td>ID</td>
                            <td>Status</td>
                            <td>Last Updated</td>
                            <td></td>
                        </tr>
    
                        {status.length == 0 ? <p>Loading...</p> : status.map((item) => <tr key={item.id}><td>{item.id}</td><td>{item.name}</td><td>{item.updatedAt.slice(0,10)}</td><td><Link href={`/dasboard/more/editStatus/${item.id}`}><img src='/editicon.png'/></Link><Link href={'/dasboard/more'}><img src ='/icon-delete.png' onClick={(e)=> DelDataStatus(e, item.id)}/></Link></td></tr>)}
        
    
                        </tbody>
                    </table>
        
                </div>
        
                </>
            )
        }


    }