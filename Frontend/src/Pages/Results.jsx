import React, { useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { ScoreCard } from '../Comps/ScoreCard';
import { Live } from '../Comps/Live';
import { Info } from '../Comps/Info';
import { MatchOdds } from '../Comps/MatchOdds';
import Lottie from 'react-lottie-player';
import out from '../assets/json/out.json';
import four from '../assets/json/four.json';
import zero from '../assets/json/zero.json';
import one from '../assets/json/one.json';
import two from '../assets/json/two.json';
import three from '../assets/json/three.json';
import deadBall from '../assets/json/dead_ball.json';
import over from '../assets/json/over.json';
import wicket from '../assets/json/wicket.json';
import wide from '../assets/json/wide.json';
import thid_umpire from '../assets/json/third_umpire.json';
import six from '../assets/json/six.json';
import loadingLottie from '../assets/json/loading.json';

import CircleOverlay from '../Comps/CircleOverlay';

export const Results = () => {
  const navigateTo = useNavigate();
  const [currentItem, setCurrentItem] = useState("Info");
  const [searchParams, setSearchParams] = useSearchParams();
  const matchID = searchParams.get("matchId");
  const seriesId = searchParams.get("seriesId");
  const [loading, setLoading] = useState(true);
  const [myMatch, setMyMatch] = useState(null);
  const [jsonData, setJsonData] = useState(null)
  const [animation, setAnimation] = useState("loadingLottie");

  

  const animationMap = {
    out,
    four,
    zero,
    one,
    two,
    three,
    deadBall,
    over,
    wicket,
    wide,
    thid_umpire,
    six,
    loadingLottie,
  };


  const handleAnimation = (strf) => {
    let animationName = 'loading';
    switch (strf) {
      case '4-4-4':
        animationName = 'four';
        break;
      case '0':
        animationName = 'zero';
        break;
      case '1':
        animationName = 'one';
        break;
      case '2':
        animationName = 'two';
        break;
      case '3':
        animationName = 'three';
        break;
      case 'Ball':
        animationName = 'dead_ball';
        break;
      case 'Over':
        animationName = 'over';
        break;
      case 'Wicket':
        animationName = 'wicket';
        break;
      case 'Wide Ball':
        animationName = 'wide';
        break;
      case 'Third Umpire':
        animationName = 'third_umpire';
        break;
      case '6-6-6':
        animationName = 'six';
        break;
      default:
        animationName = 'loadingLottie';
        break;
    }
    setAnimation(animationName);
  };

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
      const response = await fetch(`http://api.cricspin.live/SeriesMatches?seriesId=${seriesId}`);
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
        console.log(jsonData?.wicketA);
        
      } catch (error) {
        console.error('Error parsing JSON:', error.message);
      }
      handleAnimation(jsonData.score)
      console.log(jsonData.score);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
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
      <div className="max-w-[375px] p-2  flex left-[50%]  m-auto overflow-hidden">
        <div className="flex z-0 h-screen p-4 bg-gray-200  flex-col w-[375px] m-0 fixed md:left-0  md:w-[100vw] transition-all duration-300 ease-in-out overflow-y-auto">
          <div className="">
            <p className="text-sm rounded-xl p-4 bg-blue-500 text-slate-200 flex items-center">
              <BsArrowLeft onClick={() => navigateTo(-1)} size={28} />
              <h1 className='font-semibold text-lg pl-2'>{myMatch?.TeamA} VS {myMatch?.TeamB} {myMatch?.Title}</h1>
            </p>
          </div>
          <div className='flex justify-between text-black p-4'>
            <div className='flex items-center'>
              <img className='rounded-full mr-4 border-4  h-[48px] ' src={`${myMatch?.ImgeURL}${myMatch?.TeamAImage}`} alt="" />
              <span>{myMatch?.TeamA}</span>
            </div>
            <div className='flex items-center'>
              <img className=' mr-4 rounded-full border-4  h-[48px] ' src={`${myMatch?.ImgeURL}${myMatch?.TeamBImage}`} alt="" />
              <span>{myMatch?.TeamB}</span>
            </div>
          </div>

          {loading ? <div className='text-black'>Loading</div> :
            <div className='flex items-center rounded-xl text-black bg-white shadow-lg p-2  mx-1 justify-between'>
              <div className='flex flex-col'>
                <p>{jsonData?.wicketA}</p>
                <p className='text-gray-700'> Overs : {jsonData?.oversA}</p>
              </div>

              <div className='relative '>
                {
                  animationMap[animation] && animation != "loadingLottie" && <Lottie 
                    loop
                    play
                    animationData={animationMap[animation]}
                    style={{ width: 160, height: 103 ,position:"absolute",zIndex:"1"}}
                  />
                }

                <CircleOverlay  style={{ position: 'absolute', zIndex: 2 }} />
              </div>

              <p >  {jsonData?.wicketB}</p>
            </div>
          }
          <div className="w-full bg-gray-100 self-center items-center justify-between mt-4 mb-2 px-4 flex flex-row">
            {resultNavs.map((item) => (
              <div
                onClick={() => setCurrentItem(item)}
                className={currentItem === item ? 'self-center cursor-pointer text-orange-800 font-bold' : 'text-gray-800 cursor-pointer'}
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            currentItem === "Scorecard" ? (
              <ScoreCard matchID={matchID} />
            ) : currentItem === "Live" ? (
              <Live matchID={matchID} />
            ) : currentItem === "Matchodds" ? (
              <MatchOdds matchId={matchID} />
            ) : (
              <Info match={myMatch} />
            ))
          }
        </div>
      </div>
    </>
  );
};

