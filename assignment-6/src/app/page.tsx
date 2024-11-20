import Achievements from '@/components/Achievements'
import Blog from '@/components/Blog'
import Customer from '@/components/Customer'
import Hero from '@/components/Hero'
import Logo from '@/components/Logo'
import Team from '@/components/Team'
import Testimonial from '@/components/Testimonial'
import React from 'react'

const page = () => {
  return (
    <div>
     
      <Hero/>
      <Logo/>
      <Team/>
      <Achievements/>
      <Blog/>
      <Customer/>
      <Testimonial/>
    </div>
  )
}

export default page