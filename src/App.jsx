import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Button from './components/Button'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    alert('Button clicked!')
  }

  return (
    <>
      <div>
        <Header title="Simple Components"/>
        <main style={{padding: '1rem'}}>
          <Button label= "Click" onClick={handleClick}/>
          <Card
          title= "Title"
          description="This is my card component"/>
        </main>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
