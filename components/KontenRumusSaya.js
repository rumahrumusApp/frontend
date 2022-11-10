import Link from "next/link"
import style from "../styles/Daftarrumus.module.css"

export default function KontenRumusSaya(page){
    console.log(page)
    if (page.page === 0) {
        return (
            <>
            <div className={style.container}>
            <div className={style.allcards}>
            <div className={style.cards}>
                <a href="./viewrumus"><img src='./cari_rumus.png'/></a>
                <p>Persegi</p>
            </div>

            <div className={style.cards}>
                <a href="./viewrumus"><img src='./cari_rumus.png'/></a>
                <p>Persegi Panjang</p>
            </div>
            </div>
            </div>
            </>

        )
    }

    else if (page.page === 1) {
        return(
            <>
                <div className={style.tabel}>
                {/* <h2>Daftar Rumus yang Dibuat</h2>
                <hr/> */}
    
                <table>
                    <tr className={style.header}>
                        <td>No</td>
                        <td>Rumus</td>
                        <td>Status</td>
                        <td>Detail</td>
                    </tr>
    
                    <tr>
                        <td>1</td>
                        <td>Persegi</td>
                        <td>Status</td>
                        <td><Link href="/detailrumus"><button className={style.btnDetail}>Lihat Detail</button></Link></td>
                    </tr>
    
                    <tr>
                        <td>2</td>
                        <td>Segitiga</td>
                        <td>Status</td>
                        <td><button className={style.btnDetail}>Lihat Detail</button></td>
                    </tr>
    
                    <tr>
                        <td>3</td>
                        <td>Limas</td>
                        <td>Status</td>
                        <td><button className={style.btnDetail}>Lihat Detail</button></td>
                    </tr>
    
    
                </table>
    
            </div>
    
            </>
        )
    }
}