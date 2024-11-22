import React from 'react'
import HeroSection from "./Hero"
import FeaturedEvents from "./Events"
import UpcommingEvents from "./Upcomming"
import WordRail from './WordRail'

const Home = () => {
  return (
    <div>
       <WordRail/>
      <HeroSection/>
      <FeaturedEvents/>
      <UpcommingEvents/>

    </div>
  )
}

export default Home
