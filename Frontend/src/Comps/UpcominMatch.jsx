import React from 'react'

export const UpcominMatch = ({ item }) => {
    return (
        <>
            <div className='w-auto bg-white mt-6 p-5 rounded-t-xl flex justify-between ' >
                <div className='w-[49%]'>
                    <img src={item.ImageUrl + item.TeamAImage} className='rounded-full border-4 relative w-[48px]  h-[48px] top-[-2.5rem]' alt="" />
                    <h4 className='font-[Roboto] text-xl'>{item.TeamA}</h4>
                </div>
                <div className='flex'>
                    <h4 className='text-xl font[Roboto]'>VS</h4>
                </div>
                <div className='w-[49%]'>
                    <img src={item.ImageUrl + item.TeamBImage} className=' w-[55px] border-4 ms-auto rounded-full relative  h-[48px] top-[-2.5rem]' alt="" />
                    <h4 className='w-fit ms-auto font-[Roboto] text-xl text-right'>{item.TeamB}</h4>
                </div>
            </div>
            <div className='w-auto bg-blue-100 rounded-b-xl'>
                <h5 className='text-center font-[Roboto]  text-blue-900'>{item.Title}</h5>

                <h6 className='text-center p-2'>{item.Venue}</h6>
            </div>
            <div className='w-full flex content-center self-center justify-center'>
                <h5 className='text-center w-fit bg bg-teal-100 rounded-b-xl p-2  font-[Roboto]  text-blue-900'>{item.Matchtime}</h5>

            </div>
        </>
    )
}
