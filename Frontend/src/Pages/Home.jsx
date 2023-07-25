import React from 'react'

import { use, cache } from 'react'
import { UpcominMatch } from '../Comps/UpcominMatch'
import { LiveMatches } from '../Comps/LiveMatches'
import Logo from '../assets/logo.png'
import { FinishedMatches } from '../Comps/FinishedMatches'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function Home() {
  const UpcomingMatches = use(getUpcomingMatches())
  const LiveMatchs = use(getLiveMatches());

  return (
    <div className='w-full top-8 font-[Roboto]  relative'>
      <div className='w-full flex self-center justify-center items-center'>
        <img src={Logo} className='w-[60px]  ' alt="" />
      </div>
      <h4 className='text-2xl text-white m-2'>Live Matches</h4>
      <Carousel>

      {
        LiveMatchs.map((item) => {
          return (
             <LiveMatches match= { item}/>
           
            
          )
        })
      }
       </Carousel> 
      <h4 className='text-2xl text-white m-2'>Upcoming Matches</h4>
      {
        UpcomingMatches.AllMatch.map((item) => {
          return (
            <UpcominMatch item={item} />
          )
        })
      }


    </div>
  )
}



const getUpcomingMatches = cache(async () => {
  const response = await fetch("http://localhost:3000/UpcomingMatches")
  const data = await response.json()
  return data;
})

const getLiveMatches = cache(async () => {
  const response = await fetch("http://localhost:3000/LiveLine")
  const data = await response.json()
  return data;
})



