import React from 'react'
import s from './Our.module.scss'

import OurCard from './OurCard/OurCard'
import SectionTitle from '../SectionTitle/SectionTitle'

const Our = () => {
  return (
    <>
      <section className={s.our}>
        <div className="container">
          <SectionTitle otient='left'>OUR HAPPY CUSTOMERS</SectionTitle>
          <div className={s.wrapper}>
            <OurCard img='/rate-4.5.png' name='Sarah M.✅' text='"I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations."' />
            <OurCard img='/rate-4.5.png' name='Alex K.✅' text='"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”' />
            <OurCard img='/rate-4.5.png' name='James L.✅' text='"As someone who is always on the lookout for unique fashion pieces, I am thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Our
