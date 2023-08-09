import React from 'react'
import { Link } from 'react-router-dom'

export const FinishedMatches = ({ match }) => {
    let jsonData = null;
    try {
        if (match.jsondata === "") {
            match.jsondata = "{}";
        }
        const jsondata = match.jsondata.replaceAll("/", "");
        jsonData = JSON.parse(jsondata)?.jsondata;
    } catch (error) {
        console.error('Error parsing JSON:', error.message);
    }
    const item = match
    console.log(item);
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
                search: `matchId=${item.MatchId}&seriesId=${match.seriesid}`
            }} className='w-auto bg-white mt-6 p-2 ps-4 rounded-xl justify-between flex flex-col'>
                <div className='text-black text-lg euclid'>
                    {item.Title}
                </div>
                <div className='flex w-full justify-between'>
                    <div className='flex flex-col'>
                        <div className='flex flex-row items-center'>
                            <img src={item.ImgeURL+item.TeamAImage} className='rounded-full border-4  w-[48px] h-[48px]' alt="" />
                            <h4 className=' euclid font-bold ms-4 text-xl'>{item.TeamA}</h4>
                        </div>
                        <div className='flex flex-row items-center'>
                            <img src={item.ImgeURL + item.TeamBImage} className='rounded-full border-4  w-[48px] h-[48px]' alt="" />
                            <h4 className='euclid font-bold ms-4 text-xl'>{item.TeamB}</h4>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='w-[1px] h-full bg-gray-400   m-2'>

                        </div>
                        <div className='ms-4 me-4 font-[Rajdhani] font-bold text-[#a50000]'>
                            {item.isfinished === 1? <div>Finished</div> : <div></div>}
                        </div>
                    </div>
                </div>
                <div className='text-[#9d6003] euclidMedium text-lg mt-2'>
                    {item.Result}
                </div>
            </Link>
        </>
    )
}
