import {useState, useRef, useEffect} from 'react'
import style from './Card.module.css'
function Card({ img, model, text  }) {
const [onHover, setOnHover] = useState(false);
const textWrap = useRef()
const textInner = useRef()
useEffect(() => {
    const heigth = textInner.current.getBoundingClientRect().height
    if(onHover){
    textWrap.current.style.height = `${heigth}px`
}else{
    textWrap.current.style.height = `56px`
}
}, [onHover]);
  return (
    <div className={style.carItemWrap}>
    <div className={style.CardItem} onMouseOver={(event) =>{setOnHover(true)}} onMouseLeave={(event) =>{setOnHover(false)}} >
        <img src={img} alt="model of car" className={style.carImg} />
        <div className={style.carDesription}>
        <h2 className={style.carModel} >{model}</h2>
        <div ref={textWrap} className={style.carTextWrap}>
            <p ref={textInner} className={style.carText}>{text}</p>
        </div>
        </div>
    </div>
    </div>
  )
}
export default Card