import React from 'react'
import s from './Card.module.scss'

const Card = ({image, name='Soon...', rate='0', price='Нету в наличии'}) => {
  return (
    <>
      <div className={s.card}>
         <div className={s.wrap}>
            <img className={s.img} src={image} alt="" />
            <h3>{name}</h3>
            <img className={s.rate} src={rate} alt="" />
            <b>{price}</b>
         </div>
      </div>
    </>
  )
}

export default Card