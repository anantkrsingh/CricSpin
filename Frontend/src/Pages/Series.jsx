import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

export const Series = () => {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://api.cricspin.live/Series");
      const data = await response.json();
      setSeries(data);
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // Set loading to false if there's an error
    }
  };

  return (
    <div className='w-full pb-10 font-[Roboto] p-2 relative'>
      {/* <div className='w-full flex self-center justify-center items-center'>
        <img src={Logo} className='w-[60px]' alt="" />
      </div> */}
      <div className='mb-10'>
        {loading ? (
          <p>Loading...</p> // Show a loading message or spinner while fetching data
        ) : (
          series.map((item) => (
            <div className='w-full cursor-pointer bg-white mt-2  rounded-3xl shadow-xl p-4' key={item.seriesid}>
              <Link
                to={{
                  pathname: "/smatch",
                  search: `seriesId=${item.seriesid}&name=${item.seriesname}`
                }}
              >
                {item.seriesname}  <br />
                {item.startdate} - {item.enddate}
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
