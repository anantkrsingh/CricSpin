import React, { useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { LiveMatches } from '../Comps/LiveMatches';
import { FinishedMatches } from '../Comps/FinishedMatches';

export const SeriesDetails = () => {
  const navigateTo = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("seriesId");
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://64.227.148.23:8001/SeriesMatches?seriesId=${id}`);
      const data = await response.json();
      setMatches(data);
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // Set loading to false if there's an error
    }
  };

  return (
    <>
      <div className="max-w-[375px] md:max-w-[400px] bg-main h-screen left-[50%]  m-auto p-4 overflow-y-auto">
        <BsArrowLeft className='text-white' onClick={() => navigateTo(-1)} size={28} />
        {loading ? (
          <p>Loading...</p> // Show a loading message or spinner while fetching data
        ) : (
          matches.map((item) => {
            return <FinishedMatches match={item} />;
          })
        )}
      </div>
    </>
  );
};
