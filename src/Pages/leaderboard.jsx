// eslint-disable-next-line no-unused-vars
import React from 'react';
import { PiPlus } from 'react-icons/pi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Leaderboard = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className='flex justify-center mt-4'>
          <h2 className='text-4xl text-white font-bold'>Duckling Champ</h2>
        </div>
      
          {/* profile Total price */}
        <div className='py-1 px-4 mb-2 mt-6'>
          <div className='bg-slate-800 px-6 py-2 rounded-md'>
            <div className='flex flex-row items-center justify-between'>
              <div className='flex flex-row items-center space-x-2'>
                <img
                src="/duck head.jpeg"
                className='h-6'
                alt=""
                />
                <div className='flex flex-col '>
                  <h2 className='text-1xl text-white font-bold'>Join Digitalabs Discord</h2>
                  <span className='font-bold text-white text-sm'><span className='font-semibold text-gray-400 text-sm'>Reward: </span>+500</span>
                </div>
              </div>
              {/* Profile balance */}
              <span className='text-white font-semibold text-2xl'>#41,345,87</span>
            </div>
          </div>
        </div>
        {/*  */}
        {/* Get more Duck*/}
        <div className='flex justify-center py-1 px-4'>
          <div className='bg-amber-400 cursor-pointer w-full rounded-lg  px-6 py-2'>
            <div className='flex flex-row justify-center items-center space-x-1'>
                <span>
                    <PiPlus size={23} className='' />
                </span>
                <p className='text-[19px] font-bold'>Get more $Ducks</p>
            </div>
          </div>
        </div>
        {/* Holders profile */}
        <div className='mt-6'>
          <div>
            <span className='ml-0 font-medium py-1 px-4'>11,630,034 Holders</span>
            {/* Top friends Total price */}
            <>
            {/* ////////// */}
              <div className='py-1 px-4 mb-1 mt-2'>
                <div className='bg-slate-800 px-6 py-2 rounded-md'>
                  <div className='flex flex-row items-center justify-between'>
                    <div className='flex flex-row items-center space-x-2'>
                      <img
                        src="/duck head.jpeg"
                        className='h-8 rounded-full'
                        alt=""
                      />
                      <div className='flex flex-col '>
                        <h2 className='text-[1.5rem] text-white font-bold'>Sam Makason</h2>
                        <span className=' text-white text-sm font-semibold'>154,546,452 Ducks</span>
                      </div>
                    </div>
                    {/* Profile Rank */}
                    <img
                      src="/Rank1.PNG"
                      className='h-8 rounded-full'
                      alt=""
                    />
                  </div>
                </div>
              </div>
             {/*  */}
              {/* ////////// */}
              <div className='py-1 px-4 mb-1 mt-1'>
                <div className='bg-slate-800 px-6 py-2 rounded-md'>
                  <div className='flex flex-row items-center justify-between'>
                    <div className='flex flex-row items-center space-x-2'>
                      <img
                        src="/duck head.jpeg"
                        className='h-8 rounded-full'
                        alt=""
                      />
                      <div className='flex flex-col '>
                        <h2 className='text-[1.5rem] text-white font-bold'>Mehment</h2>
                        <span className=' text-white text-sm font-semibold'>154,546,452 Ducks</span>
                      </div>
                    </div>
                    {/* Profile Rank */}
                    <img
                      src="/Rank2.PNG"
                      className='h-8 rounded-full'
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/*  */}
              {/* ////////// */}
              <div className='py-1 px-4 mb-1 mt-1'>
                <div className='bg-slate-800 px-6 py-2 rounded-md'>
                  <div className='flex flex-row items-center justify-between'>
                    <div className='flex flex-row items-center space-x-2'>
                      <img
                        src="/duck head.jpeg"
                        className='h-8 rounded-full'
                        alt=""
                      />
                      <div className='flex flex-col '>
                        <h2 className='text-[1.5rem] text-white font-bold'>Choel</h2>
                        <span className=' text-white text-sm font-semibold'>154,546,452 Ducks</span>
                      </div>
                    </div>
                    {/* Profile Rank */}
                    <img
                      src="/Rank3.PNG"
                      className='h-8 rounded-full'
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/*  */}
              {/* ////////// */}
              <div className='py-1 px-4 mb-1 mt-1'>
                <div className='bg-slate-800 px-6 py-2 rounded-md'>
                  <div className='flex flex-row items-center justify-between'>
                    <div className='flex flex-row items-center space-x-2'>
                      <img
                        src="/duck head.jpeg"
                        className='h-8 rounded-full'
                        alt=""
                      />
                      <div className='flex flex-col '>
                        <h2 className='text-[1.5rem] text-white font-bold'>Beboh07</h2>
                        <span className=' text-white text-sm font-semibold'>154,546,452 Ducks</span>
                      </div>
                    </div>
                    {/* Profile Rank */}
                    <img
                      src="/Rank3.PNG"
                      className='h-8 rounded-full'
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/*  */}
              {/* ////////// */}
              <div className='py-1 px-4 mb-1 mt-1'>
                <div className='bg-slate-800 px-6 py-2 rounded-md'>
                  <div className='flex flex-row items-center justify-between'>
                    <div className='flex flex-row items-center space-x-2'>
                      <img
                        src="/duck head.jpeg"
                        className='h-8 rounded-full'
                        alt=""
                      />
                      <div className='flex flex-col '>
                        <h2 className='text-[1.5rem] text-white font-bold'>Stankey</h2>
                        <span className=' text-white text-sm font-semibold'>154,546,452 Ducks</span>
                      </div>
                    </div>
                    {/* Profile Rank */}
                    <img
                      src="/Rank3.PNG"
                      className='h-8 rounded-full'
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/*  */}
              {/* ////////// */}
              <div className='py-1 px-4 mb-1 mt-1'>
                <div className='bg-slate-800 px-6 py-2 rounded-md'>
                  <div className='flex flex-row items-center justify-between'>
                    <div className='flex flex-row items-center space-x-2'>
                      <img
                        src="/duck head.jpeg"
                        className='h-8 rounded-full'
                        alt=""
                      />
                      <div className='flex flex-col '>
                        <h2 className='text-[1.5rem] text-white font-bold'>Mehment</h2>
                        <span className=' text-white text-sm font-semibold'>154,546,452 Ducks</span>
                      </div>
                    </div>
                    {/* Profile Rank */}
                    <img
                      src="/Rank2.PNG"
                      className='h-8 rounded-full'
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/*  */}
              {/* ////////// */}
              <div className='py-1 px-4 mb-1 mt-1'>
                <div className='bg-slate-800 px-6 py-2 rounded-md'>
                  <div className='flex flex-row items-center justify-between'>
                    <div className='flex flex-row items-center space-x-2'>
                      <img
                        src="/duck head.jpeg"
                        className='h-8 rounded-full'
                        alt=""
                      />
                      <div className='flex flex-col '>
                        <h2 className='text-[1.5rem] text-white font-bold'>Mehment</h2>
                        <span className=' text-white text-sm font-semibold'>154,546,452 Ducks</span>
                      </div>
                    </div>
                    {/* Profile Rank */}
                    <img
                      src="/Rank2.PNG"
                      className='h-8 rounded-full'
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/*  */}
              {/* ////////// */}
              <div className='py-1 px-4 mb-1 mt-1'>
                <div className='bg-slate-800 px-6 py-2 rounded-md'>
                  <div className='flex flex-row items-center justify-between'>
                    <div className='flex flex-row items-center space-x-2'>
                      <img
                        src="/duck head.jpeg"
                        className='h-8 rounded-full'
                        alt=""
                      />
                      <div className='flex flex-col '>
                        <h2 className='text-[1.5rem] text-white font-bold'>Mehment</h2>
                        <span className=' text-white text-sm font-semibold'>154,546,452 Ducks</span>
                      </div>
                    </div>
                    {/* Profile Rank */}
                    <img
                      src="/Rank2.PNG"
                      className='h-8 rounded-full'
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/*  */}
      
      
            </>
      
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Leaderboard