import Holders from './Holders';
import './Holders.scss'; 

// august 0,35
// september 0,175

const holdersData = [
  {
    avatar: 'coobot_23.jpg',
    username: 'Coobot fund',
    gravity: 1.00,
    profit: '23.78',
    volume: 66.6,
    delta: '+9.02'
  },
  {
    avatar: 'luchick7.jpg',
    username: 'Loochick7',
    gravity: 1.00,
    profit: '< 1 MONTH',
    volume: 21.1,
    delta: '+2.85'
  },
  {
    avatar: 'rost.jpg',
    username: 'Rost G.',
    gravity: 1.00,
    profit: '1.71',
    volume: 15,
    delta: '+2.03'
  },
  {
    avatar: 'yula_g.jpg',
    username: 'Юлия Geraldina',
    gravity: 1.00,
    profit: '2.85',
    volume: 8,
    delta: '+1.08'
  },
  {
    avatar: 'veronika.jpg',
    username: 'Veronika Alex',
    gravity: 1.00,
    profit: '2.49',
    volume: 7,
    delta: '+0.94'
  },
  {
    avatar: 'pep.png',
    username: 'igorvav',
    gravity: 1.00,
    profit: '< 1 MONTH',
    volume: 6.8,
    delta: '+0.92'
  },
  {
    avatar: 'pep.png',
    username: 'fOgTgc',
    gravity: 1.00,
    profit: '1.68',
    volume: 4.7,
    delta: '+0.63'
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