import React from 'react'
import s from './Category.module.scss'
import SectionTitle from '../SectionTitle/SectionTitle'
import Card from '../Card/Card'

import Product from '/public/products.json'

const Category = () => {
  return (
    <>
      <section className={s.category}>
         <div className="container">
            <SectionTitle orient='center'>New arrivals</SectionTitle>
            <div className={s.wrapper}>

               {Product.map(card => (
                  <Card key={card.id} image={card.image} rate='/rate-4.5.png' name={card.name} price={card.price}/>
               ))}





               {/* <Card image='/category-1.png' name='T-SHIRT WITH TAPE DETAILS' rate='/rate-4.5.png' price='$120'/> */}
               {/* <Card image='/category-2.png' name='SKINNY FIT JEANS' rate='/rate-3.5.png' price='$240'/>
               <Card image='/category-3.png' name='CHECKERED SHIRT' rate='/rate-4.5.png' price='$180'/>
               <Card image='/category-4.png' name='SLEEVE STRIPED T-SHIRT' rate='/rate-4.5.png' price='$130'/> */}
            </div>
            <button>View All</button>
         </div>
      </section>
    </>
  )
}

export default Category