import React from 'react'
import s from './Brands.module.scss'

const Brands = () => {
  return (
    <>
      <div className={s.brands}>
        <div className="container">
            <div className={s.wrapper}>
                <img src="/brands-1.png" alt="" />
                <img src="/brands-2.png" alt="" />
                <img src="/brands-3.png" alt="" />
                <img src="/brands-4.png" alt="" />
                <img src="/brands-5.png" alt="" />
            </div>
        </div>
      </div>
    </>
  )
}

export default Brands
