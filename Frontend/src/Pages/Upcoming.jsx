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
        <div className='max-w-[375px]  flex left-[50%]  m-auto overflow-hidden'>

            <div className='flex bg z-0 h-screen bg-gray-200  flex-col w-[375px] m-0 fixed md:left-0  md:w-[100vw] transition-all duration-300 ease-in-out overflow-y-auto'>

                <div className='bg flex p-4'>
                    <BsArrowLeft className='text-white' onClick={() => navigateTo(-1)} size={28} />
                    <div className='ml-2 text-white'>Upcoming Matches</div>
                </div>
                <div className='max-w-[375px]  overflow-y-auto euclidMedium md:max-w-[400px] h-screen left-[50%] m-auto p-4 '>
                    {!loading &&
                        Object.values(filteredMatches).map((date, index) => {
                            return (
                                <div key={index}>
                                    <p className='text-white mt-2'>{date[0].Matchtime.split("at")[0]}</p>
                                    {date.map((match, index) => (
                                        <UpcominMatch item={match} position={index} key={match.id} />
                                    ))}
                                </div>
                            );
                        })}
                </div>
            </div>

        </div>
    )
}
