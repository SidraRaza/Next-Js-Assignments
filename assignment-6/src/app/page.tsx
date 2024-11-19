import Achievements from '@/components/Achievements'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Logo from '@/components/Logo'
import MinHeader from '@/components/MinHeader'
import Team from '@/components/Team'
import React from 'react'

const page = () => {
  return (
    <div>
      <MinHeader/>
      <Header/>
      <Hero/>
      <Logo/>
      <Team/>
      <Achievements/>
    </div>
  )
}

export default page