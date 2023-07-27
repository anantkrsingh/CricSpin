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

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://64.227.148.23:8001/SeriesMatches?seriesId=${seriesId}`);
      const data = await response.json();
      const matchId = parseInt(matchID);
      const filteredMatches = data.filter(it => it.MatchId === matchId);
      setMyMatch(filteredMatches[0]);
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // Set loading to false if there's an error
    }
  };

  const resultNavs = [
    "Info", "Live", "Scorecard"
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
      <div className="max-w-[375px] flex left-[50%]  m-auto overflow-hidden">
        <div className="flex z-0 h-screen p-4  flex-col w-[375px]  bg-main pl-4 pr-4 m-0 fixed md:left-0  md:w-[100vw] transition-all duration-300 ease-in-out overflow-y-auto">
          <div className="mb-8">
            <p className="text-sm text-slate-200 flex items-center">
              <BsArrowLeft onClick={() => navigateTo(-1)} size={28} />
              <h1 className='font-semibold text-lg pl-2'>{myMatch?.TeamA} VS {myMatch?.TeamB} {myMatch?.Title}</h1>
            </p>
          </div>
          <div className='flex justify-between text-blue-500 bg-blue-50 p-4 rounded-3xl shadow-2xl '>
            <div>
              <img className='rounded-full border-4  h-[48px] ' src={`${myMatch?.ImgeURL}${myMatch?.TeamAImage}`} alt="" />
              <span>{myMatch?.TeamA}</span>
            </div>
            <div>
              <img className='rounded-full border-4  h-[48px] ' src={`${myMatch?.ImgeURL}${myMatch?.TeamBImage}`} alt="" />
              <span>{myMatch?.TeamB}</span>
            </div>
          </div>
          <div className='text-white w-full m-2'>
            <p className='text-center' >{myMatch?.Result}</p>
          </div>
          <div className='w-full self-center items-center justify-between p-4 flex flex-row '>
            {resultNavs.map((item) => {
              const selected = currentItem === item;
              return (
                <div onClick={() => setCurrentItem(item)} className={selected ? 'text-white self-center cursor-pointer bg-slate-600 p-2 rounded-lg' : 'text-white cursor-pointer'} key={item}>
                  {item}
                </div>
              );
            })}
          </div>
          {loading ? (
            <p>Loading...</p> // Show a loading message or spinner while fetching data
          ) : (
            <ResultDiv />
          )}
        </div>
      </div>
    </>
  );
};

