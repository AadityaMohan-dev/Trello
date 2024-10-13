import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/navbar/Navbar'
import Sidebar from './component/sidebar/Sidebar'
import Dashboard from './component/dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="nav" className='z-40'><Navbar/></div>
      <div id="row" className='flex py-5 px-5 gap-3 -z-40'>
      <aside className=''>
        <Sidebar/>
      </aside>
      <Dashboard/>
      </div>
    </>
  )
}

export default App
