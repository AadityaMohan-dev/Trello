import React from 'react'

function Sidebar(props) {
  return (
    <div className='w-72 h-[87vh] bg-zinc-100  rounded-lg  shadow-lg'>
     <div id="row-1" className='bg-[#2E8B57] rounded-t-lg p-5 w-full relative shadow-lg'>
        <h1 className='text-2xl text-white'>{props.heading}</h1>
     </div>
     <div id="row-2" className='px-4  overflow-y-auto h-[75vh]'>
     <ul>
       <div id="li" className='p-5  border hover:bg-slate-200 rounded-lg  my-3 cursor-pointer'>1</div>
       </ul>
     </div>
     
    </div>
  )
}

export default Sidebar
