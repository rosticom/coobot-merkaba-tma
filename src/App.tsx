// tg.ThemeParams.bg_color
// tg.ThemeParams.text_color
// tg.ThemeParams.hint_color
// tg.ThemeParams.link_color
// tg.ThemeParams.button_color
// tg.ThemeParams.button_text_colorString

// Но будьте осторожны, цвета - необязательный параметр, поэтому стоит проверять, есть ли они, перед тем как использовать.

// Также имеется обработчик события изменения цветовой схемы:

// Telegram.WebApp.onEvent(themeChanged, function(){});

// Web App User
// И еще информация о пользователе, мы можем разобрать строку tg.initData или использовать tg.initDataUnsafe объект:

// tg.initDataUnsafe.user.id // уникальный идентификатор пользователя
// tg.initDataUnsafe.user.isBot // бот ли пользователь (true/false)
// tg.initDataUnsafe.user.first_name // имя пользователя
// tg.initDataUnsafe.user.last_name // "фамилия" пользователя
// tg.initDataUnsafe.user.username // username пользователя
// tg.initDataUnsafe.user.language_code // код языка пользователя

// аватарка в TWA доступна только для крупных рекламодателей https://qna.habr.com/q/1354524

// import './App.scss';
// import './trackers';
import { THEME, TonConnectUIProvider } from "@tonconnect/ui-react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
// import { TxForm } from "./components/TxForm/TxForm";

// import { useState } from 'react'
// import reactLogo from './assets/merkaba_tv.jpg'
// import buyCooImage from './assets/buy_coo_image_1.png'
import chatLogo from './assets/coobot_23.jpg'
import coobotLogo from './assets/148_148.png'
import coobotAndroidLogo from './assets/232_232.png'
import gasPumbLogo from './assets/gaspump.jpg'
import './App.css'
import TonUsdChart from "./components/TonusdChart/TonusdChart";
import MarketCap from "./components/MarketCap/MarketCap";
import HoldersList from "./components/HoldersList/HoldersList";

function App() {
  // const [count, setCount] = useState(0)
  const currentTheme = THEME.DARK;
  const openLink = (url: string | URL | undefined) => {
    window.open(url, '_blank');
  };
  const textColor = currentTheme === THEME.DARK ? 'white' : 'black';
  return (
    <TonConnectUIProvider
      manifestUrl="https://rosticom.github.io/coobot-merkaba-tma/tonconnect-manifest.json"
      uiPreferences={{ theme: THEME.DARK }}
      walletsListConfiguration={{
        includeWallets: [
          {
            appName: "safepalwallet",
            name: "SafePal",
            imageUrl: "https://s.pvcliping.com/web/public_image/SafePal_x288.png",
            tondns: "",
            aboutUrl: "https://www.safepal.com",
            universalLink: "https://link.safepal.io/ton-connect",
            deepLink: "safepal-tc://",
            jsBridgeKey: "safepalwallet",
            bridgeUrl: "https://ton-bridge.safepal.com/tonbridge/v1/bridge",
            platforms: ["ios", "android", "chrome", "firefox"]
          },
          {
            appName: "bitgetTonWallet",
            name: "Bitget Wallet",
            imageUrl: "https://raw.githubusercontent.com/bitkeepwallet/download/main/logo/png/bitget%20wallet_logo_iOS.png",
            aboutUrl: "https://web3.bitget.com",
            deepLink: "bitkeep://",
            jsBridgeKey: "bitgetTonWallet",
            bridgeUrl: "https://bridge.tonapi.io/bridge",
            platforms: ["ios", "android", "chrome"],
            universalLink: "https://bkcode.vip/ton-connect"
          },
          {
            appName: "tonwallet",
            name: "TON Wallet",
            imageUrl: "https://wallet.ton.org/assets/ui/qr-logo.png",
            aboutUrl: "https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd",
            universalLink: "https://wallet.ton.org/ton-connect",
            jsBridgeKey: "tonwallet",
            bridgeUrl: "https://bridge.tonapi.io/bridge",
            platforms: ["chrome", "android"]
          }
        ]
      }}
      actionsConfiguration={{
        twaReturnUrl: 'https://rosticom.github.io/coobot-merkaba-tma/'
      }}
    >
      <div className="app">
        <Header />
        {/* <TxForm /> */}
        {/* <TonProofDemo /> */}

        {/* <br /> */}

        <MarketCap />
       
        {/* <p className="read-the-docs"> */}
            {/* dividend payout August 1st, 2024 */}
            {/* buying or selling on the crypto market? doesn't matter with quantum technology! */}
        {/* </p> */}
        <TonUsdChart />
        <br />
        <div className = "row_center">
          <a href="https://t.me/+JuO8mZMYOnRmN2Ux">
            <img src={chatLogo} className="logo" alt="Coobot chat" />
            <div className="logo_text" color={textColor}>Telegram</div>
          </a>
          <a className="logo_group" onClick={() => openLink('https://play.google.com/store/apps/details?id=com.rosticom.qantb&hl=ru')}>
            <img src={coobotAndroidLogo} className="logo" alt="Coobot app" />
            <div className="logo_text" color={textColor}>Android</div>
          </a>
          <a className="logo_group" onClick={() => openLink('https://coo.topme.be')}>
            <img src={coobotLogo} className="logo" alt="Coobot app" />
            <div className="logo_text" color={textColor}>iOS WEB</div>
          </a>
          <a href="https://t.me/gasPump_bot/app?startapp=eyJyZWZfdXNlcl9pZCI6NTY1ODY0MzE4LCJ0b2tlbl9hZGRyZXNzIjoiRVFEZGlyd3l5YXNST2tvUnc5bUJCekJkUUhjYUFjOUV5OFpoak1TdXRkdHJmU2M1In0">
            <img src={gasPumbLogo} className="logo" alt="Coobot app" />
            <div className="logo_text" color={textColor}>$COO</div>
          </a>
          <a className="logo_group" href="https://t.me/gasPump_bot/app?startapp=eyJyZWZfdXNlcl9pZCI6NTY1ODY0MzE4LCJ0b2tlbl9hZGRyZXNzIjoiRVFDWWdid3JvUDZJRmFUS0lOMENoSmpzVnpxdDJxSGdhT1BhdGJMdS1wTWRRWVhCIn0">
            <img src={gasPumbLogo} className="logo" alt="Coobot app" />
            <div className="logo_text" color={textColor}>$COOS</div>
          </a>
 
        </div>
        <HoldersList />
        <div className="card">
          {/* <button onClick={() => setCount((count) => count + 1)}>
            earn coins for your wallet: {count} money transfer
          </button> */}
          {/* <p> 
            <a href="https://t.me/gasPump_bot/app?startapp=eyJyZWZfdXNlcl9pZCI6NTY1ODY0MzE4LCJ0b2tlbl9hZGRyZXNzIjoiRVFEZGlyd3l5YXNST2tvUnc5bUJCekJkUUhjYUFjOUV5OFpoak1TdXRkdHJmU2M1In0">
              Buy $COO and chill out until November 1st, 2024. */}
              {/* Please, buy some $COO to be rich */}
              {/* Transfer coobots to your wallet */}
              {/* <code>coobot coins</code>  */}
            {/* </a>
          </p> */}
        </div>
        {/* <a href="https://t.me/gasPump_bot/app?startapp=eyJyZWZfdXNlcl9pZCI6NTY1ODY0MzE4LCJ0b2tlbl9hZGRyZXNzIjoiRVFEZGlyd3l5YXNST2tvUnc5bUJCekJkUUhjYUFjOUV5OFpoak1TdXRkdHJmU2M1In0">
            <img src={buyCooImage} className="buy_logo" alt="Coobot app" />
        </a> */}
        
        <Footer />
      </div>
    </TonConnectUIProvider>
  )
}

export default App
