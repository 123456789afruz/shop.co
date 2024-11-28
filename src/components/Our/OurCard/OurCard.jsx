import React from 'react'
import s from './OurCard.module.scss'

const OurCard = ({img, name, text, data}) => {
  return (
    <>
      <div className={s.card}>
        <img src={img} alt="" />
        <h3>{name}</h3>
        <p>{text}</p>
        <p>{data}</p>

      </div>
    </>
  )
}

export default OurCard
