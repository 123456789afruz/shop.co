import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Header/Hero/Hero'
import Brands from '../components/Header/Brands/Brands'
import Category from '../components/Header/Category/Category'
import By from '../components/By/By'

const Home = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Brands/>
      <Category title='New arrivals' num="0,4"/>  
      <Category title='Top selling' num="4,8"/>
      <By title='BROWSE BY dress STYLE'/>
    </>
  )
}

export default Home