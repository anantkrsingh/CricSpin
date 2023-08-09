import React, { useEffect, useState } from 'react'
import { MatchOdd } from './MatchOdd';

export const MatchOdds = ({ matchId }) => {

    const [match, setMatch] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();

        const interval = setInterval(() => {
            fetchData();
        }, 6000); // Refresh every 6 seconds

        return () => clearInterval(interval); // Cleanup the interval on unmount
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
                <div onClick={toggleTeamAPlayers} className={showTeamAPlayers ? "bg-white p-2 rounded-lg" : "bg-gray-500 text-gray-100 p-2 rounded-lg cursor-pointer"}>
                    <h2 className="text-lg font-bold">1ST INNINGS</h2>
                </div>
                <div onClick={toggleTeamBPlayers} className={showTeamBPlayers ? "bg-white p-2 rounded-lg" : "bg-gray-500 text-gray-100 p-2 rounded-lg cursor-pointer"}>
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
