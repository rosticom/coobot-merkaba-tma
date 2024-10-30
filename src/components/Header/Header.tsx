import { TonConnectButton } from "@tonconnect/ui-react";
import './header.scss';
import { useEffect, useState } from 'react';
import { telegramWebAppMock } from '../../test/telegramWebAppMock';
import { TelegramWebApp } from '../../telegramTypes';

interface UserInfo {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  photo_url?: string;
}

export const Header = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    let tg: TelegramWebApp;
      if (process.env.NODE_ENV === 'development') {
        tg = telegramWebAppMock.WebApp;
      } else if (window.Telegram) {
        tg = window.Telegram.WebApp;
      } else {
        console.error('Telegram WebApp is not available');
        return;
      }

      tg.ready();
    
      const user = tg.initDataUnsafe.user;
      setUserInfo(user || null);
  
      console.log('Telegram WebApp object:', tg);
      console.log('User Info:', user);
      console.log("User Picture: ", user?.photo_url);
  }, []);

  if (!userInfo) {
    return <div>Loading user information...</div>;
  }

    return <header>
        <div id="header-row">
            <div id="user-name">
                {userInfo.photo_url && (
                  <img 
                    src={userInfo.photo_url} // только для крупных рекламодателей https://qna.habr.com/q/1354524
                    alt={`${userInfo.first_name}'s avatar`} 
                    // style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '20px' }}
                    style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                  />
                )}
                <div>
                  {userInfo.first_name} {userInfo.last_name || 'Guest'}
                  {/* {userInfo.username && <p>@{userInfo.username}</p>} */}
                </div>
              </div>
              {/* <pre style={{ backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px' }}>
                {JSON.stringify(userInfo, null, 2)}
              </pre> */}
          
            <div id="wallet-connect-button-wrapper">
                <TonConnectButton /> 
            </div>
        </div>
        <h1>Quantum Intelligence Coin Staking</h1>
        {/* <TonConnectButton /> */}
        {/* <span>My App with React UI</span> */}
        {/* <span>Coobot</span> */}
        {/* <TonConnectButton /> */}
    </header>
    
}
