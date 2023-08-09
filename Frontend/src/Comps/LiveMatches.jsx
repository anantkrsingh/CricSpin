import React from 'react'
import { Link } from 'react-router-dom'

export const LiveMatches = ({ match }) => {
    let jsonData = null;
    try {
        if (match.jsondata === "") {
            match.jsondata = "{}";
        }
        jsonData = JSON.parse(match.jsondata).jsondata;
        const wicketA = jsonData?.wicketA;
        console.log(wicketA);
    } catch (error) {
        console.error('Error parsing JSON:', error.message);
    }
    console.log(match);
    return (
        // <>
        //     <Link to={{
        //         pathname: `/results`,
        //         search: `matchId=${match.MatchId}&seriesId=${match.seriesid}`
        //     }} className='w-auto cursor-pointer bg-white mt-6 p-5 rounded-t-xl flex justify-between ' >
        //         <div className='w-[49%]'>
        //             <img src={match.ImgeURL + match.TeamAImage} className='rounded-full border-4 relative w-[48px]  h-[48px] top-[-2.5rem]' alt="" />
        //             <h4 className='font-[Roboto] text-xl'>{match.TeamA}</h4>
        //             <h4 className='font-[Roboto] bg-stone-100 border-stone-300 border-4 text-center rounded-xl  text-xl'>{jsonData?.jsondata?.wicketB ? jsonData?.jsondata?.wicketB : ""}</h4>
        //         </div>
        //         <div className='flex'>
        //             <h4 className='text-xl font[Roboto]'>VS</h4>
        //         </div>
        //         <div className='w-[49%]'>
        //             <img src={match.ImgeURL + match.TeamBImage} className=' w-[55px] border-4 ms-auto rounded-full relative  h-[48px] top-[-2.5rem]' alt="" />
        //             <h4 className='w-fit ms-auto font-[Roboto] text-xl text-right'>{match.TeamB}</h4>
        //             <h4 className='font-[Roboto] bg-stone-100 border-stone-300 border-4 rounded-xl text-center  text-xl'>{jsonData?.jsondata?.wicketA ? jsonData?.jsondata?.wicketA : ""}</h4>
        //         </div>
        //     </Link>
        //     <div className='w-auto bg-blue-100 rounded-b-xl'>
        //         <div className='text-center font-[Roboto]  text-green-900'>{match.Result}</div>
        //         <h5 className='text-center font-[Roboto]  text-blue-900'>{match.Title}</h5>
        //         <h6 className='text-center p-2'>{match.venue}</h6>
        //     </div>
        //     <div className='w-full  flex content-center self-center justify-center'>
        //         <div className='w-fit bg flex flex-row bg-teal-100 rounded-b-xl p-2 '>
        //             <h5 className='text-center  font-[Roboto]  text-blue-900'>{match.Matchtime}</h5>
        //             <ul className='list-disc ms-6'>
        //                 <li>Live</li>
        //             </ul>
        //         </div>

        //     </div>
        // </>

        <>

            <Link to={{
                pathname: `/results`,
                search: `matchId=${match.MatchId}&seriesId=${match.seriesid}`
            }} className='w-full rounded-2xl overflow-hidden  bg-white flex flex-col'>
                <div className='flex justify-between'>
                    <p className='p-2 text-sm euclidMedium'>{match.Title}</p>
                    {match.isfinished === 1 ? <div></div> : <p className='text-white p-2 font-[Rajdhani] bg-red-500'>Live</p>}

                </div>

                <div className='w-full flex flex-row euclidMedium'>
                    <div className='flex flex-col p-4 justify-start items-start'>
                        <img style={{ border: " solid 4px", borderRadius: "9999px", width: "fit-content", height: "48px", borderColor: "rgb(214 211 209)" }} src={match.ImgeURL + match.TeamAImage} className='teamLogo' alt="" />
                        <h4 className=' font-bold text-start text-xl'>{match.TeamA}</h4>
                        <h4 className='font-bold flex flex-row'>{jsonData?.wicketA}  <p className='text-gray-400 ms-1'>({jsonData?.oversA})</p> </h4>
                    </div>
                    <div className='w-[inherit] h-[100%] flex justify-center self-center'>
                        <h3 className='text-red-500 font-bold'>VS</h3>
                    </div>
                    <div className='flex w-[inherit] flex-col p-4 items-end'>
                        <img style={{ border: " solid 4px", borderRadius: "9999px", width: "fit-content", height: "48px", borderColor: "rgb(214 211 209)" }} src={match.ImgeURL + match.TeamBImage} className='teamLogo' alt="" />
                        <h4 className=' font-bold text-right text-xl'>{match.TeamB}</h4>
                        <h4 className='font-bold flex'>{jsonData?.wicketB}</h4>
                    </div>
                </div>
                <p className='p-2 euclidMedium text-start'>{match.Matchtime}</p>
            </Link>
        </>
    )
}
