import React, { useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { LiveMatches } from '../Comps/LiveMatches';
import { FinishedMatches } from '../Comps/FinishedMatches';
import { PointsTable } from '../Comps/PointsTable';

export const SeriesDetails = () => {
  const navigateTo = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("seriesId");
  const name = searchParams.get("name");
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected,setSelected] = useState("FIXTURE");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://api.cricspin.live/SeriesMatches?seriesId=${id}`);
      const data = await response.json();
      setMatches(data);
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // Set loading to false if there's an error
    }
  };

  const MyDiv  = ({match}) =>{
    return(
      selected === "FIXTURE"? <FinishedMatches match={match}></FinishedMatches> : <PointsTable seriesId={id}/>
    )
  }

  return (
    <>
      <div className="max-w-[375px] euclidMedium md:max-w-[400px] bg h-screen left-[50%]  m-auto p-4 overflow-y-auto">
        <div className='flex items-center'>

        <BsArrowLeft className='text-white' onClick={() => navigateTo(-1)} size={28} />
        <div className='ml-2 text-white'>{name}</div>
        </div>
        <div className='w-full  mt-4 flex justify-between euclidMedium '>
          <div onClick={()=>setSelected("FIXTURE")} className={selected === "FIXTURE" ? 'bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-md':"bg-white rounded-md px-4 py-2 cursor-pointer"}>
            FIXTURE
          </div>
          <div onClick={()=>setSelected("POINTS TABLE")} className={selected === "POINTS TABLE" ? "bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-md":"bg-white font-bold rounded-md px-4 py-2 cursor-pointer"}>
            POINTS TABLE
          </div>
        </div>
        {loading ? (
          <p className='mt-4 euclid text-white'>Loading...</p> // Show a loading message or spinner while fetching data
        ) : (
          matches.map((item) => {
            return <MyDiv match={item} />;
          })
        )}
      </div>
    </>
  );
};
