import React from 'react'
import {use,cache} from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

import { useSearchParams } from 'react-router-dom'
import { LiveMatches } from '../Comps/LiveMatches'
import { FinishedMatches } from '../Comps/FinishedMatches'

export const SeriesDetails = () => {
    const navigateTo = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams()
    const id = searchParams.get("seriesId");
    const matches = use(getMatches(id))
    return (
        <>
            <div className="max-w-[375px] md:max-w-[400px] bg-main h-screen left-[50%]  m-auto p-4 overflow-y-auto">
            <BsArrowLeft className='text-white' onClick={() => navigateTo(-1)} size={28} />
            {
            matches.map((item)=>{
                return(
                    <FinishedMatches match={item}/>
                )
            })
        }
            </div>
        </> 
    )
}



const getMatches = cache(async (seriesId) => {
    const response = await fetch(`http://localhost:8001/SeriesMatches?seriesId=${seriesId}`)
    const data = await response.json()
    return data;
  })