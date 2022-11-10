import style from '../styles/Cards.module.css'

export default function card() {
    return(
        <>
                <div className={style.cards}> 
                    <a href="./viewrumus"><img src='./cari_rumus.png'/></a>
                    <p>Persegi</p>
                </div>

        </>
    )
}