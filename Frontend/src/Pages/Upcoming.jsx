import React, { useEffect, useState } from 'react'
import { UpcominMatch } from '../Comps/UpcominMatch';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';


export const Upcoming = () => {
    const navigateTo = useNavigate();

    const [upcomingMatches, setUpcomingMatches] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const upcomingResponse = await fetch("http://api.cricspin.live/UpcomingMatches");
            const upcomingData = await upcomingResponse.json();
            console.log(upcomingData.AllMatch);
            setUpcomingMatches(upcomingData.AllMatch);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    };

    return (
        <div className='max-w-[375px] euclidMedium md:max-w-[400px] bg h-screen left-[50%]  m-auto p-4 overflow-y-auto'>
            <BsArrowLeft onClick={() => navigateTo(-1)} color='white'/>
            {upcomingMatches.map((item) => (
                <UpcominMatch item={item} key={item.id} />
            ))}
        </div>
    )
}
