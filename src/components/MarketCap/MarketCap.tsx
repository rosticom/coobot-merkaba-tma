/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import axios from 'axios';

const MarketCap = () => {
  const [data, setData] = useState(null);
  const botToken = import.meta.env.VITE_API_KEY;
  console.log("botToken: ", botToken);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.telegram.org/bot${botToken}/getMyCommands`);
      setData(JSON.parse(response.data.result[0]?.description || '{}'));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const saveData = async (newData: any) => {
    try {
      await axios.post(`https://api.telegram.org/bot${botToken}/setMyCommands`, {
        commands: [{ command: 'data', description: JSON.stringify(newData) }]
      });
      setData(newData);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <div>
      <h2>Max ⋅ {data ? JSON.stringify(data): '$3,666.69'}</h2>
      {/* {data ? <p>Saved data: {JSON.stringify(data)}</p> : <p>Loading...</p>} */}
      <button onClick={() => saveData({ market_cap: '$3,666.69' })}>Save New Data</button>
    </div>
  );
};

export default MarketCap;