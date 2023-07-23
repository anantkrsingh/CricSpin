import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Nav } from './Comps/Nav'
import { Dash } from './Pages/Dash'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='max-w-[375px] flex left-[50%]  m-auto overflow-hidden '>
        <Dash />
        <Nav />
      </div>
    </>
  )
}

export default App
