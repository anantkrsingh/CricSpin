import React, { useContext, useState } from 'react'
import { BsCaretRight } from 'react-icons/bs'
import { MyContext } from '../AppContext'
import { Players } from './Players'

export const PlayerXI = ({matchId}) => {
    const {bannerData} = useContext(MyContext)
    const [shown, setShown] = useState(false)
    return (
        <div>
            <div className='bg-white  mt-2 mb-24 rounded-xl p-2 transition-all duration-300 ease-in-out cursor-pointer' >
                <div onClick={() => setShown(!shown)} className='flex euclidMedium justify-between items-center transition-all duration-150 ease-in-out '>
                    <p>Player XI</p>
                    <BsCaretRight />
                </div>
                <div className={shown ? '' : "hidden"}>
                    {
                        <Players matchID={matchId}/>
                    }
                </div>
            </div>
        </div>
    )
}
