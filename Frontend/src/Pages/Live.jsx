import React, { useEffect, useState } from 'react'
import { UpcominMatch } from '../Comps/UpcominMatch';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { LiveMatches } from '../Comps/LiveMatches';
import { Helmet } from 'react-helmet';
import { APIURL } from '../CONST';


export const Live = () => {
    const navigateTo = useNavigate();

    const [upcomingMatches, setUpcomingMatches] = useState([]);
    const [filteredMatches, setFilteredMatches] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const upcomingResponse = await fetch(`${APIURL}LiveLine`);
            const upcomingData = await upcomingResponse.json();
            console.log(upcomingData);
            setUpcomingMatches(upcomingData);
            setLoading(false)
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>Live Matches</title>
                <meta name='description' content='Indian Premier Leage, ipl 2022, ipl auction 2022, ipl 2021 schedule, Virat kohli, sreesanth, world cup, cricket, fast live update, cricket live score' />
                <meta name='keywords' content='Indian Premier Leage, ipl 2022, ipl auction 2022, ipl 2021 schedule, Virat kohli, sreesanth, world cup, cricket, fast live update, cricket live score'/>
            </Helmet>

            <div className='max-w-[375px] flex euclidMedium md:max-w-[400px] bg left-[50%]  m-auto p-4 overflow-y-auto'>
                <BsArrowLeft className='text-white' onClick={() => navigateTo(-1)} size={28} />
                <div className='ml-2 text-white'>Matches For You</div>
            </div>
            <div className='max-w-[375px] euclidMedium md:max-w-[400px] bg h-screen left-[50%] m-auto p-4 overflow-y-auto'>
                {!loading &&

                    upcomingMatches.map((match, index) => (
                        <LiveMatches match={match} key={match.id} />
                    ))


                }
            </div>

        </>
    )
}
