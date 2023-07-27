import React from 'react'

import { use, cache } from 'react'
import { UpcominMatch } from '../Comps/UpcominMatch'
import { LiveMatches } from '../Comps/LiveMatches'
import Logo from '../assets/logo.png'
import { FinishedMatches } from '../Comps/FinishedMatches'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default function Home() {
  const UpcomingMatches = use(getUpcomingMatches())
  const LiveMatchs = use(getLiveMatches());

  return (
    <div className='w-full top-8 font-[Roboto]  relative'>
      <div className='w-full flex self-center text-white justify-center items-center'>
        <div className='p-4' >Cricspin</div>
        <img src={Logo} className='w-[60px]  ' alt="" />
        <div className='p-4 font-bold euclidMedium'>
          LiveLine
        </div>
      </div>
      <div className='w-full h-[1px] bg-gray-300 mt-4 mb-4'></div>
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
  const response = await fetch("http://localhost:8001/UpcomingMatches")
  const data = await response.json()
  return data;
})

const getLiveMatches = cache(async () => {
  const response = await fetch("http://localhost:8001/LiveLine")
  const data = await response.json()
  return data;
})



