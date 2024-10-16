// eslint-disable-next-line no-unused-vars
import React from 'react';
import {  BiErrorCircle, BiTone } from 'react-icons/bi';
import { TbFriends } from 'react-icons/tb';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const Missions = () => {
  return (
    <div>
      <Navbar />
      <div className='mt-2'>
        <div className='px-4'>
          {/* Button top list */}
          <div className='ml-0 bg-gray-700 px-6 rounded-md'>
            <div className='flex flex-row items-center text-white justify-between scroll-px-64'>
              <button className='bg-slate-700 hover:bg-neutral-500 border-none'>DuckCoop</button>
              <button className='bg-slate-700 hover:bg-neutral-500 border-none'>Partner</button>
              <button className='bg-slate-700 hover:bg-neutral-500 border-none'>Exchange</button>
            </div>
          </div>
          {/* Tone claim */}
          <div className='bg-gray-700 rounded-md mt-4 pb-4'>
            <div className='flex flex-row items-center justify-between py-1 px-4'>
              <div className='flex flex-row items-center space-x-1 '>
                <h3 className='text-gray-400'>Your total TON reward</h3>
                <BiErrorCircle className='text-gray-400' />
              </div>
              <div className='flex flex-row items-center space-x-1'>
                <BiTone   className='text-gray-400'/>
                <span  className='text-gray-400'>0</span>
              </div>
            </div>
            <div className='flex justify-center mt-3'>
              <button className='bg-gray-500 font-bold w-[430px] hover:bg-slate-300'>Claim</button>
            </div>
          </div>
          {/* Task Box */}
          <div>
            <div className='bg-gray-700 rounded-md mt-4 pt-4 pb-4'>
              <div className='flex flex-row items-center justify-between py-1 px-4 mb-4'>
                {/* Head */}
                <div className='flex flex-row items-center space-x-2'>
                  <img
                    src="/w-photo.PNG"
                    className='h-8'
                    alt=""
                  />
                  <div>
                    <h2 className='text-1xl text-white font-bold'>Digitalabs</h2>
                    <div className='flex flex-row items-center text-white space-x-1'>
                      <TbFriends/>
                      <span className='font-semibold'>139.88K</span>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className='flex flex-row items-center space-x-2'>
                  <img
                    src="/star-photo.PNG"
                    alt=""
                  />
                  <img
                    src="/Boses-photo.PNG"
                    alt=""
                  />
                  <BiErrorCircle />
                </div>
              </div>
      
              {/* Each Task */}
              <div className='py-1 px-4 mb-2'>
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
                    {/* button */}
                    <button className='font-bold bg-amber-400 border-none'>Go</button>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className='py-1 px-4 mb-2'>
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
                    {/* button */}
                    <button className='font-bold bg-amber-400 border-none'>Go</button>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className='py-1 px-4 mb-2'>
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
                    {/* button */}
                    <button className='font-bold bg-amber-400 border-none'>Go</button>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className='py-1 px-4 mb-2'>
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
                    {/* button */}
                    <button className='font-bold bg-amber-400 border-none'>Go</button>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className='py-1 px-4 mb-2'>
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
                    {/* button */}
                    <button className='font-bold bg-amber-400 border-none'>Go</button>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className='py-1 px-4 mb-2'>
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
                    {/* button */}
                    <button className='font-bold bg-amber-400 border-none'>Go</button>
                  </div>
                </div>
              </div>
              {/*  */}
      
            </div>
          </div>
          {/* ovarall task box */}
          {/* 2nd Task Box */}
          <div>
            <div className='bg-gray-700 rounded-md mt-4 pt-4 pb-4'>
              <div className='flex flex-row items-center justify-between py-1 px-4 mb-4'>
                {/* Head */}
                <div className='flex flex-row items-center space-x-2'>
                  <img
                    src="/w-photo.PNG"
                    className='h-8'
                    alt=""
                  />
                  <div>
                    <h2 className='text-1xl text-white font-bold'>Digitalabs</h2>
                    <div className='flex flex-row items-center text-white space-x-1'>
                      <TbFriends/>
                      <span className='font-semibold'>139.88K</span>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className='flex flex-row items-center space-x-2'>
                  <img
                    src="/star-photo.PNG"
                    alt=""
                  />
                  <img
                    src="/Boses-photo.PNG"
                    alt=""
                  />
                  <BiErrorCircle />
                </div>
              </div>
              {/* Each Task */}
              <div className='py-1 px-4 mb-2'>
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
                    {/* button */}
                    <button className='font-bold bg-amber-400 border-none'>Go</button>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className='py-1 px-4 mb-2'>
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
                    {/* button */}
                    <button className='font-bold bg-amber-400 border-none'>Go</button>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className='py-1 px-4 mb-2'>
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
                    {/* button */}
                    <button className='font-bold bg-amber-400 border-none'>Go</button>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className='py-1 px-4 mb-2'>
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
                    {/* button */}
                    <button className='font-bold bg-amber-400 border-none'>Go</button>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className='py-1 px-4 mb-2'>
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
                    {/* button */}
                    <button className='font-bold bg-amber-400 border-none'>Go</button>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className='py-1 px-4 mb-2'>
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
                    {/* button */}
                    <button className='font-bold bg-amber-400 border-none'>Go</button>
                  </div>
                </div>
              </div>
              {/*  */}
      
            </div>
          </div>
          {/*2nd ovarall task box */}
        </div>
      
      </div>
      <Footer />
    </div>
  )
}
