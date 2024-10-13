import React from 'react'

function ProfilePage() {
  return (
    <div>
      <div id="row" className='flex py-5 px-5 gap-3 -z-40'>
      <aside>
      <div className='w-72 h-[87vh] bg-zinc-100  rounded-lg  shadow-lg'>
     <div id="row-1" className='bg-[#2E8B57] rounded-t-lg p-5 w-full relative shadow-lg'>
        <h1 className='text-2xl text-white'>Profile</h1>
     </div>
     <div id="row-2" className='px-4  overflow-y-auto h-[75vh]'>
     //data
     </div>
     </div>
      </aside>
      <div className='h-[87vh] rounded-lg  shadow-lg border bg-zinc-100 w-full'>
      <div id="sprints" className='bg-[#2E8B57]    rounded-t-lg p-5  relative shadow-lg'>
        <h1 className='text-2xl text-white'>Stories Dashboard</h1>
      </div>

      <div id="row-1" className='flex justify-between p-10'>
        <div id="assigned-task" className='bg-white rounded-lg w-80 h-72 shadow-lg text-[#2E8B57] hover:bg-[#2E8B57] hover:text-white'></div>
        <div id="peending-tasks" className='bg-white rounded-lg w-80 h-72 shadow-lg text-[#2E8B57] hover:bg-[#2E8B57] hover:text-white'></div>
        <div id="completed-tasks" className='bg-white rounded-lg w-80 h-72 shadow-lg text-[#2E8B57] hover:bg-[#2E8B57] hover:text-white'></div>
      </div>
      
      </div>
      </div>

        
    </div>
  )
}

export default ProfilePage
