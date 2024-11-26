import React from 'react'
import Hero from '../components/Header/Hero/Hero'
import Brands from '../components/Header/Brands/Brands'
import Category from '../components/Header/Category/Category'
import Browse from '../components/Browse/Browse'

const Home = () => {
  return (
    <>
      <Hero/>
      <Brands/>
      <Category title='New arrivals' num="0,4"/>  
      <Category title='Top selling' num="4,8"/>
      <Browse/>
    </>
  )
}

export default Home