import './Holders.scss';

function Holders({ // ITEMS LIST IN HOLDERSLIST.TSX
  avatar = './images/coobot_23.jpg',
  username = '$COO STAKING', 
  gravity = 0, 
  profit = '-', 
  volume = 0,
  delta = '+0.00'
}) {
  // const imageUrl = process.env.PUBLIC_URL + avatar;
  
  return (
    <div className="holders-item">
      <img src={avatar} alt={username} className="avatar" />
      <div className="info">
        {/* <a href={`/${username}`} className="username">{username}</a> */}
        <div className="first_row">
          <div className="username">{username}</div>
          <div className="volume">{volume}M ${username == 'QIC MARKET' ? "COOS" : "COO"}</div>
        </div>
        <div className="second_row">
          <div className="left_side">
            <div className="profit">{profit} {profit != "< 1 MONTH" ? "USDT" : ""}</div>
            <div className="delta">{delta}</div>
          </div>
          <div className="gravity">{gravity}%</div>
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