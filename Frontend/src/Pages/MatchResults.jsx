import React, { useEffect, useState } from 'react'
import { FinishedMatches } from '../Comps/FinishedMatches';
import { FinishedMatch } from '../Comps/FinishedMatch';
import Logo from '../assets/logo.png';

import { useSearchParams } from 'react-router-dom';

export const MatchResults = () => {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        try {
            const upcomingResponse = await fetch("http://api.cricspin.live/MatchResults");
            const upcomingData = await upcomingResponse.json();
            console.log(upcomingData.AllMatch);
            setMatches(upcomingData.AllMatch);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    };
    return (
        <div className='w-full top-8 font-[Roboto] ov  relative'
        >

            <div className=' fixed overflow-hidden top-0 w-[358px] md:w-full margin-0 bg z-10 flex self-center text-white justify-center flex-col items-center'>
                <div className='flex justify-between'>

                    <div className='p-4 euclidMedium items-center flex flex-row'>
                        <p className='text-xl'>C</p>ricspin
                    </div>
                    <img src={Logo} className='w-[60px]  ' alt="" />
                    <div className='p-4 euclidMedium items-center flex'>
                        <p className='text-xl'>L</p>iveLine
                    </div>
                </div>
                <div className='w-full  mt-1 h-[1px] bg-gray-300 '></div>
            </div>
            <p className='p-4 mt-10 text-white'>

                Results
            </p>
            {
                loading ? <div>Loading...</div> : matches.map((item) => (
                    <div className='pl-4'>

                        <FinishedMatch match={item} key={item.id} />
                    </div>
                ))
            }</div>
    )

}
