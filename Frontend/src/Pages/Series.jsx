import React from 'react'
import { use, cache } from 'react'
import { Link } from 'react-router-dom'


export const Series = () => {
    const series = use(getSeries())
    return (
        <div
            className='w-full top-16 font-[Roboto] p-2  relative'
        >
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
    )
}

const getSeries = cache(async () => {
    const response = await fetch("http://localhost:3000/Series")
    const data = await response.json()
    return data;
})
