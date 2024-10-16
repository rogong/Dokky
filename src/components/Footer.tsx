import React from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { SiTransmission } from "react-icons/si";
import { FaUserFriends } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { LuWallet } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { Missions } from '../Pages/mission';


const Footer = () => {
  return (
   <div className='sticky bottom-0 mt-auto'>
        <div className='bg-slate-800 text-gray-500 p-4'>
            <div className='flex flex-row items-center justify-between'>
                {/* icon 1 */}
                <Link to='/Home2'>
                <AiOutlineHome   size={30} className='text-2xl font-bold hover:text-yellow-500'/>
                </Link>
           
                {/* icon 2 */}
                <Link className=' underline-offset-4' to='/Missions'>
                <SiTransmission  size={30} className='text-2xl font-bold hover:text-yellow-500'/>
                </Link>         
                
                {/* icon 3 */}
                <Link to='/Friends'>
                <FaUserFriends  size={30} className='text-2xl font-bold hover:text-yellow-500'/>
                </Link>
                  
                {/* icon 4 */}
                <Link to='/Leaderboard'>
                <MdLeaderboard   size={30} className='text-2xl font-bold hover:text-yellow-500'/>
                </Link>    
                
                {/* icon 5 */}
                <Link to='/Wallet'>
                <LuWallet  size={30} className='text-2xl font-bold hover:text-yellow-500'/>
                </Link>
                
                    
                
            </div>
        </div>
    </div>
  )
}

export default Footer