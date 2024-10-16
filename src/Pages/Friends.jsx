// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BiCopy } from 'react-icons/bi';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Friends = () => {
  return (
    <div>
        <Navbar />
        <div>
            <div className='flex flex-col items-center mt-8'>
                <div className='flex flex-col items-center'>
                    <h2 className='text-3xl font-bold text-white'>Invite friends </h2>
                    <h2 className='text-3xl font-bold text-white'>and get more $Ducks</h2>
                </div>
                <>
                    <div className='flex items-center  mt-4'>
                        <img
                            src="/duck head.jpeg"
                            className='h-20 rounded-full'
                            alt=""
                        />
                    </div>
                    <p className='font-bold text-gray-400 mt-4'>Tap on the button to invite your friends</p>
                </>
                 {/* Invite friends */}
                        <div className='mt-[19rem] pb-2'>
                            <div className='max-w-[350px]'>
                                <div className='flex flex-row items-center space-x-3 '>
        
                                    <>
                                        <button className=' bg-amber-400 w-[400px] hover:bg-yellow-600'>Invite friends</button>
                                    </>
        
                                    <div>
                                        <BiCopy
                                        size={35}  className='p-2 text-gray-400 bg-black rounded-lg cursor-pointer'/>
                                    </div>
                                </div>
                            </div>
                        </div>
        
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Friends