import Banner from '@/components/Banner'
import Banner2 from '@/components/Banner2'
import FeaturedProduct from '@/components/FeaturedProduct'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Hero2 from '@/components/Hero2'
import PracticeAdvice from '@/components/PracticeAdvice'
import TopHeader from '@/components/TopHeader'
import React from 'react'

const page = () => {
  return (
    <div>
      <TopHeader/>
      <Header/>
      <Hero/>
      <Hero2/>
      <FeaturedProduct/>
      <Banner/>
     <Banner2/>
     <PracticeAdvice/>
  
    </div>
  )
}

export default page