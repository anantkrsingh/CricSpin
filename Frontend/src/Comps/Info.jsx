import React from 'react'
import { AiFillCalendar } from 'react-icons/ai'
import { HiLocationMarker } from 'react-icons/hi'
export const Info = ({ match }) => {
  console.log(match.Result);
  return (
    <div className='w-full euclidMedium text-black flex flex-col p-2'>
      <p className=' p-2 '>{match.Result}</p>
      <div className='flex items-center p-2'>
        <AiFillCalendar color='black' />
        <p className='ms-2 '>{match.Matchtime}</p>
      </div>
      <div className='flex items-center p-2'>
        <HiLocationMarker color='black' />
        <p className='ms-2 '>{match.venue}</p>
      </div>
    </div>
  )
}
