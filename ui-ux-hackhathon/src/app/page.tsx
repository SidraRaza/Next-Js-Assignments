import BestSale from '@/components/BestSale'
import Catagery from '@/components/Catagery'
import Customer from '@/components/Customer'
import Enhance from '@/components/Enhance'
import ExploreProducts from '@/components/ExploreProducts'
import Featured from '@/components/Featured'
import Header from '@/components/Header'
import Header2 from '@/components/Header2'
import React from 'react'
import Header3 from '@/components/Header3'

const Page = () => {
  return (
    <div>
      <ExploreProducts />
      <Featured/>
      <Customer/>
      <Enhance/>
      <BestSale/>
      <Catagery/>
      <Header/>
      <Header2/>
      <Header3/>
    </div>
  )
}

export default Page