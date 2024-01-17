import React from 'react'

const Banner = () => {
  return (
    <>
    <div className='banner'>
       <div>
        <div>
           <h1 className='text-center text-sky-900' style={{fontSize : "3rem"}}>Nepal's leading study abroad consultants</h1>
           <p className='text-center text-2xl mt-1 text-sky-600 font-semibold'>We’ve helped 60,000+ students turn their dreams into reality, for FREE!*</p>
       </div>
       <div>
         <div className='Bimage'>
         <img className='bannerImage' src='/image/banner.png' alt='banner'></img>
         </div>
       </div>

       </div>

    </div>

    </>
  )
}

export default Banner