import React, { useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { ScoreCard } from '../Comps/ScoreCard';
import { Live } from '../Comps/Live';
import { Info } from '../Comps/Info';
import { MatchOdds } from '../Comps/MatchOdds';
import { Helmet } from 'react-helmet';
import { APIURL } from '../CONST';

export const MatchResult = () => {

    const navigateTo = useNavigate();
    const [currentItem, setCurrentItem] = useState("Scorecard");
    const [searchParams, setSearchParams] = useSearchParams();
    const matchID = searchParams.get("matchId");
    const seriesId = searchParams.get("seriesId");
    const name = searchParams.get("name");
    const [loading, setLoading] = useState(true);
    const [myMatch, setMyMatch] = useState(null);
    const [jsonData, setJsonData] = useState(null)

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const response = await fetch(`${APIURL}Result?MatchId=${matchID}`);
            const data = await response.json();
            const matchId = parseInt(matchID);
            const filteredMatches = data.filter(it => it.MatchId === matchId);
            setMyMatch(filteredMatches[0]);
            console.log(filteredMatches[0].jsondata);
            try {
                if (filteredMatches[0].jsondata === "") {
                    filteredMatches[0].jsondata = "{}";
                }
                setJsonData(JSON.parse(filteredMatches[0].jsondata).jsondata);
                const wicketA = jsonData?.wicketA;
                setLoading(false);
                console.log(wicketA);
            } catch (error) {
                setLoading(false);
                console.error('Error parsing JSON:', error.message);
            }

        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    };




    const resultNavs = [
        "Scorecard", "Matchodds"
    ];

    const ResultDiv = () => {
        switch (currentItem) {
            case "Scorecard": return (<ScoreCard matchID={matchID} />);
            case "Live": return (<Live matchID={matchID} />);
            default: return (<MatchOdds matchId={matchID} />);
        }
    };

    return (
        <>
            <Helmet>
                <title>{myMatch?.Title}</title>
                <meta name="robots" content="index, follow"></meta>
                <meta charset="utf-8"></meta>
                <meta name='description' content="Get Live Cricket Scores, Scorecard, Commentary, Match Info and Schedules of All International and Domestic Matches, Serieswise Stats, Records, Analysis and Facts, Trending News and Tweets, Recent ICC Player and Team Rankings" />
                <meta name='keywords' content='Indian Premier Leage, ipl 2022, ipl auction 2022, ipl 2021 schedule, Virat kohli, sreesanth, world cup, cricket, fast live update, cricket live score' />
                <meta property="og:url" content="https://cricspin.live"></meta>
                <meta property="og:type" content="website"></meta>
                <meta property="og:image" content="./assets/logo.png"></meta>
                <meta property="og:site_name" content="CricSpin"></meta>
                <title>CricSpin</title>
                <meta property='og:description' content="Get Live Cricket Scores, Scorecard, Commentary, Match Info and Schedules of All International and Domestic Matches, Serieswise Stats, Records, Analysis and Facts, Trending News and Tweets, Recent ICC Player and Team Rankings" />
                <meta name="twitter:title" content="https://cricspin.live" />
                <meta name="twitter:description" content="Get Live Cricket Scores, Scorecard, Commentary, Match Info and Schedules of All International and Domestic Matches, Serieswise Stats, Records, Analysis and Facts, Trending News and Tweets, Recent ICC Player and Team Rankings" />
                <meta name="twitter:image" content="./assets/logo.png" />
                <meta property="og:title" content={myMatch?.Title}></meta>
            </Helmet>

            <div className="max-w-[375px] p-2  flex left-[50%]  m-auto overflow-hidden">
                <div className="flex z-0 h-screen p-4 bg-gray-200  flex-col w-[375px] m-0 fixed md:left-0  md:w-[100vw] transition-all duration-300 ease-in-out overflow-y-auto">
                    <div className="">
                        <p className="text-sm rounded-xl p-4 bg-blue-500 text-slate-200 flex items-center">
                            <BsArrowLeft className='m-2' onClick={() => navigateTo(-1)} size={28} />
                            {name}
                        </p>
                    </div>
                    <div className='w-full bg-gray-100 self-center items-center justify-between mt-4 mb-2 px-4 flex flex-row '>
                        {resultNavs.map((item) => {
                            const selected = currentItem === item;
                            return (
                                <div onClick={() => { setCurrentItem(item) }} className={selected ? 'self-center cursor-pointer text-orange-800 font-bold' : 'text-gray-800 cursor-pointer'} key={item}>
                                    {item}
                                </div>
                            );
                        })}
                    </div>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <ResultDiv />
                    )}
                </div>
            </div>
        </>
    );
};

