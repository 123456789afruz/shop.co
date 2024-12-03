import React from 'react'
import s from './Upto.module.scss'

const Upto = () => {
  return (
    <>
      <section className={s.upto}>
        <div className="container">
            <div className={s.wrapper}>
                <h2>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
                <div className={s.box}>
                    <input placeholder='Enter your email address'  type="text"  />
                    <button>Subscribe to Newsletter</button>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Upto
