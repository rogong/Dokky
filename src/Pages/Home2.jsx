// eslint-disable-next-line no-unused-vars
import React from 'react';
import { data1 } from '../Data';
import { BiCopy, BiErrorAlt, BiStar, BiTone } from 'react-icons/bi';
import { BsTelegram } from 'react-icons/bs';
import { LuWallet } from 'react-icons/lu';
import { PiPlus } from 'react-icons/pi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



const Home2 = () => {
  return (
    <div>
        <Navbar />
        {/* Duck home hero bg-wallpapper */}
        <div>
            <img src="/Duck wallpaper.jpeg" 
            alt=""
            className='w-full'
             />
        </div>



        {/* Duck Page Address container*/}
        <div className='flex flex-row justify-center items-center mt-[-50px]'>
            <div className='bg-slate-800 max-w-[500px] px-10 py-5 rounded-lg'>
            
                <div className='space-y-4'>
                    <div className='flex flex-row items-center space-x-2'>
                        <img
                            src="/duck head.jpeg"
                            alt=""
                            className='h-6'
                        />
                        <div>
                            <h2 className='text-2xl font-bold text-white'>18,660 $Ducks</h2>
                            <p className='text-gray-400 m-0 font-medium'>Tap here to view Telegram age</p>
                        </div>
                    </div>
                    
                    {/* Adress input */}
                    <div className='max-w-[350px]'>
                        <div className='flex flex-row items-center space-x-3 '>
                            <div className=' flex items-center border-2  border-black bg-black hover:box-content rounded-lg p-3 py-2 '>
                                <LuWallet size={25}  className='text-white cursor-pointer'/>
                                <input className='w-full text-gray-600 pl-5 bg-transparent outline-none' type="text"
                                placeholder='uqddu...ycbckgf'/>
                            </div>
                            <div>
                                <BiCopy
                                size={35}  className='p-2 text-gray-400 bg-black rounded-lg cursor-pointer'/>
                            </div>
                        </div>
                    </div>

                    {/* Get more Duck*/}
                    <div className='bg-amber-400 max-w-[308px] cursor-pointer rounded-lg'>
                        <div className='flex flex-row justify-center items-center space-x-1'>
                            <span>
                                <PiPlus size={23} className='' />
                            </span>
                            <p className='text-[19px] font-bold'>Get more $Ducks</p>
                        </div>
                    </div> 
                    {/* Ton rewards */}
                    <div className='flex flex-row items-center justify-between max-w-[310px]'>
                        <p className='font-bold text-white'>Ton Reward:</p>
                        <div className='flex flex-row items-center space-x-1'>
                            <span>
                                <img
                                    src="/Tonkeeper.jpeg"
                                    className='h-6'
                                    alt=""
                                />
                            </span>
                            <span className='text-white'>0</span>
                            <button className='font-bold bg-slate-600 hover:text-gray-200'>Claim</button>
                        </div>
                    </div>
            
                </div>
            
            </div>
        </div>



        {/* special mission */}
        <div className='bg-gray-900 mx-4 rounded-lg pt-2 pb-2 mt-4'>
            <div className='flex flex-row items-center space-x-1 mx-4'>
                <BiStar className='text-white'/>
                <h2 className='text-2xl text-white font-bold'>Special mission</h2>
            </div>

            {/* Each rewards */}
            <div>

                <div className='bg-slate-800 flex flex-row items-center justify-between mt-4 mx-4 px-2 py-2 rounded-md sm-w-[20.3rem]'>
                    <div className='flex flex-row items-center space-x-1'>
                        <BsTelegram  className='text-white'/>
                        <div>
                            <p className='text-white font-semibold'>Put Duck in your Telegrame name! </p>
                            <div className='flex flex-row items-center space-x-2'>
                                <span className='text-white text-xs'><span className='text-gray-400 text-xs'>Reward: </span>+5,000</span>
                                <div className='flex flex-row items-center space-x-1'>
                                    <img
                                        src="/duck head.jpeg"
                                        className='h-2'
                                        alt=""
                                    />
                                    <span className='text-white text-sm'>0.1</span>
                                    <BiTone className='text-white text-sm'/>
                                    <BiErrorAlt className='text-white text-sm'/>
                                </div>
                            </div>
                    
                        </div>
                        
                    </div>
                    <button className='font-bold bg-amber-400 border-none'>Go</button>
                </div>

                {/*  */}


                
                <div className='bg-slate-800 flex flex-row items-center justify-between mt-4 mx-4 px-2 py-2 rounded-md sm-w-[20.3rem]'>
                    <div className='flex flex-row items-center space-x-1'>
                        <BsTelegram  className='text-white'/>
                        <div>
                            <p className='text-white font-semibold'>Play Lucky Scratch </p>
                            <div className='flex flex-row items-center space-x-2'>
                                <span className='text-white text-xs'><span className='text-gray-400 text-xs'>Reward: </span>+10,000</span>
                                <div className='flex flex-row items-center space-x-1'>
                                    <img
                                        src="/duck head.jpeg"
                                        className='h-2'
                                        alt=""
                                    />
                                    <span className='text-white text-sm'>0.1</span>
                                    <BiTone className='text-white text-sm'/>
                                    <BiErrorAlt className='text-white text-sm'/>
                                </div>
                            </div>
                    
                        </div>
                        
                    </div>
                    <button className='font-bold bg-amber-400'>Check</button>
                </div>

                {/*  */}


                <div className='bg-slate-800 flex flex-row items-center justify-between mt-4 mx-4 px-2 py-2 rounded-md sm-w-[20.3rem]'>
                    <div className='flex flex-row items-center space-x-1'>
                        <BsTelegram  className='text-white'/>
                        <div>
                            <p className='text-white font-semibold'>Play Lucky Number </p>
                            <div className='flex flex-row items-center space-x-2'>
                                <span className='text-white text-xs'><span className='text-gray-400 text-xs'>Reward: </span>+20,000</span>
                                <div className='flex flex-row items-center space-x-1'>
                                    <img
                                        src="/duck head.jpeg"
                                        className='h-2'
                                        alt=""
                                    />
                                    <span className='text-white text-sm'>0.1</span>
                                    <BiTone className='text-white text-sm'/>
                                    <BiErrorAlt className='text-white text-sm'/>
                                </div>
                            </div>
                    
                        </div>
                        
                    </div>
                    <button className='font-bold bg-amber-400'>Check</button>
                </div>

                {/*  */}


            </div>
        </div>



        
            {/* continue here */}
            <div>
                <div className='m-0 mx-4 mt-4 pt-2 bg-zinc-900 rounded-lg'>
                    <div className='flex flex-row justify-between mx-4'>
                        {/* left  */}
                        <h2 className='text-white'>Listing Wallet</h2>
                        {/* right */}
                        <h2 className='text-white'>History</h2>
                    </div>
                    {/* Data1*/}
                    <div className='grid grid-cols-3 items-center mt-7'>
                        {data1.map((item, index)=>(
                            <div key={index} className='flex flex-col items-center'>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className='h-24 rounded-lg'
                                />
                                <div className='space-x-1 font-semibold text-sm'>
                                    <span className='text-slate-500 '>{item.span}</span>
                                    <span>{item.Number}</span>
                                </div>
                            </div>
                        ))}
                
                    </div>

                    <div>
                        <ul className=' mt-8 space-y-1 px-4 text-gray-400 mb-2'>
                            <li>. Tap "0.2 TON to GO" to unlock your first spot</li>
                            <li>. Each spot gives you $Ducks, but spots 2,5 and 6 come with bonus $TON of 0.6,1.2, and 1.2, respectively.</li>
                            <li>. if you land on a spot that's already unlocked, you'll only receive the $DUCKS tied to that spot</li>
                            <li>. The Listing Wallets resets once all 6 spots are unlocked</li>
                          
                        </ul>

                        <div className='flex flex-row-reverse'>
                            <span className='text-zinc-400'>Rewards: <span className='ml-0 text-slate-200 font-semibold'>10,000</span></span>
                        </div>

                        {/* /// */}
                        <div className='bg-amber-400 w-full py-2 cursor-pointer rounded-lg mt-4'>
                        <div className='flex flex-row justify-center items-center space-x-1'>
                           
                            <p className='text-[22px] font-bold'>0.2 TON to Go</p>
                        </div>
                    </div> 

                    {/* End//// */}
                                       
                        
                    </div>
                </div>


               {/* Rewards/////// */}
                <div className='bg-gray-900 mx-4 rounded-lg pt-2 pb-2 mt-4'>
                     <h2 className='text-1xl text-white font-semibold ml-4'>Your Rewards</h2>

                        <>
                            
                            <div className='py-1 px-4 mb-1 mt-2'>
                                <div className='bg-slate-800 px-6 py-4 rounded-md'>
                                    <div className='flex flex-row items-center justify-between'>
                                    <div className='flex flex-row items-center space-x-2'>
                                        <img
                                        src="/duck head.jpeg"
                                        className='h-8 rounded-full'
                                        alt=""
                                        />
                                        
                                        <h2 className='text-[1.2rem] text-gray-500 font-bold'>Ducks</h2>
                                        
                                        
                                    </div>


                                    {/*Total coin */}
                                    <span className='text-[1.2rem] font-medium'>18,660 Ducks</span>
                                    </div>
                                </div>
                            </div>
                            {/*  */}


                             {/* ////////// */}
                             <div className='py-1 px-4 mb-1 mt-2'>
                                <div className='bg-slate-800 px-6 py-4 rounded-md'>
                                    <div className='flex flex-row items-center justify-between'>
                                    <div className='flex flex-row items-center space-x-2'>
                                        <img
                                        src="/duck head.jpeg"
                                        className='h-8 rounded-full'
                                        alt=""
                                        />
                                        
                                        <h2 className='text-[1.2rem] text-gray-500 font-bold'>Ducks</h2>
                                        
                                        
                                    </div>


                                    {/*Total coin */}
                                    <span className='text-[1.2rem] font-medium'>18,660 Ducks</span>
                                    </div>
                                </div>
                            </div>
                            {/*  */}


                             {/* ////////// */}
                             <div className='py-1 px-4 mb-1 mt-2'>
                                <div className='bg-slate-800 px-6 py-4 rounded-md'>
                                    <div className='flex flex-row items-center justify-between'>
                                    <div className='flex flex-row items-center space-x-2'>
                                        <img
                                        src="/duck head.jpeg"
                                        className='h-8 rounded-full'
                                        alt=""
                                        />
                                        
                                        <h2 className='text-[1.2rem] text-gray-500 font-bold'>Ducks</h2>
                                        
                                        
                                    </div>


                                    {/*Total coin */}
                                    <span className='text-[1.2rem] font-medium'>18,660 Ducks</span>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                        </>

                    </div>

            </div>
            {/*  */}
        <Footer />   
    </div>
  )
}

export default Home2;