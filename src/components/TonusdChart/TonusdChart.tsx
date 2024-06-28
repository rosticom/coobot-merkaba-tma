import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TonUsdChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'TON/USD',
        data: [],
        // borderColor: 'rgb(75, 192, 192)',
        borderColor: 'rgb(255, 255, 255)',
        tension: 0.1
      }
    ]
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.coingecko.com/api/v3/coins/the-open-network/market_chart?vs_currency=usd&days=30'
      );
      
      const prices = result.data.prices;
      const labels = prices.map((price: unknown[]) => moment(price[0]).format('DD/MM/YYYY'));
      const data = prices.map((price: unknown[]) => price[1]);

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
        position: 'top',
      },
      title: {
        display: false,
        text: 'TON/USD Exchange Rate (Last 30 Days)',
      },
    },
  };

  return <Line options={options} data={chartData} />;
};

export default TonUsdChart;