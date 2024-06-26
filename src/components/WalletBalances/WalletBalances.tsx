// import React, { useContext, useState, useEffect } from 'react';
// import { TelegramBotContext } from 'react-telegram-bot';

// const WalletBalances = () => {
//   const { userId } = useContext(TelegramBotContext);
//   const [balances, setBalances] = useState({});

//   useEffect(() => {
//     // Получить балансы всех валют
//     const getBalances = async () => {
//       const currencies = ['TON', /* ... другие валюты */];
//       const walletBalances = {};
//       for (const currency of currencies) {
//         const balance = await TelegramBot.getWalletInfo(userId, currency);
//         walletBalances[currency] = balance;
//       }
//       setBalances(walletBalances);
//     };

//     getBalances();
//   }, [userId]);

//   if (!Object.keys(balances).length) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Балансы валют:</h2>
//       {Object.entries(balances).map(([currency, balance]) => (
//         <div key={currency}>
//           {currency}: {balance}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default WalletBalances;