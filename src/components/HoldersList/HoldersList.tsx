import Holders from './Holders';
import './Holders.scss'; 

// august 0,35
// september 0,175

const holdersData = [
  {
    avatar: 'coobot_icon.jpg',
    username: 'QIC FUND',
    gravity: 1.00,
    profit: '32.8',
    volume: 66.6,
    delta: '+2.08'
  },
  {
    avatar: 'coobot_23.jpg',
    username: 'QIC MARKET',
    gravity: 1.00,
    profit: '0.00',
    volume: 0.00,
    delta: '+0'
  },
  {
    avatar: 'pep.png',
    username: 'Noel',
    gravity: 1.00,
    profit: '< 1 MONTH',
    volume: 34.3,
    delta: '+1.07'
  },
  {
    avatar: 'rost.jpg',
    username: 'Rost',
    gravity: 1.00,
    profit: '3.74',
    volume: 33.3,
    delta: '+1.04'
  },
  {
    avatar: 'xenija.jpg',
    username: 'Ksenia',
    gravity: 1.00,
    profit: '< 1 MONTH',
    volume: 27.4,
    delta: '+0.85'
  },
  {
    avatar: 'yula_g.jpg',
    username: 'Юлия',
    gravity: 1.00,
    profit: '3.93',
    volume: 27.3,
    delta: '+0.85'
  },
  {
    avatar: 'lambham.jpg',
    username: 'Cripto',
    gravity: 1.00,
    profit: '< 1 MONTH',
    volume: 26.8,
    delta: '+0.83'
  },
  {
    avatar: 'luchick7.jpg',
    username: 'Elena',
    gravity: 1.00,
    profit: '2.85',
    volume: 21.1,
    delta: '+0.65'
  },
  {
    avatar: 'veronika.jpg',
    username: 'Veronika',
    gravity: 1.00,
    profit: '3.43',
    volume: 11.8,
    delta: '+0.36'
  },
  {
    avatar: 'pep.png',
    username: 'Norbert',
    gravity: 1.00,
    profit: '< 1 MONTH',
    volume: 7.7,
    delta: '+0.24'
  },
  {
    avatar: 'pep.png',
    username: 'Kakformula',
    gravity: 1.00,
    profit: '< 1 MONTH',
    volume: 6.9,
    delta: '+0.21'
  },
  {
    avatar: 'sonic.jpg',
    username: 'Sonic',
    gravity: 1.00,
    profit: '< 1 MONTH',
    volume: 3.5,
    delta: '+0.30'
  },
  {
    avatar: 'pep.png',
    username: 'Etienne',
    gravity: 1.00,
    profit: '< 1 MONTH',
    volume: 3.2,
    delta: '+0.28'
  },
  {
    avatar: 'georgiy.jpg',
    username: 'Георгий',
    gravity: 1.00,
    profit: '< 1 MONTH',
    volume: 3.1,
    delta: '+0.27'
  },
  {
    avatar: 'pep.png',
    username: 'Felyang',
    gravity: 1.00,
    profit: '< 1 MONTH',
    volume: 2.3,
    delta: '+0.20'
  },
  {
    avatar: 'maria.jpg',
    username: 'Мария',
    gravity: 1.00,
    profit: '< 1 MONTH',
    volume: 2.3,
    delta: '+0.20'
  },
  {
    avatar: 'alex.jpg',
    username: 'Alex',
    gravity: 1.00,
    profit: '< 1 MONTH',
    volume: 2.1,
    delta: '+0.18'
  },
];

function HoldersList() {
  let overallVolume = 0;
  for (let i = 0; i < holdersData.length; i++) { // OVERALL VOLUME
    overallVolume = overallVolume + holdersData[i].volume;
  }
  // console.log("overallVolume: ", overallVolume);
  for (let i = 0; i < holdersData.length; i++) { // GRAVITY
    holdersData[i].gravity = parseFloat((holdersData[i].volume / overallVolume * 100).toFixed(2));
    // console.log("gravity: ", holdersData[i].gravity);
  }
  return (
    <div className="holders-list-container">
      <h2>holders</h2>
      <div className="holders-list">
        {holdersData.map((holdersMap, index) => (
          <Holders key={index} {...holdersMap} />
        ))}
      </div>
    </div>
  );
}

export default HoldersList;