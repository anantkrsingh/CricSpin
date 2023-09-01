import React, { useContext, useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { ScoreCard } from '../Comps/ScoreCard';
import { AiFillCalendar } from 'react-icons/ai'
import { HiLocationMarker } from 'react-icons/hi'
import { Live } from '../Comps/Live';
import { Info } from '../Comps/Info';
import { MatchOdds } from '../Comps/MatchOdds';
import { MyContext } from '../AppContext';
import { faBaseball} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IMAGEURL } from '../CONST';



export const UpcomingResults = () => {
    const navigateTo = useNavigate();
    const [currentItem, setCurrentItem] = useState("Info");
    const [searchParams, setSearchParams] = useSearchParams();
    const position = searchParams.get("position");
    const [loading, setLoading] = useState(true);
    const [myMatch, setMyMatch] = useState(null);
    const { bannerData } = useContext(MyContext)









    useEffect(() => {
        fetchData();

        const interval = setInterval(() => {
            fetchData();
        }, 2000);


        return () => {

            if (interval) {
                clearInterval(interval);
            }
        };
    }, []);
    const fetchData = async () => {
        try {
            const upcomingResponse = await fetch("https://api.cricspin.live/UpcomingMatches");
            const upcomingData = await upcomingResponse.json();
            const matchId = parseInt(position);
            console.log(matchId);
            console.log(upcomingData.AllMatch[0]);
            setMyMatch(upcomingData.AllMatch[matchId]);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }

    };



    const resultNavs = [
        "Info", "Live", "Scorecard", "Matchodds"
    ];

    const ResultDiv = () => {
        switch (currentItem) {
            case "Scorecard": return (<ScoreCard matchID={matchID} />);
            case "Live": return (<Live matchID={matchID} />);
            case "Matchodds": return (<MatchOdds matchId={matchID} />);
            default: return (<Info match={myMatch} />);
        }
    };

    return (
        <>
            <div className="max-w-[375px] flex left-[50%]  overflow-auto  m-auto ">
                <div className="flex relative z-0 overflow-y-scroll p-4 bg-gray-200  flex-col w-[375px] m-0 md:left-0  md:w-[100vw] transition-all duration-300 ease-in-out ">
                    <div className="">
                        <p className="text-sm rounded-xl p-4 bg-blue-500 text-slate-200 flex items-center">
                            <BsArrowLeft onClick={() => navigateTo(-1)} size={28} />
                            <h1 className='font-semibold pl-2'>{myMatch?.MatchType} {myMatch?.TeamA} VS {myMatch?.TeamB}</h1>
                        </p>
                    </div>
                    <div className='flex justify-between items-center  mt-2 overflow-hidden text-black p-2'>
                        <div className='flex items-center'>
                            <span>{myMatch?.TeamA}</span>
                            <img className='rounded-full mr-1 border-4  h-10 w-10 ' src={`${IMAGEURL}${myMatch?.TeamAImage}`} alt="" />
                        </div>
                        <div className='relative justify-center m-2 items-center flex'>

                            <div className=' rounded-lg rotate-[45deg] bg-blue-500 z-1 absolute h-10 w-10
                    justify-center items-center '>

                            </div>
                            <p className=' absolute  text-white text-lg font-bold'>VS</p>
                        </div>
                        <div className='flex items-center'>
                            <img className=' mr-4 rounded-full border-4 h-10 w-10' src={`${IMAGEURL}${myMatch?.TeamBImage}`} alt="" />
                            <span>{myMatch?.TeamB}</span>
                        </div>

                    </div>
                    <div className='rounded-2xl mb-8 bg-white flex flex-col m-2 mt-4  overflow-hidden'>
                        <p className='bg-blue-500 p-2 text-white euclidMedium text-lg'>Match Info </p>

                        <p className=' p-2 '>{myMatch?.Result}</p>
                        <div className='flex items-center p-4'>
                        <FontAwesomeIcon className=' text-black' size='sm' icon={faBaseball} />
                            <p className='ms-2 '>{myMatch?.Title}</p>
                        </div>
                        <div className='flex items-center p-4'>
                            <AiFillCalendar color='black' />
                            <p className='ms-2 '>{myMatch?.Matchtime}</p>
                        </div>

                        <div className='flex items-center px-4'>
                            {myMatch?.Venue && <>
                                <HiLocationMarker color='black' />
                                <p className='ms-2 '>{myMatch?.Venue}</p>
                            </>}

                        </div>

                        <div className='w-full h-[2px] bg-black mt-4'></div>

                        <p className='text-center mb-1 euclidMedium mt-4'>Match Hasn't Started Yet</p>
                        <p className='text-center px-2 text-sm  euclid mb-4'>We'll be live once the toss begins... Stay Tuned!</p>

                    </div>

                    {
                        bannerData && <a className='mb-8 rounded-2xl overflow-hidden' target='_blank' href={bannerData[1].url}>

                            <img src={bannerData[1].image} />
                        </a>
                    }



                </div>
            </div >
        </>
    );
};

