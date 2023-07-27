import React from 'react'
import { use, cache } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'



export const Series = () => {
    const series = use(getSeries())
    return (
        <div
            className='w-full top-8 pb-10 font-[Roboto] p-2  relative'
        >
            <div className='w-full flex self-center justify-center items-center'>
                <img src={Logo} className='w-[60px]  ' alt="" />
            </div>
            <div className='mb-10'>
            {
                series.map((item) => {
                    return (
                        <div className='w-full cursor-pointer bg-white mt-2  rounded-3xl shadow-xl p-4'>
                            <Link to={
                                {
                                    pathname: "/smatch",
                                    search: `seriesId=${item.seriesid}`

                                }
                            } >{item.seriesname}  <br />
                                {item.startdate} - {item.enddate}
                            </Link>
                        </div>

                    )
                })
            }
            </div>
            

        </div>
    )
}

const getSeries = cache(async () => {
    const response = await fetch("http://localhost:8001/Series")
    const data = await response.json()
    return data;
})
