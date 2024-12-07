import BestSale from '@/components/BestSale'
import Catagery from '@/components/Catagery'
import Customer from '@/components/Customer'
import Enhance from '@/components/Enhance'
import ExploreProducts from '@/components/ExploreProducts'
import Featured from '@/components/Featured'
import Header2 from '@/components/Header2'
import React from 'react'
import FlashSale from '@/components/FlashSale'
import Hero from '@/components/Hero'

const Page = () => {
  return (
    <div>
      <Header2/>
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