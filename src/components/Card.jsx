import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

function Card({data}) {
  return (
    <div className='relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
        <FaFileAlt/>
        <p className='text-SM leading-tight mt-5 font-semibold'>{data.desc}</p>
    <div className='footer absolute bottom-0 w-full left-0'>
        
    <div className='flex items-center justify-between px-8 py-5 mb-1'>
        <h5>{data.filesize}</h5>
        <span className='w-7 h-5 bg-zinc-600 rounded-full flex items-center justify-center '>
            <span></span>
        <MdOutlineFileDownload size="1em" color='#fff'/>
        </span>
      </div>
      <div className='tag w-full py-4 bg-green-600 flex items-center justify-center'>
      <h3 className='text-sm font-semibold'>  Download Now </h3>
      </div>
    </div>
      
        
    </div>
  )
}
 
export default Card

50:00 video time