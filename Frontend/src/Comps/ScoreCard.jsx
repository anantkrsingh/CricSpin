import React, { useState } from 'react';
import usePlayers from '../Comps/UsePlayers';
import PlayerScoreCard from './PlayerScoreCard';

export const ScoreCard = ({ matchID }) => {
  const {players,loading} = usePlayers(matchID);
  
  const [showTeamAPlayers, setShowTeamAPlayers] = useState(true);
  const [showTeamBPlayers, setShowTeamBPlayers] = useState(false);

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
      <div className='flex w-full justify-between p-2'>
        <div onClick={toggleTeamAPlayers} className={showTeamAPlayers ? "bg-white p-2 rounded-lg" : "bg-gray-500 text-gray-100 p-2 rounded-lg cursor-pointer"}>
          <h2 className="text-lg font-bold">{teamA}</h2>
        </div>
        <div onClick={toggleTeamBPlayers} className={showTeamBPlayers ? "bg-white p-2 rounded-lg" : "bg-gray-500 text-gray-100 p-2 rounded-lg cursor-pointer"}>
          <h2 className="text-lg font-bold ">{teamB}</h2>
        </div>
      </div>
      <div>
        {showTeamAPlayers && (
          <table className="w-full bg-white p-2 rounded-lg shadow-lg">
            <thead>
              <tr>
                <th className="text-start p-2">Batter</th>
                <th className="text-right p-2">R</th>
                <th className="text-right p-2">B</th>
                <th className="text-right p-2">2s</th>
                <th className="text-right p-4">6s</th>
              </tr>
            </thead>
            <tbody>
              {teamAPlayers.map((player) => (
                <PlayerScoreCard key={player.seqno} player={player} />
              ))}
            </tbody>
          </table>
        )}
        {showTeamBPlayers && (
          <table className="w-full bg-white p-2 rounded-lg shadow-lg">
            <thead>
              <tr>
                <th className="text-start p-2">Batter</th>
                <th className="text-right p-2">R</th>
                <th className="text-right p-2">B</th>
                <th className="text-right p-2">2s</th>
                <th className="text-right p-4">6s</th>
              </tr>
            </thead>
            <tbody>
              {teamBPlayers.map((player) => (
                <PlayerScoreCard key={player.seqno} player={player} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};


