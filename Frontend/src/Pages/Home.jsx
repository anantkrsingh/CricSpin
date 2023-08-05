import React, { useState, useEffect } from 'react';
import { use, cache } from 'react';
import { UpcominMatch } from '../Comps/UpcominMatch';
import { LiveMatches } from '../Comps/LiveMatches';
import Logo from '../assets/logo.png';
import { FinishedMatches } from '../Comps/FinishedMatches';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Home() {
  const [upcomingMatches, setUpcomingMatches] = useState([]);
  const [liveMatches, setLiveMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const upcomingResponse = await fetch("http://api.cricspin.live/UpcomingMatches");
      const upcomingData = await upcomingResponse.json();
      console.log(upcomingData.AllMatch);
      setUpcomingMatches(upcomingData.AllMatch);

      const liveResponse = await fetch("http://api.cricspin.live/LiveLine");
      const liveData = await liveResponse.json();
      setLiveMatches(liveData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  return (
    <div className='w-full top-8 font-[Roboto]  relative'>
      <div className='w-full flex self-center text-white justify-center items-center'>
        <div className='p-4' >Cricspin</div>
        <img src={Logo} className='w-[60px]  ' alt="" />
        <div className='p-4 font-bold euclidMedium'>
          LiveLine
        </div>
      </div>
      <div className='w-full h-[1px] bg-gray-300 mt-4 mb-4'></div>
      <h4 className='text-2xl text-white m-2'>Live Matches</h4>
      {
        loading ? (
          <p>Loading...</p> // Show a loading message or spinner while fetching data
        ) : (
          <Carousel autoPlay interval={"5000"} transitionTime={"5000"} showStatus={false} showIndicators={false}>
            {liveMatches.map((item) => (
              <LiveMatches match={item} key={item.id} />
            ))}
          </Carousel>
        )
      }
      <h4 className='text-2xl text-white m-2'>Upcoming Matches</h4>
      {
        loading ? (
          <p>Loading...</p> // Show a loading message or spinner while fetching data
        ) : (
          upcomingMatches.map((item) => (
            <UpcominMatch item={item} key={item.id} />
          ))
        )
      }
    </div>
  );
}
