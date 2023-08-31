import React from 'react'
import { Link } from 'react-router-dom'

export const UpcominMatch = ({ item ,position}) => {
    return (
        // <>
        //     <div className='w-auto bg-white mt-6 p-5 rounded-t-xl flex justify-between ' >
        //         <div className='w-[49%]'>
        //             <img src={item.ImageUrl + item.TeamAImage} className='rounded-full border-4 relative w-[48px]  h-[48px] top-[-2.5rem]' alt="" />
        //             <h4 className='font-[Roboto] text-xl'>{item.TeamA}</h4>
        //         </div>
        //         <div className='flex'>
        //             <h4 className='text-xl font[Roboto]'>VS</h4>
        //         </div>
        //         <div className='w-[49%]'>
        //             <img src={item.ImageUrl + item.TeamBImage} className=' w-[55px] border-4 ms-auto rounded-full relative  h-[48px] top-[-2.5rem]' alt="" />
        //             <h4 className='w-fit ms-auto font-[Roboto] text-xl text-right'>{item.TeamB}</h4>
        //         </div>
        //     </div>
        //     <div className='w-auto bg-blue-100 rounded-b-xl'>
        //         <h5 className='text-center font-[Roboto]  text-blue-900'>{item.Title}</h5>

        //         <h6 className='text-center p-2'>{item.Venue}</h6>
        //     </div>
        //     <div className='w-full flex content-center self-center justify-center'>
        //         <h5 className='text-center w-fit bg bg-teal-100 rounded-b-xl p-2  font-[Roboto]  text-blue-900'>{item.Matchtime}</h5>

        //     </div>
        // </>

        <>
            <Link to={{
                pathname: `/upcomingresults`,
                search: `position=${position}`
            }}>

                <div className='w-auto bg-white mt-4 p-2 ps-4 rounded-xl justify-between flex flex-col'>
                    <div className='text-black text-[16px] euclid'>
                        {item.Title}
                    </div>
                    <div className='flex w-full justify-between'>
                        <div className='flex flex-col'>
                            <div className='flex flex-row items-center'>
                                <img src={item.ImageUrl + item.TeamAImage} className='rounded-full border-2  w-[48px] h-[48px]' alt="" />
                                <h4 className=' euclid font-bold ms-4 text-[18px]'>{item.TeamA}</h4>
                            </div>
                            <div className='flex flex-row items-center'>
                                <img src={item.ImageUrl + item.TeamBImage} className='rounded-full border-2  w-[48px] h-[48px]' alt="" />
                                <h4 className='euclid font-bold ms-4 text-[18px]'>{item.TeamB}</h4>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='w-[1px] h-full bg-gray-400   m-2'>

                            </div>
                            <div className='ms-4 me-4 font-[Rajdhani] font-bold text-[#a50000]'>
                                Upcoming
                            </div>
                        </div>
                    </div>
                    <div className='text-[#9d6003] euclidMedium text-[16px] mt-2'>
                        {item.Matchtime}
                    </div>
                </div>
            </Link>
        </>
    )
}
