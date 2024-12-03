import React from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Product from './pages/Product'
import Upto from './components/Upto/Upto'


const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/product/:id' element={<Product />}/>
      </Routes>
      <Upto/>
      <Footer/>
      
    </>
  )
}

export default App