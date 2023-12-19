import { useState } from 'react'
import reactLogo from './assets/pic.png'
import sun from './assets/sun.svg'
import sundark from './assets/sundark.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const links = [
    'https://github.com',
    'https://linkedin.com'
  ]
  return (
    <div className='container' >
      <section
        className='card'
      >
        <header>
          <img src={reactLogo} alt="" width={150} height={150} className='pfp' />
          <ul>
            <li>
              <h3 className='name'>Seu nome</h3></li>
            <li> <a
              href="https://www.github.com"
              target='_blank'
            > Github </a></li>
            <li> <a href="https://www.linkedin.com" target='_blank' > Linkedin </a></li>
          </ul>
        </header>
        <section>
          <p className='unselectable'>
            Olá! Este é o meu portfolio! Sou um desenvolvedor fullstack
            com foco em tecnologias como HTML, CSS e Javascript.
            Também mexo com tecnologias devops, como AWS, Terraform e
            Azure
          </p>
          <ul>
            <li>

            </li>
          </ul>
        </section>
      </section>
    </div>
  )
}

export default App
