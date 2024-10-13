import React from 'react'
import Sidebar from '../sidebar/Sidebar'
function Dashboard() {
  return (
    <div id="row" className='flex py-5 px-5 gap-3 -z-40'>
      <aside className=''>
        <Sidebar heading = "Team Member"/>
      </aside>
      <div className='h-[87vh] rounded-lg  shadow-lg border bg-zinc-100 w-full'>
      <div id="sprints" className='bg-[#2E8B57]    rounded-t-lg p-5  relative shadow-lg'>
        <h1 className='text-2xl text-white'>Sprint Details</h1>
      </div>
      <div id="nav" className='bg-white rounded-lg  px-5 py-2 w-full h-16'></div>
      
      </div>
    </div>
    
  )
}

export default Dashboard
