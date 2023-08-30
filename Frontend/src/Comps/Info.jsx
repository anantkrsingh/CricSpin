import React from 'react'
import { AiFillCalendar } from 'react-icons/ai'
import { HiLocationMarker } from 'react-icons/hi'
import { getDatabase } from "firebase/database";

export const Info = ({ match }) => {
 
  return (
    <div className='w-full euclidMedium text-black flex flex-col p-2'>
      <p className=' p-2 '>{match?.Result}</p>
      <div className='flex items-center p-2'>
        <AiFillCalendar color='black' />
        <p className='ms-2 '>{match?.Matchtime}</p>
      </div>
      <div className='flex items-center p-2'>
        {match?.venue && <>
          <HiLocationMarker color='black' />
          <p className='ms-2 '>{match?.venue}</p>
        </>}

      </div>
      <div className='flex items-center p-2'>
        {match?.Venue && <>
          <HiLocationMarker color='black' />
          <p className='ms-2 '>{match?.Venue}</p>
        </>}

      </div>

    </div>
  )
}
