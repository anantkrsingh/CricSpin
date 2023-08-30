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
    <div className='w-full top-8 font-[Roboto] ov  relative'>
      <div className=' fixed overflow-hidden top-0 w-[358px] md:w-full margin-0 bg z-10 flex self-center text-white justify-center flex-col items-center'>
        <div className='flex justify-between'>

          <div className='p-4 euclidMedium items-center flex flex-row'>
            <p className='text-xl'>C</p>ricSpin
          </div>
          <img src={Logo} onClick={()=>window.location.reload()} className='w-[60px]  ' alt="" />
          <div className='p-4 euclidMedium items-center flex'>
            <p className='text-xl'>L</p>iveLine
          </div>
        </div>
        <div className='w-full  mt-1 h-[1px] bg-gray-300 '></div>
      </div>

      <div className='w-full pl-4  top-8 font-[Roboto] ov  relative'>


        {/* <h4 className=' text-white m-2'>Live Matches</h4> */}
        <Link to="/live" className='w-full justify-between flex'>

          <h6 className=' items-center justify-center text-white m-2'>Live Matches</h6>
          <div className='flex cursor-pointer items-center text-white '>
            See All <AiOutlineDoubleRight className='ml-2' color='white' />
          </div>
        </Link>
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

          <h6 className=' items-center justify-center text-white m-2'>Featured Matches</h6>
          <div className='flex cursor-pointer items-center text-white '>
            See All <AiOutlineDoubleRight className='ml-2' color='white' />
          </div>
        </Link>
        {
          loading ? (
            <p className='text-white p-4'>Loading...</p> // Show a loading message or spinner while fetching data
          ) : (
            upcomingMatches.slice(0, 3).map((item, index) => (
              <UpcominMatch item={item} position={index} key={item.id} />
            ))
          )
        }
        <h6 className='items-center text-white mt-4 mx-4 '>Series</h6>
        <Series />
      </div>
    </div>
  );
}
