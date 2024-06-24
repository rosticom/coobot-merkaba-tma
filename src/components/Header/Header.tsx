import { TonConnectButton } from "@tonconnect/ui-react";
import './header.scss';

export const Header = () => {
    return <header>
        {/* <div id="wallet-connect-button-wrapper"> */}
        {/* <TonConnectButton /> */}
        {/* </div> */}
        {/* <TonConnectButton /> */}
        {/* <span>My App with React UI</span> */}
        <span>Coobot</span>
        <TonConnectButton />
    </header>
}
