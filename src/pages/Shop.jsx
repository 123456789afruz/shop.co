import React from 'react'
import ShopWrap from '../components/ShopWrap/ShopWrap'
import All from '../components/All/All'
import Category from '../components/Category/Category'

const Shop = () => {
  return (
    <>
      <ShopWrap/>
      <All/>
      <Category orient='center' title='You might also like'/>
      
    </>
  )
}

export default Shop