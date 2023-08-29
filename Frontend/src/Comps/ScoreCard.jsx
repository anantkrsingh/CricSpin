import React, { useState } from 'react';
import usePlayers from '../Comps/UsePlayers';
import PlayerScoreCard from './PlayerScoreCard';

export const ScoreCard = ({ matchID}) => {
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
      <div className='w-full  mt-4 mb-2 flex justify-between euclidMedium text-sm '>
        <div onClick={toggleTeamAPlayers} className={showTeamAPlayers ? "bg-blue-100 text-blue-800 font-bold px-2 py-2 rounded-md" : "bg-white rounded-md px-2 py-2 cursor-pointer"}>
          <h2 className="font-bold">{teamA} {teamAPlayers[0]?.TeamRuns})</h2>
        </div>
        <div onClick={toggleTeamBPlayers} className={showTeamBPlayers ? "bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-md" : "bg-white rounded-md px-4 py-2 cursor-pointer"}>
          <h2 className="font-bold">{teamB} {teamBPlayers[0]?.TeamRuns})</h2>
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
                <th className="text-right p-2">4s</th>
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
                <th className="text-right p-2">4s</th>
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


