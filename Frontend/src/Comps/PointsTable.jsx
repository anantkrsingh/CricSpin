import React, { useEffect, useState } from 'react'
import { PointsList } from './PointsList';
import { APIURL } from '../CONST';

export const PointsTable = ({ seriesId }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(`${APIURL}Pointstable?seriesId=${seriesId}`);
      const data = await response.json();
      setData(data.pointsst);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  return (
    <table className="w-full euclid p-2 text-sm">
      <thead>
        <tr>
          <th className="text-start p-2">Teams</th>
          <th className="text-right p-2">P</th>
          <th className="text-right p-2">W</th>
          <th className="text-right p-2">L</th>
          <th className="text-right p-2">NR</th>
          <th className="text-right p-2">PTS</th>
          <th className="text-right p-2">NRR</th>
        </tr>
      </thead>
      <tbody>
        {
          loading ? <div>Loading ...</div> : (data.map((player) => (
            <PointsList item={player} />
          )))
        }

      </tbody>
    </table>

  )
}
