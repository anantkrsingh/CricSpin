import React, { useEffect, useState } from 'react'

export const MatchOdds = ({ matchId }) => {

    const [match, setMatch] = useState([]);
    const [loading,setLoading] = useState(false);
    useEffect(() => {
        fetchData();
      }, []);
    const fetchData = async () => {
        try {
            const response = await fetch(`http://api.cricspin.live/MatchOdds?MatchId=${matchId}`);
            const data = await response.json();
            setMatch(data.MatchSt)
            setLoading(false);
            console.log(data);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    };


    return (
        <div>MatchOdds</div>
    )
}
