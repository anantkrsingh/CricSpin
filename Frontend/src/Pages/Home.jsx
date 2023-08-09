import React, { useState, useEffect } from 'react';
import { use, cache } from 'react';
import { UpcominMatch } from '../Comps/UpcominMatch';
import { LiveMatches } from '../Comps/LiveMatches';
import Logo from '../assets/logo.png';
import { FinishedMatches } from '../Comps/FinishedMatches';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../App.css'
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Series } from './Series';


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
        <div className='p-4 euclidMedium' >Cricspin</div>
        <img src={Logo} className='w-[60px]  ' alt="" />
        <div className='p-4 euclidMedium'>
          LiveLine
        </div>
      </div>
      <div className='w-full h-[1px] bg-gray-300 mt-4 mb-4'></div>
      <h4 className=' text-white m-2'>Live Matches</h4>
      {
        loading ? (
          <p className='p-4 text-white'>Loading...</p> 
        ) : (
          <Carousel autoPlay interval={"5000"} transitionTime={"500"} showStatus={false} showIndicators={true}>
            {liveMatches.map((item) => (
              <LiveMatches match={item} key={item.id} />
            ))}
          </Carousel>
        )
      }
      <Link to="/upcoming" className='w-full justify-between flex'>
        
      <h6 className=' items-center justify-center text-white m-2'>Upcoming Matches</h6>
      <div className='flex cursor-pointer items-center text-white '>
        See All <AiOutlineDoubleRight  className='ml-2' color='white'/>
      </div>
      </Link>
      {
        loading ? (
          <p className='text-white p-4'>Loading...</p> // Show a loading message or spinner while fetching data
        ) : (
          upcomingMatches.slice(0,3).map((item) => (
            <UpcominMatch item={item} key={item.id} />
          ))
        )
      }
      <h6 className='items-center text-white mt-4 mx-4 '>Series</h6>
      <Series/>
    </div>
  );
}
