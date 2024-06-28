import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title);

const TonUsdChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'TON/USD',
        data: [],
        // borderColor: 'rgb(75, 192, 192)',
        // borderColor: 'rgb(255, 255, 255)',
        // borderColor: 'rgb(102,170,238)',
        borderColor: 'rgb(83, 91, 242)',
        tension: 0.1
      }
    ]
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.coingecko.com/api/v3/coins/the-open-network/market_chart?vs_currency=usd&days=120'
      );

      const prices = result.data.prices;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const labels = prices.map((price: any[]) => moment(price[0]).format('DD/MM/YYYY'));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data = prices.map((price: any[]) => price[1]);

      setChartData({
        labels: labels,
        datasets: [
          {
            ...chartData.datasets[0],
            data: data
          }
        ]
      });
    };

    fetchData();
  }, [chartData.datasets]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        // position: 'top',
      },
      title: {
        display: true,
        text: 'TON/USD Exchange Rate (Last 120 Days)',
      },
    },
  };

  return <Line options={options} data={chartData} />;
};

export default TonUsdChart;