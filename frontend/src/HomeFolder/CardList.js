import React from 'react'
import { FaArrowRight } from "react-icons/fa6";


const CardList = () => {
  return (
     <>
       <div>
          <div className='containerMYfixed borderTest' style={{marginBottom : "500px"}}>
           <div className='grid grid-cols-3 gap-10'>
           <div className='CardRotate'>
             <div className='cARD'>
                  <div className='midCard'>
                    <img className='midCardImage' src='/image/uk-5.webp' alt='uk'></img>
                  </div>
                  <div className='px-4 py-3 updownContent'>
                    <h1 className='text-xl font-semibold text-sky-900'>Study In Uk</h1>
                    <div className='mt-2 mb-2'>
                    <a href=''> Read More</a>
                    </div>
                    <div className='cardDownContet mt-8'>
                          <h1 className='text-4xl uppercase text-blue-800'>Study in UK</h1>
                          <p className='mt-4 text-md text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis fugit accusantium obcaecati voluptates enim, cumque numquam corporis, consequuntur sunt provident temporibus itaque, laudantium porro pariatur!</p>
                          <div className='mt-6  flex' >
                           
                           

                           <div className='py-2 px-4 rounded-3xl bg-gray-400 text-white flex shadow-lg shadow-gray-400'>
                           <a  href=''>Read More   </a>
                           <FaArrowRight className='mt-1 ml-3'/>
                           </div>
                    </div>
                    </div>
                  </div>
             </div>

           </div>
           </div>
          </div>
       </div>
     </>
  )
}

export default CardList