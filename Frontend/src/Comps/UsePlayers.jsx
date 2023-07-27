import { useState, useEffect } from 'react';

const usePlayers = (matchID) => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch("https://api.cricspin.live/Players/?MatchId=" + matchID, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
        });
        const data = await response.json();
        setPlayers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching players:", error);
        setLoading(false);
      }
    };

    fetchPlayers();
  }, [matchID]);

  return { players, loading };
};

export default usePlayers;
