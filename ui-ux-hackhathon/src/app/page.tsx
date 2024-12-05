import BestSale from '@/components/BestSale'
import Customer from '@/components/Customer'
import Enhance from '@/components/Enhance'
import ExploreProducts from '@/components/ExploreProducts'
import Featured from '@/components/Featured'
import React from 'react'

const Page = () => {
  return (
    <div>
      <ExploreProducts />
      <Featured/>
      <Customer/>
      <Enhance/>
      <BestSale/>
    </div>
  )
}

export default Page