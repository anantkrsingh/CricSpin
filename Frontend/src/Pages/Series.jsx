import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Logo from '../assets/logo.png';

export const Series = () => {
  const navigateTo = useNavigate();

  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.cricspin.live/Series");
      const data = await response.json();
      setSeries(data);
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // Set loading to false if there's an error
    }
  };

  return (
    <div
      className='w-full pb-10 font-[Roboto] p-2 relative'>
      {/* <div className='w-full flex self-center justify-center items-center'>
        <img src={Logo} className='w-[60px]' alt="" />
      </div> */}
      <div className='mb-10'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          series.map((item) => (
            <div onClick={() => navigateTo(`/smatch?seriesId=${item.seriesid}&name=${item.seriesname}`)} className='w-full p-4 cursor-pointer bg-white mt-2 rounded-3xl shadow-xl'>
              <Link
                key={item.seriesid}>
                <Link

                >
                  <div>

                    {item.seriesname}  <br />
                    {item.startdate} - {item.enddate}
                  </div>
                </Link>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>

  );
};
