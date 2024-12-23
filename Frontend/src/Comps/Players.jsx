import React, { useState } from 'react';
import usePlayers from '../Comps/UsePlayers';
import PlayerScoreCard from './PlayerScoreCard';
import { BottomBanner } from './BottomBanner';

export const Players = ({ matchID }) => {
    const { players, loading } = usePlayers(matchID);

    const [showTeamAPlayers, setShowTeamAPlayers] = useState(true);
    const [showTeamBPlayers, setShowTeamBPlayers] = useState(true);

    const teamA = players.filter((player) => player.TeamSide === "Team A")[0]?.TeamName || "";
    const teamB = players.filter((player) => player.TeamSide === "Team B")[0]?.TeamName || "";

    const teamAPlayers = players.filter((player) => player.TeamSide === "Team A");
    const teamBPlayers = players.filter((player) => player.TeamSide === "Team B");

    const toggleTeamAPlayers = () => {
        setShowTeamAPlayers(true);
        setShowTeamBPlayers(false);
    };

    const toggleTeamBPlayers = () => {
        setShowTeamBPlayers(true);
        setShowTeamAPlayers(false);
    };
    if (loading) {
        return <p>Loading...</p>;
    }
    return (
        <div className="w-full flex flex-col justify-between">
            
            <div className='w-full  mt-4 mb-2 flex justify-between euclidMedium text-sm '>
                <div className={showTeamAPlayers ? "" : "bg-white rounded-md px-2 py-2 cursor-pointer"}>
                    <h2 className="font-bold bg-blue-100 text-blue-800 font-bold px-2 py-2 rounded-md">{teamA}</h2>
                    {
                        teamAPlayers.map((player) => {
                            return (
                                <p className='mt-2'>{player.PlayerName}</p>
                            )
                        })
                    }
                </div>
                <div className={showTeamBPlayers ? "" : "bg-white rounded-md px-4 py-2 cursor-pointer"}>
                    <h2 className="font-bold bg-blue-100 text-blue-800 font-bold px-2 py-2 rounded-md">{teamB}</h2>
                    <div className='flex flex-col items-end'>

                    {
                        teamBPlayers.map((player) => {
                            return (
                                <p className='mt-2'>{player.PlayerName}</p>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};


