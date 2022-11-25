import style from '../styles/Cards.module.css'

export default function card(data,list) {
    console.log(data.data);
    console.log(list.list);
    return(
        <>
                 {/* <h2>{list.data.name}</h2> */}
                <div className={style.cards}> 
                    <a href="./viewrumus"><img src={data.data.img_ilustrasi}/></a>
                    <p>{data.data.title}</p>
                </div>

        </>
    )
}