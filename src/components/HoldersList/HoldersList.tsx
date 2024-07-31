import Holders from './Holders';
import './Holders.scss'; 

const holdersData = [
  {
    avatar: require('./assets/coobot_23.jpg'),
    username: 'Coobot fund',
    gravity: 1.00,
    profit: '+23.78',
    volume: 66.6,
    price: 2000000
  },
  {
    avatar: require('./assets/yula_g.jpg'),
    username: 'Юлия Geraldina',
    gravity: 1.00,
    profit: '+2.85',
    volume: 8,
    price: 2000000
  },
  {
    avatar: require('./assets/veronika.jpg'),
    username: 'Veronika Alex',
    gravity: 1.00,
    profit: '+2.49',
    volume: 7,
    price: 2000000
  },
  {
    avatar: require('./assets/theclash.jpg'),
    username: 'Pavel | theclash',
    gravity: 1.00,
    profit: '+2.46',
    volume: 6.9,
    price: 2000000
  },
  {
    avatar: require('./assets/rost.jpg'),
    username: 'Rost G.',
    gravity: 1.00,
    profit: '+1.71',
    volume: 4.8,
    price: 2000000
  },
  {
    avatar: require('./assets/pep.png'),
    username: 'fOgTgc',
    gravity: 1.00,
    profit: '+1.68',
    volume: 4.7,
    price: 2000000
  }
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
      <h2>Holders</h2>
      <div className="holders-list">
        {holdersData.map((holdersMap, index) => (
          <Holders key={index} {...holdersMap} />
        ))}
      </div>
    </div>
  );
}

export default HoldersList;