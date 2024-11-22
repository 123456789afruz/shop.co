import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Header/Hero/Hero'
import Brands from '../components/Header/Brands/Brands'
import Category from '../components/Header/Category/Category'

const Home = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Brands/>
      <Category/>
    </>
  )
}

export default Home