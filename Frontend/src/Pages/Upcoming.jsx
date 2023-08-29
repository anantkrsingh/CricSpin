import React, { useEffect, useState } from 'react'
import { UpcominMatch } from '../Comps/UpcominMatch';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';


export const Upcoming = () => {
    const navigateTo = useNavigate();

    const [upcomingMatches, setUpcomingMatches] = useState([]);
    const [filteredMatches, setFilteredMatches] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const upcomingResponse = await fetch("http://api.cricspin.live/UpcomingMatches");
            const upcomingData = await upcomingResponse.json();
            console.log(upcomingData.AllMatch);
            setUpcomingMatches(upcomingData.AllMatch);

            const groupByDate = (matches) => {
                const groupedMatches = {};
                matches.forEach((match) => {
                    const date = match.Matchtime.split(" ")[0];
                    if (!groupedMatches[date]) {
                        groupedMatches[date] = [];
                    }
                    groupedMatches[date].push(match);
                });
                return groupedMatches;
            };

            const groupedMatches = groupByDate(upcomingData.AllMatch);
            console.log(groupedMatches);
            setFilteredMatches(groupedMatches);
            console.log(filteredMatches);
            setLoading(false)
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    };

    return (
        <>

            <div className='max-w-[375px] flex euclidMedium md:max-w-[400px] bg left-[50%]  m-auto p-4 overflow-y-auto'>
                <BsArrowLeft className='text-white' onClick={() => navigateTo(-1)} size={28} />
                <div className='ml-2 text-white'>Upcoming Matches</div>
            </div>
            <div className='max-w-[375px] euclidMedium md:max-w-[400px] bg h-screen left-[50%] m-auto p-4 overflow-y-auto'>
                {!loading &&
                   Object.values(filteredMatches).map((date, index) => {
                        return (
                            <div key={index}>
                                <p className='text-white mt-2'>{date[0].Matchtime}</p>
                                {date.map((match, index) => (
                                    <UpcominMatch item={match} position={index} key={match.id} />
                                ))}
                            </div>
                        );
                    })}
            </div>

        </>
    )
}
