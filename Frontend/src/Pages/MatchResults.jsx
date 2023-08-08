import React, { useEffect, useState } from 'react'
import { FinishedMatches } from '../Comps/FinishedMatches';

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
        <div>{
            loading ? <div>Loading...</div> : matches.map((item) => (
                <FinishedMatches item={item} key={item.id} />
              ))
        }</div>
    )
}
