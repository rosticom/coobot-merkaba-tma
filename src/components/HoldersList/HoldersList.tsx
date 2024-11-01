import Holders from './Holders';
import './Holders.scss'; 

// august 0,35
// september 0,175

const holdersData = [
  {
    avatar: 'coobot_icon.jpg',
    username: 'QIC FUND',
    gravity: 1.00,
    profit: '34.88',
    volume: 66.6,
    delta: '+7.94'
  },
  {
    avatar: 'coobot_23.jpg',
    username: 'QIC MARKET',
    gravity: 1.00,
    profit: '0.00',
    volume: 0.00,
    delta: '+0.00'
  },
  {
    avatar: 'rost.jpg',
    username: 'Rost',
    gravity: 1.00,
    profit: '4.78',
    volume: 78.6,
    delta: '+9.37'
  },
  {
    avatar: 'yula_g.jpg',
    username: 'Юлия',
    gravity: 1.00,
    profit: '4.78',
    volume: 40.2,
    delta: '+4.79'
  },
  {
    avatar: 'ksenija.jpg',
    username: 'Ksenija',
    gravity: 1.00,
    profit: '0.85',
    volume: 27.4,
    delta: '+3.26'
  },
  {
    avatar: 'luchick7.jpg',
    username: 'Elena',
    gravity: 1.00,
    profit: '3.5',
    volume: 21.1,
    delta: '+2.51'
  },
  {
    avatar: 'veronika.jpg',
    username: 'Veronika',
    gravity: 1.00,
    profit: '3.79',
    volume: 14.3,
    delta: '+1.70'
  },
  {
    avatar: 'maria.jpg',
    username: 'Мария',
    gravity: 1.00,
    profit: '0.20',
    volume: 3.3,
    delta: '+0.99'
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
      <h2>holders - 1 nov 24</h2>
      <div className="holders-list">
        {holdersData.map((holdersMap, index) => (
          <Holders key={index} {...holdersMap} />
        ))}
      </div>
    </div>
  );
}

export default HoldersList;