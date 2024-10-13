import React, { useState } from 'react';
import icon from '../../assets/trello.png'
import user from '../../assets/user.png'
function Navbar() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(prev => !prev);
    };

    return (
        <nav className='flex justify-between p-5 border-b-4 shadow-lg'>
            <img src={icon} alt="Logo" width={30} className='cursor-pointer'/>
            <div id="profile-btn" className='rounded-full w-10 h-5 ' onClick={handleClick}>
                <img src={user} alt="Profile" className='cover cursor-pointer' width={30} />
                {clicked && (
                <div className='bg-white shadow-lg rounded mt-2 float-end'>
                    <ul className='p-2 z-50'>
                        <li className='py-3 px-10 rounded-lg hover:bg-gray-200 cursor-pointer'>Profile</li>
                        <li className='py-3 px-10 rounded-lg hover:bg-gray-200 cursor-pointer'>Settings</li>
                        <li className='py-3 px-10 rounded-lg hover:bg-gray-200 cursor-pointer'>Logout</li>
                    </ul>
                </div>
            )}
            </div>
            
        </nav>
    );
}

export default Navbar;
