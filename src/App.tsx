import { useState } from 'react'
import reactLogo from './assets/merkaba_tv.jpg'
import viteLogo from './assets/coobot_23.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://t.me/+YNom6FHqdnozM2Nh">
            <img src={viteLogo} className="logo" alt="Coobot chat" />
        </a>
        <a href="https://t.me/merkabatv">
            <img src={reactLogo} className="logo" alt="Merkaba TV" />
        </a>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>Coobot + Merkaba</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          coins for your wallet: {count}
        </button>
        <p>
          Transfer coobots to your wallet
          {/* <code>coobot coins</code>  */}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Coobot and Merkaba logos to learn more
      </p>
    </>
  )
}

export default App
