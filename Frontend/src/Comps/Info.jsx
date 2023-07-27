import React from 'react'
import { AiFillCalendar } from 'react-icons/ai'
import { HiLocationMarker } from 'react-icons/hi'
export const Info = ({ match }) => {
  console.log(match.Result);
  return (
    <div className='w-full flex flex-col p-2'>
      <p className='text-orange-300 p-2 '>{match.Result}</p>
      <div className='flex items-center p-2'>
        <AiFillCalendar color='white' />
        <p className='ms-2 text-white'>{match.Matchtime}</p>
      </div>
      <div className='flex items-center p-2'>
        <HiLocationMarker color='white' />
        <p className='ms-2 text-white'>{match.venue}</p>
      </div>
    </div>
  )
}
