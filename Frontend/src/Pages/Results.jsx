import React, { useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { ScoreCard } from '../Comps/ScoreCard';
import { Live } from '../Comps/Live';
import { Info } from '../Comps/Info';

export const Results = () => {
  const navigateTo = useNavigate();
  const [currentItem, setCurrentItem] = useState("Scorecard");
  const [searchParams, setSearchParams] = useSearchParams();
  const matchID = searchParams.get("matchId");
  const seriesId = searchParams.get("seriesId");
  const [loading, setLoading] = useState(true);
  const [myMatch, setMyMatch] = useState(null);
  const [jsonData, setJsonData] = useState(null)

  useEffect(() => {
    fetchData();
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
    "Info", "Live", "Scorecard", "Matchodds"
  ];

  const ResultDiv = () => {
    switch (currentItem) {
      case "Scorecard": return (<ScoreCard matchID={matchID} />);
      case "Live": return (<Live matchID={matchID} />);
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
              <p >{jsonData?.wicketB}</p>
            </div>}

          <div className='w-full bg-gray-100 self-center items-center justify-between mt-4 mb-2 px-4 flex flex-row '>
            {resultNavs.map((item) => {
              const selected = currentItem === item;
              return (
                <div onClick={() => setCurrentItem(item)} className={selected ? 'self-center cursor-pointer text-orange-800 font-bold' : 'text-gray-800 cursor-pointer'} key={item}>
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

