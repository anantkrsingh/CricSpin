import React, { useEffect, useState } from 'react'
import { UpcominMatch } from '../Comps/UpcominMatch';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';



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
            <div className='w-full top-8 font-[Roboto] ov  relative'
            >

                <div className=' fixed overflow-hidden top-0 w-[358px] md:w-full margin-0 bg z-10 flex self-center text-white justify-center flex-col items-center'>
                    <div className='flex justify-between'>

                        <div className='p-4 euclidMedium items-center flex flex-row'>
                            <p className='text-xl'>C</p>ricSpin
                        </div>
                        <img src={Logo} onClick={() => window.location.reload()} className='w-[60px]  ' alt="" />
                        <div className='p-4 euclidMedium items-center flex'>
                            <p className='text-xl'>L</p>iveLine
                        </div>
                    </div>
                    <div className='w-full mt-1 h-[1px] bg-gray-300 '></div>
                </div>
                <p className='p-4 mt-10 text-white'>
                    Upcoming
                </p>
                {!loading &&
                    Object.values(filteredMatches).map((date, index) => {
                        return (
                            <div className='ms-4' key={index}>
                                <p className='text-white ms-5'>{date[0].Matchtime.split("at")[0]}</p>
                                {date.map((match, index) => (
                                    <UpcominMatch item={match} position={index} key={match.id} />
                                ))}
                            </div>
                        );
                    })}

                    <div className='h-6'></div>
            </div>
        </>
    )
}
