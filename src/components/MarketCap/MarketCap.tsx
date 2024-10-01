/* eslint-disable react-hooks/exhaustive-deps */
// import { useState, useEffect } from 'react';
// import axios from 'axios';
import './MarketCap.scss';

const MarketCap = () => {
  // const [data, setData] = useState(null);
  // const botToken = import.meta.env.VITE_API_KEY;

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
    // try {
      // const response = await axios.get(`https://api.telegram.org/bot${botToken}/getMyCommands`);
      // setData(JSON.parse(response.data.result[0]?.description || '{}'));
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const saveData = async (newData: any) => {
  //   try {
  //     await axios.post(`https://api.telegram.org/bot${botToken}/setMyCommands`, {
  //       commands: [{ command: 'data', description: JSON.stringify(newData) }]
  //     });
  //     setData(newData);
  //   } catch (error) {
  //     console.error('Error saving data:', error);
  //   }
  // };

  return (
    <div>
      {/* <h2>{data ? 'Capital ⋅ ' + JSON.stringify(data): 'Capital ⋅ $COO'}</h2> */}
      {/* 98M 1st august 70/2 = 35*/} 
      {/* 129.2M 1st september 35/2 = 17.5*/}
      {/* 288.3M 1st october 17.5/2 = 8.75*/}
      <h2 className="capitalization">{'$COO ⋅ 288.3M'} 
        {/* <div className='plus_cap'>+31.2</div> */}
        <div className='plus_cap'>+159.1</div>
      </h2> 
      {/* {data ? <p>Saved data: {JSON.stringify(data)}</p> : <p>Loading...</p>} */}
      {/* <button onClick={() => saveData({ market_cap: '$3,666.69' })}>Save New Data</button> */}
    </div>
  );
};

export default MarketCap;