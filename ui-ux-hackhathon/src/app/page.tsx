import BestSale from '@/components/BestSale'
import Catagery from '@/components/Catagery'
import Customer from '@/components/Customer'
import Enhance from '@/components/Enhance'
import ExploreProducts from '@/components/ExploreProducts'
import Featured from '@/components/Featured'
import Header from '@/components/Header'
import React from 'react'
import FlashSale from '@/components/FlashSale'
import Hero from '@/components/Hero'

const Page = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <FlashSale/>
      <Catagery/>
      <BestSale/>
      <Enhance/>
      <ExploreProducts />
      <Featured/>
      <Customer/>
    </div>
  )
}

export default Page