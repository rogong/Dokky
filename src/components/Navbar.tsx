import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { TbChevronDown } from "react-icons/tb";
import { TbDotsVertical } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className='bg-slate-800 text-white p-4 '>
        <div className='flex flex-row items-center justify-between'>


            {/* Left */}
            <div className='flex flex-row items-center space-x-12'>
                <div>
                    <AiOutlineClose size={30} className='text-2xl font-bold'/>
                </div>
                <div className='flex flex-row items-center space-x-3'>
                    <h2 className='text-3xl font-bold'>Duck</h2>
                    <img src="/Duck.jpeg"
                         alt=""
                        className='h-8'
                    />
                </div>
            </div>



            {/* Right */}
            <div className='flex flex-row items-center space-x-14'>
                <TbChevronDown size={30} className='text-2xl font-bold'/>
                <TbDotsVertical size={30} className='text-2xl font-bold'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar