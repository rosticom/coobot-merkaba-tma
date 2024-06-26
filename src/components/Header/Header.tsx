import { TonConnectButton } from "@tonconnect/ui-react";
import './header.scss';
import { Telegram } from "@twa-dev/types";

declare global {
    interface Window {
      Telegram: Telegram;
    }
  }

export const Header = () => {
    // const userName = Telegram.WebApp.initDataUnsafe.user.id
    window.Telegram.WebApp.HapticFeedback.notificationOccurred("success");

    return <header>
        <div id="wallet-connect-button-wrapper">
            <TonConnectButton /> 
        </div>
        {/* <TonConnectButton /> */}
        {/* <span>My App with React UI</span> */}
        {/* <span>Coobot</span> */}
        {/* <TonConnectButton /> */}
    </header>
}
