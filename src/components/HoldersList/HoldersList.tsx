import Holders from './Holders';
import './Holders.scss'; 

// august 0,35
// september 0,175

const holdersData = [
  {
    avatar: 'coobot_icon.jpg',
    username: 'QIC FUND',
    gravity: 1.00,
    profit: '42.82',
    volume: 66.6,
    delta: '+3.94'
  },
  {
    avatar: 'coobot_23.jpg',
    username: 'QIC MARKET',
    gravity: 1.00,
    profit: '0.00',
    volume: 179,
    delta: '+0.00'
  },
  {
    avatar: 'rost.jpg',
    username: 'Rost',
    gravity: 1.00,
    profit: '14.15',
    volume: 80.4,
    delta: '+4.76'
  },
  {
    avatar: 'yula_g.jpg',
    username: 'Юлия',
    gravity: 1.00,
    profit: '9.57',
    volume: 40.2,
    delta: '+2.38'
  },
  {
    avatar: 'ksenia3.jpg',
    username: 'Ksenia',
    gravity: 1.00,
    profit: '4.11',
    volume: 27.4,
    delta: '+1.62'
  },
  {
    avatar: 'luchick7.jpg',
    username: 'Elena',
    gravity: 1.00,
    profit: '6.01',
    volume: 21.1,
    delta: '+1.25'
  },
  {
    avatar: 'veronika.jpg',
    username: 'Veronika',
    gravity: 1.00,
    profit: '5.49',
    volume: 14.3,
    delta: '+0.84'
  },
  {
    avatar: 'maria.jpg',
    username: 'Мария',
    gravity: 1.00,
    profit: '1.19',
    volume: 3.3,
    delta: '+0.19'
  },
];

function HoldersList() {
  let overallVolume = 0;
  for (let i = 0; i < holdersData.length; i++) { // OVERALL VOLUME
    if (holdersData[i].username != "QIC MARKET") {
      overallVolume = overallVolume + holdersData[i].volume;
    }
  }
  // console.log("overallVolume: ", overallVolume);
  for (let i = 0; i < holdersData.length; i++) { // GRAVITY
    if (holdersData[i].username != "QIC MARKET") {
      holdersData[i].gravity = parseFloat((holdersData[i].volume / overallVolume * 100).toFixed(2));
    } else {
      holdersData[i].gravity = 100;
    }
    // console.log("gravity: ", holdersData[i].gravity);
  }
  return (
    <div className="holders-list-container">
      <h2>holders - 1 dec 24</h2>
      <div className="holders-list">
        {holdersData.map((holdersMap, index) => (
          <Holders key={index} {...holdersMap} />
        ))}
      </div>
    </div>
  );
}

export default HoldersList;