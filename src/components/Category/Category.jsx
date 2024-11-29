import React from 'react'
import s from './Category.module.scss'
import SectionTitle from '../SectionTitle/SectionTitle'
import Card from '../Card/Card'
import Products from '/public/products.json'


import { Link } from 'react-router-dom'

const Category = ({ title }) => {
  return (
    <>
      <section className={s.category}>
         <div className="container">
            <SectionTitle orient='center'>{title}</SectionTitle>
            <div className={s.wrapper}>

               {Products.slice(0,4).map(card => (
                  <Link to={`/product/${card.id}`}>
                  <Card key={card.id} image={card.image} rate='/rate-4.5.png' name={card.name} price={card.price}/>
                  </Link>
               ))}





               {/* <Card image='/category-1.png' name='T-SHIRT WITH TAPE DETAILS' rate='/rate-4.5.png' price='$120'/> */}
               {/* <Card image='/category-2.png' name='SKINNY FIT JEANS' rate='/rate-3.5.png' price='$240'/>
               <Card image='/category-3.png' name='CHECKERED SHIRT' rate='/rate-4.5.png' price='$180'/>
               <Card image='/category-4.png' name='SLEEVE STRIPED T-SHIRT' rate='/rate-4.5.png' price='$130'/> */}
            </div>
            <button className={s.btn}>View All</button>
         </div>
      </section>
    </>
  )
}

export default Category