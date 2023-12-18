import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <section className='card'>
        <header>
          <img src={reactLogo} alt="" />
          <h3>Seu nome</h3>
        </header>
      </section>
    </div>
  )
}

export default App
