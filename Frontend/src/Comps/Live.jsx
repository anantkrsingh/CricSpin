import React from 'react'
import { cache, use } from 'react'

export const Live = ({ matchID }) => {
  const match = use(getLive(matchID))
  if (!match) {
    return null;
  }
  const jsondata = match.jsondata.replace("/", "")
  let jsonData = null;

  try {
    jsonData = JSON.parse(jsondata);
  } catch (error) {
    console.error("Error parsing JSON data:", error);
    return null;
  }

  const data = jsonData?.jsondata;

  if (!data) {
    return null;
  }

  return (
    <div className='flex w-full '>
      <div className='  w-full flex flex-col'>
        <table className='w-full bg-gray-200 rounded-xl shadow-lg '>
          <thead>
            <tr className='p-2'>
              <th className='text-start  p-2'>Batsmen</th>
              <th className='text-right  p-2'>R(B)</th>
              <th className='text-right  p-2'>4s</th>
              <th className='text-right  p-2'>6s</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='p-2 text-start font-bold text-blue-950'>{data.batsman.split("|")[0].trim()} </td>
              <td className='text-right text-blue-800 font-bold  p-2'>{data.oversB.split("|")[0].trim().split(",")[1].trim()} , {data.oversB.split("|")[1].trim().split(",")[1].trim()}</td>
              <td className='text-right p-2'>{data.s4}</td>
              <td className='text-right p-2'>{data.s6}</td>
            </tr>
            <tr>
              <td className='p-2 text-start font-bold text-blue-950'>{data.batsman.split("|")[1].trim()}</td>
              <td className='text-right text-blue-800 font-bold p-2'>
                {data.oversB.split("|")[0].trim().split(",")[0].trim()} ,
                {data.oversB.split("|")[1].trim().split(",")[0].trim()} </td>
              <td className='text-right p-2'>{data.ns4}</td>
              <td className='text-right p-2'>{data.ns6}</td>
            </tr>
          </tbody>
        </table>
        <div className='p-2 mt-2 mb-2 bg-white rounded-lg'> <h6>Bowler:</h6> <p>{data.bowler}</p> </div>
        <div>
          <div className='bg-white p-2 rounded-t-xl w-max'> Last 6 Balls </div>

          <div className='w-full bg-white p-4 justify-center items-center rounded-b-xl text-center'>

            {data.Last6Balls}
          </div>
        </div>
      </div>
    </div>
  )
}

const getLive = cache(async (matchID) => {
  const response = await fetch("http://localhost:3000/Live/?MatchId=" + matchID, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
  })
  console.log(response);
  const data = await response.json()
  console.log(data);
  return data[0];
})



