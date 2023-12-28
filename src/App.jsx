import { useState } from 'react'
import reactLogo from './assets/pic.png'
import sun from './assets/sun.svg'
import sundark from './assets/sundark.svg'
import './App.css'

function App() {
  const links = [
    'https://github.com',
    'https://linkedin.com'
  ]
  const [color, setColor] = useState('#FFFFFF');
  const [boxShadow, setBoxShadow] = useState(5);
  const [text, setText] = useState(`Olá! Este é o meu portfolio! Sou um desenvolvedor fullstack
  com foco em tecnologias como HTML, CSS e Javascript.
  Também mexo com tecnologias devops, como AWS, Terraform e
  Azure`);
const [opacity, setOpacity] = useState(1)

  return (
    <div className='container' >
      <section
        className='card'
        style={{boxShadow: `${boxShadow}px ${boxShadow}px 0px 1px ${color}`}}
        onMouseEnter={() => {
          setBoxShadow(12)
        }}
        onMouseLeave={() => {
          setBoxShadow(5)
        }}
      >
        <input type='color' onChange={(e) => setColor(e.target.value)}/>
        <header>
          <img src={reactLogo} alt="" width={150} height={150} className='pfp' />
          <ul>
            <li>
              <h3 className='name'>Julio</h3></li>
            <li> <a
              href="https://www.github.com"
              target='_blank'
            > Github </a></li>
            <li> <a href="https://www.linkedin.com" target='_blank' > Linkedin </a></li>
          </ul>
        </header>
        <section>
          <p className='unselectable main-content' onMouseEnter={()=>{
            setOpacity(0)
            setTimeout(() => {
              setOpacity(1)
              setText(' Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ad aspernatur minus commodi. Ad quae, aliquid sapiente nisi doloremque maiores molestiae omnis dolor enim minus? Deleniti mollitia adipisci quibusdam deserunt.')
            }, 200)
            
          }} onMouseLeave={() => {
            
            setOpacity(0)
            setTimeout(() => {
              setOpacity(1)
              setText(`Olá! Este é o meu portfolio! Sou um desenvolvedor fullstack
              com foco em tecnologias como HTML, CSS e Javascript.
              Também mexo com tecnologias devops, como AWS, Terraform e
              Azure`)
            }, 200)
            
          }} style={{opacity: opacity, transition: '0.2s all'}}>
            {text}</p>
        </section>
      </section>
    </div>
  )
}

export default App
