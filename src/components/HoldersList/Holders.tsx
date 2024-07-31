import './Holders.scss';

function Holders({ // THIS ITEM IS DEFAULT (ITEMS LIST IN HOLDERSLIST.TSX)
  avatar = './../../../../src/assets/coobot_23.jpg',
  username = 'Coobot fund', 
  gravity = 0, 
  profit = '-', 
  volume = 0,
}) {
  return (
    <div className="holders-item">
      <img src={avatar} alt={username} className="avatar" />
      <div className="info">
        {/* <a href={`/${username}`} className="username">{username}</a> */}
        <div className="first_row">
          <div className="username">{username}</div>
          <div className="volume">{volume}M $COO</div>
        </div>
        <div className="second_row">
          <div className="profit">{profit} USDT</div>
          <div className="gravity">{gravity} %</div>
        </div>
        {/* <div className="divider"></div> */}
        {/* <span>{amount} TON</span> */}
        {/* <span>{type} {term}</span>
        <span>{price} $COO</span> */}
      </div>
    </div>
  );
}

export default Holders;