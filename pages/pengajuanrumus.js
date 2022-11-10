import style from "../styles/Accrumus.module.css"
import Navbarsign from '../components/Navbarsign'
import Link from "next/link"


export default function AccRumus() {
    return(
        <>
            <Navbarsign></Navbarsign>
            <div className={style.left}>
                <a href="./">Kembali</a>
            </div>
            <div className={style.container}>
            <div className={style.tabel}>
                <h2>Daftar Ajuan Rumus</h2>
                <hr/>
    
                <table>
                    <tr className={style.header}>
                        <td>No</td>
                        <td>Rumus</td>
                        <td>Contributor</td>
                        <td>Detail</td>
                    </tr>
    
                    <tr>
                        <td>1</td>
                        <td>Persegi</td>
                        <td>rumiee</td>
                        <td><Link href="/reviewrumus"><button className={style.btnDetail}>Lihat Detail</button></Link></td>
                    </tr>
    
                    <tr>
                        <td>2</td>
                        <td>Segitiga</td>
                        <td>areumare</td>
                        <td><button className={style.btnDetail}>Lihat Detail</button></td>
                    </tr>
    
                    <tr>
                        <td>3</td>
                        <td>Limas</td>
                        <td>haruya_</td>
                        <td><button className={style.btnDetail}>Lihat Detail</button></td>
                    </tr>
    
    
                </table>
    
            </div>
            </div>
        </>
    )
}