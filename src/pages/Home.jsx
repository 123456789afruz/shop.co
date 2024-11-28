import React from 'react'
import Browse from '../components/Browse/Browse'
import Our from '../components/Our/Our'
import Hero from '../components/Hero/Hero'
import Category from '../components/Category/Category'
import Brands from '../components/Brands/Brands'

const Home = () => {
  return (
    <>
      <Hero/>
      <Brands/>
      <Category  title='NEW ARRIVALS' num="4,8"/>
      <Category  title='Top selling' num="4,8"/>
      <Browse/>
      <Our/>
    </>
  )
}

export default Home