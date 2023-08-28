import React, { useEffect, useState } from 'react'
import { MatchOdd } from './MatchOdd';

export const MatchOdds = ({ matchId }) => {

    const [match, setMatch] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();

        const interval = setInterval(() => {
            fetchData();
        }, 6000); 

        return () => clearInterval(interval); 
    }, []);
    const fetchData = async () => {
        try {
            const response = await fetch(`http://api.cricspin.live/MatchOdds?MatchId=${matchId}`);
            const data = await response.json();
            setMatch(data.Matchst);
            setLoading(false);
            console.log(data);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    };

    const teamAPlayers = match.filter((match) => match.isfirstinning === "1");
    const teamBPlayers = match.filter((match) => match.isfirstinning === "2");

    const [showTeamAPlayers, setShowTeamAPlayers] = useState(true);
    const [showTeamBPlayers, setShowTeamBPlayers] = useState(false);

    const toggleTeamAPlayers = () => {
        setShowTeamAPlayers(true);
        setShowTeamBPlayers(false);
    };

    const toggleTeamBPlayers = () => {
        setShowTeamBPlayers(true);
        setShowTeamAPlayers(false);
    };


    return (
        !loading &&
        <div className='flex flex-col'>
            <div className='flex w-full justify-between p-2'>
                <div onClick={toggleTeamAPlayers} className={showTeamAPlayers ? "bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-md" : "bg-white rounded-md px-4 py-2 cursor-pointer"}>
                    <h2 className="text-lg font-bold">1ST INNINGS</h2>
                </div>
                <div onClick={toggleTeamBPlayers} className={showTeamBPlayers ? "bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-md" : "bg-white rounded-md px-4 py-2 cursor-pointer"}>
                    <h2 className="text-lg font-bold ">2ND INNINGS</h2>
                </div>
            </div>
            <div>
                {showTeamAPlayers && (
                    teamAPlayers.map((item) => {
                        return (

                            <MatchOdd item={item} />
                        )
                    })
                )}
                {showTeamBPlayers && (

                    teamBPlayers.map((item) => {
                        return (<MatchOdd item={item} />)

                    })
                )}
            </div>
        </div>
    )
}
