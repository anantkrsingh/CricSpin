import React from 'react'
import {use,cache} from 'react'
import { useSearchParams } from 'react-router-dom'
import { LiveMatches } from '../Comps/LiveMatches'
import { FinishedMatches } from '../Comps/FinishedMatches'

export const SeriesDetails = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const id = searchParams.get("seriesId");
    const matches = use(getMatches(id))
    return (
        <>
            <div className="max-w-[375px] md:max-w-[400px] bg-main h-screen left-[50%]  m-auto p-4 overflow-y-auto">
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
    const response = await fetch(`http://localhost:3000/SeriesMatches?seriesId=${seriesId}`)
    const data = await response.json()
    return data;
  })