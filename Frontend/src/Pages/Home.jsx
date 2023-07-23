import React from 'react'

import { use, cache } from 'react'
import { UpcominMatch } from '../Comps/UpcominMatch'
import { LiveMatches } from '../Comps/LiveMatches'


export default function Home() {
  const UpcomingMatches = use(getUpcomingMatches())
  const LiveMatchs = use(getLiveMatches());

  return (
    <div className='w-full top-16 font-[Roboto]  relative'>

      <h4 className='text-2xl text-white m-2'>Live Matches</h4>
      {
        LiveMatchs.map((item) => {
          return (
            <LiveMatches match={item} />
          )
        })
      }
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



