import React, { useState } from 'react'
import s from './Header.module.scss'
import { Link } from 'react-router-dom'


const Header = () => {

  const [active, setActive] = useState(false)


  const toggleBurger = () => {
    setActive(!active)
  }


  console.log(active);
  


  return (
    <>
      <header className={s.header}>
         <div className='container'>
            <nav className={s.nav}>
              <img onClick={toggleBurger} className={`${s.burger} ${active ? `${s.active}` : ''}`} src="/Burger-menu.png" alt="" />
              <Link to={'/'} className={s.logo}>SHOP.CO</Link>
              <div className={`${s.menu} ${active ? `${s.active}` : ''}`}>
                  <Link to={'/'}>Shop <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5306 1.53063L6.53063 6.53063C6.46095 6.60055 6.37816 6.65602 6.28699 6.69388C6.19583 6.73173 6.09809 6.75122 5.99938 6.75122C5.90067 6.75122 5.80293 6.73173 5.71176 6.69388C5.6206 6.65602 5.53781 6.60055 5.46813 6.53063L0.468128 1.53063C0.327232 1.38973 0.248077 1.19864 0.248077 0.999378C0.248077 0.80012 0.327232 0.609024 0.468128 0.468128C0.609025 0.327231 0.800121 0.248077 0.999378 0.248077C1.19864 0.248077 1.38973 0.327231 1.53063 0.468128L6 4.9375L10.4694 0.467503C10.6103 0.326607 10.8014 0.247452 11.0006 0.247452C11.1999 0.247452 11.391 0.326607 11.5319 0.467503C11.6728 0.608399 11.7519 0.799496 11.7519 0.998753C11.7519 1.19801 11.6728 1.38911 11.5319 1.53L11.5306 1.53063Z" fill="black"/></svg></Link>
                  <Link to={'/'}>On Sale</Link>
                  <Link to={'/'}>New Arrivals</Link>
                  <Link to={'/'}>Brands</Link>
              </div>
              <input placeholder='Search for products...' className={s.search} type="text" />
              <div className={s.box}>
                  <img src="/icon-1.svg" alt="" />
                  <img src="/icon-2.svg" alt="" />
              </div>
            </nav>
         </div>
      </header>
    </>
  )
}

export default Header