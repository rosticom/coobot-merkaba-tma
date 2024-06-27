import { TonConnectButton } from "@tonconnect/ui-react";
import './header.scss';
import { Telegram } from "@twa-dev/types";

declare global {
    interface Window {
      Telegram: Telegram;
    }
  }

  import { useEffect, useState } from 'react';

// const TelegramUserInfo = () => {
// }

export const Header = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const tg = window.Telegram.WebApp;

    if (tg) {
      tg.ready();
      const user = tg.initDataUnsafe.user;
      if (user) {
        setUserName(user.first_name + (user.last_name ? ' ' + user.last_name : ''));
      }
    }
  }, []); 
    // const userName = Telegram.WebApp.initDataUnsafe.user.id;
    // const userName = window.Telegram.WebApp.initDataUnsafe.user?.username;
    // window.Telegram.WebApp.HapticFeedback.notificationOccurred("success");
    console.log("user name: ", userName);

    return <header>
        <div id="header-row">
            <div id="user-name">
                {userName || "Guest"}
            </div>
            <div id="wallet-connect-button-wrapper">
                <TonConnectButton /> 
            </div>
        </div>
        {/* <TonConnectButton /> */}
        {/* <span>My App with React UI</span> */}
        {/* <span>Coobot</span> */}
        {/* <TonConnectButton /> */}
    </header>
}
