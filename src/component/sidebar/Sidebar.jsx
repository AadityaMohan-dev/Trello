import React from 'react'

function Sidebar() {
  return (
    <div className='w-72 h-[87vh] bg-zinc-100  rounded-lg  shadow-lg'>
     <div id="row-1" className='bg-[#2E8B57] rounded-t-lg p-5 w-full relative shadow-lg'>
        <h1 className='text-2xl text-white'>Team Members</h1>
     </div>
     <div id="row-2" className='px-4  overflow-y-auto h-[75vh]'>
     <ul>
       <div id="li" className='p-5  border hover:bg-slate-200 rounded-lg  my-3 cursor-pointer'>1</div>
        <div id="li" className='p-5  border hover:bg-slate-200 rounded-lg mt-1 mb-3'>2</div>
        <div id="li" className='p-5  border hover:bg-slate-200 rounded-lg mt-1'>3</div>
        <div id="li" className='p-5  border hover:bg-slate-200 rounded-lg mt-1'>4</div>
        <div id="li" className='p-5  border hover:bg-slate-200 rounded-lg mt-1'>5</div>
        <div id="li" className='p-5  border hover:bg-slate-200 rounded-lg mt-1'>6</div>
        <div id="li" className='p-5  border hover:bg-slate-200 rounded-lg mt-1'>7</div>
        <div id="li" className='p-5  border hover:bg-slate-200 rounded-lg mt-1'>8</div>
        <div id="li" className='p-5  border hover:bg-slate-200 rounded-lg mt-1'>3</div>
        <div id="li" className='p-5  border hover:bg-slate-200 rounded-lg mt-1'>4</div>
        <div id="li" className='p-5  border hover:bg-slate-200 rounded-lg mt-1'>5</div>
        <div id="li" className='p-5  border hover:bg-slate-200 rounded-lg mt-1'>6</div>
        <div id="li" className='p-5  border hover:bg-slate-200 rounded-lg mt-1'>7</div>
        <div id="li" className='p-5  border hover:bg-slate-200 rounded-lg mt-1 mb-3'>8</div>
       </ul>
     </div>
     
    </div>
  )
}

export default Sidebar
