import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/navbar/Navbar'

import Dashboard from './component/dashboard/Dashboard'
import ProfilePage from './component/profile-page/ProfilePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="nav" className='z-40'><Navbar/></div>
      <ProfilePage/>
    </>
  )
}

export default App
