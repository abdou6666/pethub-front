import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faUser, faGear, faHouse } from '@fortawesome/free-solid-svg-icons'
import logo from '../../public/assets/logo.png';
const Navbar = () => {
    return (
        <header className='h-14 bg-emerald-700 flex items-center justify-between w-screen'>
            <div>
                <a href="" className='cursor-pointer'>
                    <img src={logo} alt="logo" className='w-12 ml-5' />
                </a>
            </div>
            <div>
                <input type="text" placeholder='search' className='w-80 rounded-md p-1  appearance-none text-green-800 
                   focus:outline-none focus:ring focus:ring-green-900
                ' />
            </div>
            <nav className='w-1/3 ml-8'>
                <ul className='flex justify-around'>
                    <li className='cursor-pointer'>
                        <FontAwesomeIcon icon={faHouse} color="white" className='hover:text-green-900' />

                    </li>
                    <li className='cursor-pointer'>
                        <FontAwesomeIcon icon={faUser} color="white" className='hover:text-green-900' />
                    </li>
                    <li className='cursor-pointer'>
                        <FontAwesomeIcon icon={faMessage} color="white" className='hover:text-green-900' />
                    </li>
                    <li className='cursor-pointer'>
                        <FontAwesomeIcon icon={faGear} color="white" className='hover:text-green-900' />
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar