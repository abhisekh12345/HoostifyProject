import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const ShortVideo = () => {
  return (
    <>
        <div>
            <div className='containerVideo  '>
                <div  style={{width : "50%",padding:"10px 20px"}}>
                <iframe src="https://player.vimeo.com/video/358843243?h=8675574370" width="100%" height="360"  allow="autoplay; fullscreen; picture-in-picture" ></iframe>
                </div>
                <div className='videoContent' style={{width : "50%",padding:"10px 20px"}}> 
                      <h1 className='text-2xl text-blue-950'>Bridging the gap between students and their study abroad dreams since 2008</h1>
                      <p className='text-md mt-3 text-blue-950'>At AECC, we take pride in offering an unparalleled consultation experience. We strive to become the best education consultancy in Nepal. To do so. our consultants ensure a seamless process and earnestly commit to meeting your study abroad needs from start to finish.</p>
                    
                     <div className='mt-8 mb-6 flex' >
                           
                           

                            <div className='py-2 px-4 rounded-3xl bg-sky-800 text-white flex'>
                            <a  href=''>Talk to Consuller   </a>
                            <FaArrowRight className='mt-1 ml-3'/>
                            </div>
                     </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default ShortVideo