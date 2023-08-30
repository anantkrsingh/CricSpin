import React, { useContext, useState } from 'react'
import { BsCaretRight } from 'react-icons/bs'
import { MyContext } from '../AppContext'

export const ExpandableBanner = () => {
    const {bannerData} = useContext(MyContext)
    const [shown, setShown] = useState(false)
    return (
        <div>
            <div className='bg-white  mt-2 mb-2 rounded-xl p-2 transition-all duration-300 ease-in-out cursor-pointer' >
                <div onClick={() => setShown(!shown)} className='flex euclidMedium justify-between items-center transition-all duration-150 ease-in-out '>
                    <p>Get Online Id</p>
                    <BsCaretRight />
                </div>
                <div className={shown ? '' : "hidden"}>
                    {
                        bannerData && <a target='_blank' href={bannerData[1].url}>

                            <img src={bannerData[1].image} />
                        </a>
                    }
                </div>
            </div>
        </div>
    )
}
