import React from 'react'
const PlayerScoreCard = ({ player }) => {
    return (
      <tr>
        <td className="p-2 font-bold text-blue-950">
          {player.PlayerName} <br /> <p className="text-lg text-blue-500"> <p className='text-sm'>
          {player.outby}
            </p> </p>{" "}
        </td>
        <td className="text-right text-blue-800 font-bold p-2">{player.Runs}</td>
        <td className="text-right p-2">{player.Balls}</td>
        <td className="text-right p-2">{player.four}</td>
        <td className="text-right p-4">{player.six}</td>
      </tr>
    );
  };


  export default PlayerScoreCard
  