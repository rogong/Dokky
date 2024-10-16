// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Wallet = () => {
  return (
    <div>
      <Navbar />
      <div>
        {/* Button top list */}
        <div >
          <div className='ml-0 bg-gray-700 px-6 rounded-md'>
            <div className='flex flex-row items-center text-white justify-between scroll-px-64'>
              <button className='bg-slate-700 hover:bg-neutral-500 border-none'>Funding</button>
              <button className='bg-slate-700 hover:bg-neutral-500 border-none'>Trading</button>
              <button className='bg-slate-700 hover:bg-neutral-500 border-none'>On-Chain</button>
            </div>
          </div>
        </div>


        {/* Avarta */}

        <div className='flex flex-col items-center justify-center'>
          <div>
            <img
              src="/Avarta.PNG"
              className=''
              alt=""
            />
          </div>

          <div className='flex flex-col items-center'>
            <p className='ml-0 font-semibold text-lg text-slate-400'>This Wallet manages assets,transfer</p>
            <p className='ml-0 font-semibold text-lg text-slate-400'>  investment, and holds sponsorship funds</p>
          </div>
        </div>



        {/* Different coins */}

        <div>
          <span className='text-2xl ml-0 font-medium py-1 px-4'>Assets</span>

          <>
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
                    
                    <h2 className='text-[1.2rem] text-white font-bold'>Ducks</h2>
                     
                    
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
                    
                    <h2 className='text-[1.2rem] text-white font-bold'>DAPP</h2>
                     
                    
                  </div>


                  {/*Total coin */}
                  <span className='text-[1.2rem] font-medium'>0 DAPP</span>
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
                    
                    <h2 className='text-[1.2rem] text-white font-bold'>SATOCH</h2>
                     
                    
                  </div>


                  {/*Total coin */}
                  <span className='text-[1.2rem] font-medium'>0 SATOCH</span>
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
                    
                    <h2 className='text-[1.2rem] text-white font-bold'>TON</h2>
                     
                    
                  </div>


                  {/*Total coin */}
                  <span className='text-[1.2rem] font-medium'>0 TON</span>
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
                    
                    <h2 className='text-[1.2rem] text-white font-bold'>0 HACHI</h2>
                     
                    
                  </div>


                  {/*Total coin */}
                  <span className='text-[1.2rem] font-medium'>HACHI</span>
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
                    
                    <h2 className='text-[1.2rem] text-white font-bold'>DCTO</h2>
                     
                    
                  </div>


                  {/*Total coin */}
                  <span className='text-[1.2rem] font-medium'>0 DCTO</span>
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
                    
                    <h2 className='text-[1.2rem] text-white font-bold'>DUMP</h2>
                     
                    
                  </div>


                  {/*Total coin */}
                  <span className='text-[1.2rem] font-medium'>0 DUMP</span>
                </div>
              </div>
            </div>
          {/*  */}
          </>
        </div>




      </div>
      <Footer />
      
    </div>
  )
}

export default Wallet;