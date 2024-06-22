import { useState } from 'react'
import reactLogo from './assets/merkaba_tv.jpg'
// import reactLogo from './assets/merkaba_insta.jpeg'
import viteLogo from './assets/coobot_23.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://t.me/+JuO8mZMYOnRmN2Ux">
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
          <a href="https://t.me/gasPump_bot/app?startapp=eyJyZWZfdXNlcl9pZCI6NTY1ODY0MzE4LCJ0b2tlbl9hZGRyZXNzIjoiRVFEZGlyd3l5YXNST2tvUnc5bUJCekJkUUhjYUFjOUV5OFpoak1TdXRkdHJmU2M1In0">
              Buy coobot coins to become rich
              {/* Transfer coobots to your wallet */}
              {/* <code>coobot coins</code>  */}
          </a>
        </p>
      </div>
      <p className="read-the-docs">
          Quantum intelligence using neurolinguistic programming
      </p>
    </>
  )
}

export default App
